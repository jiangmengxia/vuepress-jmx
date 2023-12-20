/*
 * @Description:
 * @Author: Jiangmengxia
 * @Email: jiangmengxia@nnuo.com
 * @Date: 2023-12-19 20:47:03
 * @LastEditors: jiangmengxia jiangmengxia@nnuo.com
 * @LastEditTime: 2023-12-20 12:29:13
 * @FilePath: \vuepress-jmx\docs\.vuepress\config.js
 */
const defaultTheme = require('@vuepress/theme-default')
// module.exports = (options)=> {
//   console.log('options',options)
//  return {
//   themeConfig:{},
//   extends: defaultTheme({
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Guide', link: '/guide/' },
//       { text: 'External', link: 'https://google.com' },
//     ]
//   }),
//  }
// }
module.exports = {
  themeConfig: {
    // 右上角的导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: 'auto'
    //  [
    //   {
    //     title: 'sider1',   // 必要的
    //     path: '/frontEndInterview/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       "",
    //       '/personal/'
    //     ]
    //   },
    //   {
    //     title: 'sider2',
    //     children: [],
    //     // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    //   }
    // ]
  }
}