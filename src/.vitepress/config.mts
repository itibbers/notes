import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../docs',
  base: '/',
  title: 'note.wiki',
  description: '少侠是个练武奇才，我将毕生所学传授予你 (๑•̀ㅂ•́) ✧',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=UA-104632485-5' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-104632485-5');`],
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Blog', link: 'https://itibbers.com' },
    ],
    sidebar: {
      '/frontend/': [
        { text: 'HTML', link: '/frontend/' },
        { text: 'CSS', link: '/frontend/css' },
        { text: 'JS', link: '/frontend/js' },
        { text: 'ES 新特性', link: '/frontend/es' },
        { text: 'Vue', link: '/frontend/vue' },
        { text: 'React', link: '/frontend/react' },
        { text: 'SSR', link: '/frontend/ssr' },
        { text: '浏览器', link: '/frontend/browser' },
        { text: '网络', link: '/frontend/network' },
        { text: '算法', link: '/frontend/algorithm' },
        { text: '实验室', link: '/frontend/lib' },
      ],
    },
    editLink: {
      pattern: 'https://github.com/itibbers/notes/edit/master/src/:path',
      text: 'Edit this page',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/itibbers/notes' }],
    lastUpdated: {
      text: 'Last Updated',
    },
  },
  markdown: {
    lineNumbers: false,
  },
})
