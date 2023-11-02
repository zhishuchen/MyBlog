import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MyBlog/",
  lang: 'zh-CN',
  title: "zhishuchen",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/tree.ico' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JAVA', link: '/JAVA/Foundations/foundations' },
      { text: 'DataBase', link: '/DataBase/MySQL/MySQL' },
      { text: 'Spring', link: '/Spring/Spring/spring' },
      { text: 'Project', link: '/Project/one' },
      { text: 'Tools', link: '/Tools/git' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {
      "/Examples": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },

      ],
      "/JAVA": [
        {
          text: 'JAVA',
          items: [
            { text: 'Foundations', link: '/JAVA/Foundations/foundations' },
            { text: 'Advanced', link: '/JAVA/Advanced/advanced' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhishuchen' }
    ]
  }

})
