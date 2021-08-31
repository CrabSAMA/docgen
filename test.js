// 导入 parser 函数
import { parser } from './lib/parser/index.js'
import { Render } from './lib/markdown-render/index.js'
import fs from 'fs'

// 读取 vue 文件内容
const source = fs.readFileSync(
  '/Users/crab.huang/Project/component/src/layout/menu.vue',
  'utf-8'
)
// 使用 parser 函数解析并得到结果
try {
  const parserRes = parser(source)
  // 创建渲染实例
  const r = new Render(parserRes, {
    props: [
      'Name',
      'Description',
      'Type',
      'Required',
      'Value',
      'Default',
      'Since',
    ],
  })
  // 基本渲染，返回值是一个对象
  const renderRes = r.render()
  // 渲染完整的 markdown 文本，返回值是 markdown 字符串
  const markdownRes = r.renderMarkdown()
  fs.writeFileSync(
    'test.md',
    markdownRes.content.replaceAll(/<!-- @vuese.*/g, '')
  )
} catch (e) {
  console.error(e)
}