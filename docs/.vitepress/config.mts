import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MyBlog/",
  title: "zhishuchen",
  description: "zhishuchen-Blog",
  head: [
    ['link', { rel: 'icon', href: 'tree.ico' }],
    ["meta", { property: "og:title", content: "植树chen" }],
    ["meta", { property: "og:site_name", content: "植树chen" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "植树chen" }],
    ["meta", { property: "og:url", content: "https://zhishuchen.github.io/MyBlog" }],
    [
      "script",
      {
        "data-ad-client": "ca-pub-7650804804345609",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    // 添加百度统计
    [
      "script",
      {},
      `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?bc1fc3ec2768667d3746b56f7d411ddd";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
            `,
    ],
    // 添加谷歌统计
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-ZLSGRZRXCN",
        async: true,
      },
    ],
    [
      "script",
      {},
      `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-ZLSGRZRXCN');
            `,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
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
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
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
    footer: {
      copyright: "Copyright © 2021-present zhishuchen",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhishuchen' }
    ]
  }

})
