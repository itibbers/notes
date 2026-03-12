# SSR, Hydration & Data Fetching — Knowledge Summary

## 1. Core Concept: SSR + Hydration

Server-Side Rendering (SSR) renders components to an HTML string on the server, sends it to the browser for fast initial display, then "hydrates" — attaching JavaScript/event listeners to the existing DOM so the framework takes control.

### React
```jsx
// Server
import { renderToString } from 'react-server-dom'
const html = renderToString(<App data={data} />)

// Client
import { hydrateRoot } from 'react-dom/client'
hydrateRoot(document.getElementById('root'), <App data={data} />)
```

### Vue
```js
// Server
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

const app = createSSRApp(App, { initialData: data })
const html = await renderToString(app)  // async, unlike React

// Client — same createSSRApp, auto-detects SSR HTML and hydrates
const app = createSSRApp(App, { initialData: window.__INITIAL_STATE__ })
app.mount('#app')
```

**Key difference:** React uses two separate APIs (`renderToString` vs `hydrateRoot`). Vue uses one — `createSSRApp` — which auto-detects server vs client context.

---

## 2. Data Fetching Strategies (Nuxt / Vue)

### `useFetch` (default — blocking)
Fetch runs on server and **blocks** HTML until data is ready. Data is embedded in HTML — good for SEO.

### `server: false` — Client-only fetch
```js
const { data } = await useFetch('/api/data', { server: false })
```
- Fetch is **skipped entirely** on the server
- Page renders immediately without data
- Fetch runs after client hydration
- Use for: auth-gated/user-specific data, non-SEO content

### `useLazyFetch` — Non-blocking server fetch
```js
const { data } = await useLazyFetch('/api/data')
```
- Fetch **starts** on the server but doesn't block HTML delivery
- Page sends immediately; data fills in when ready
- Use for: faster TTFB when data isn't critical for initial render

### Comparison Table

| Strategy | Runs on Server? | Blocks HTML? | Good for SEO? |
|---|---|---|---|
| `useFetch` (default) | ✅ Yes | ✅ Yes | ✅ Yes |
| `server: false` | ❌ No | ❌ No | ❌ No |
| `useLazyFetch` | ✅ Yes | ❌ No | ⚠️ Partial |

---

## 3. React Equivalents for Data Fetching

React has no built-in `useFetch`. Common solutions:

### TanStack Query (most powerful)
```js
import { useQuery } from '@tanstack/react-query'

// Client-only (like server: false)
const { data } = useQuery({
  queryKey: ['data'],
  queryFn: () => fetch('/api/data').then(r => r.json()),
  enabled: typeof window !== 'undefined'
})

// SSR: prefetch on server, dehydrate state, rehydrate on client
await queryClient.prefetchQuery({ queryKey: ['data'], queryFn: fetchData })
const dehydratedState = dehydrate(queryClient)
```

### SWR (simpler, by Vercel)
```js
import useSWR from 'swr'
const { data, isLoading } = useSWR('/api/data', fetcher)
```

### Next.js Server Components (closest to Nuxt's useFetch)
```js
// Runs on server only — no client JS required
async function Page() {
  const data = await fetch('/api/data').then(r => r.json())
  return <div>{data.title}</div>
}
```

### Nuxt vs React Equivalents

| Nuxt | React Equivalent |
|---|---|
| `useFetch` | TanStack Query prefetch + hydration |
| `server: false` | `enabled: isClient` in `useQuery` |
| `useLazyFetch` | `useQuery` default (non-blocking) |
| Built-in, zero config | Requires library + manual SSR wiring |

---

## 4. Progressive Rendering

**Progressive Rendering** is a broader concept — delivering and displaying content to the user *incrementally* rather than waiting for everything to be ready.

It is NOT the same as data fetching strategies, but they are related.

### Techniques under Progressive Rendering

| Technique | Description |
|---|---|
| **Streaming SSR** | Send HTML in chunks as ready (`renderToPipeableStream` in React, `pipeToWebWritable` in Vue) |
| **Suspense / Fallbacks** | Show placeholder UI while slow parts load |
| **Lazy Hydration** | Hydrate parts of the page on demand, not all at once |
| **Islands Architecture** | Only hydrate interactive components (used by Astro) |

```jsx
// React Suspense — progressive rendering in action
<Suspense fallback={<Spinner />}>
  <SlowComponent />  {/* streams in when ready */}
</Suspense>
```

### Relationship Diagram

```
Progressive Rendering (broad concept)
│
├── Streaming SSR          ← how HTML is sent to browser
├── Suspense / Fallbacks   ← how UI handles waiting
└── Data Fetching Strategy ← when/where data is fetched
     ├── server: false      (skip server fetch entirely)
     └── useLazyFetch       (non-blocking server fetch)
```

Data fetching strategies like `useLazyFetch` and `server: false` **contribute to** progressive rendering but are not the whole picture.

---

## 5. Framework Abstractions

Both React and Vue ecosystems have meta-frameworks that abstract SSR complexity:

| Meta-framework | Base | SSR abstraction |
|---|---|---|
| **Next.js** | React | Server Components, `getServerSideProps` |
| **Nuxt** | Vue | `useFetch`, `useAsyncData`, file-based routing |
| **Astro** | Any | Islands architecture, zero JS by default |

In practice, most SSR apps use these meta-frameworks rather than wiring `renderToString` / `hydrateRoot` manually.
