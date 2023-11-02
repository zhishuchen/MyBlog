import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MyBlog/",
  lang: 'zh-CN',
  title: "zhishuchen",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JAVA', link: '/JAVA/Foundations/foundations' },
      { text: 'DataBase', link: '/' },
      { text: 'Spring', link: '/' },
      { text: 'Project', link: '/' },
      { text: 'Tools', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'JAVA',
        items: [
          { text: 'Foundations', link: '/foundations' },
          { text: 'Advanced', link: '/advanced' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhishuchen' }
    ]
  }
})
