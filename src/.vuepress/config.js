module.exports = {
  dest: 'docs/',
  base: '/',
  title: 'note.wiki',
  description: '少侠是个练武奇才，我将毕生所学传授予你<br> (๑•̀ㅂ•́) ✧',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Blog', link: 'https://itibbers.com' },
    ],
    displayAllHeaders: true,
    sidebar: {
      '/frontend/': [
        '',
        'js',
        'css',
      ]
    },
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    repo: 'itibbers/notes',
    repoLabel: 'Github',
    docsRepo: 'itibbers/notes',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page'
  },
  markdown: {
    lineNumbers: true
  },
  evergreen: true
}
