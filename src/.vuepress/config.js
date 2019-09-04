const menu = require('./menu.js')

const config = {
  dest: 'docs/',
  base: '/',
  title: 'note.wiki',
  description: '少侠是个练武奇才，我将毕生所学传授予你<br> (๑•̀ㅂ•́) ✧',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-104632485-5'
    }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    repo: 'itibbers/notes',
    repoLabel: 'Github',
    docsRepo: 'itibbers/notes',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page'
  },
  markdown: {
    lineNumbers: false
  },
  evergreen: true
}

Object.assign(config.themeConfig, menu)
module.exports = config
