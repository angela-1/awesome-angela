// .vuepress/config.js
module.exports = {
  title: '花园',
  description: '一个种“花”的工程师。',
  themeConfig: {
  	logo: '/daisy.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '笔记', link: '/notes/' },
      { text: 'Github', link: 'https://www.github.com/angela-1/' },
    ],
    sidebar: {
      '/projects/': [
        '',     /* /foo/ */
        // 'one',  /* /foo/one.html */
        // 'two'   /* /foo/two.html */
      ],

      '/notes/': [
        '',      /* /bar/ */
        'docx-to-pdf', /* /bar/three.html */
        'filter-folders'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ]
    }
  }
}