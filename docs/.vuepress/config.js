module.exports = {
  title: "main title",
  description: "description title",
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebarDepth: 2,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      { text: 'External', link: 'https://www.baidu.com' },
    ]
  },
  head: [["link", { rel: "icon", sizes: 48, href: "/public/favicon.ico" }]],
  markdown: {
    lineNumbers: true,
  },
};
