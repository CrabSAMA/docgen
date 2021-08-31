import { genMarkdown } from './lib/cli/use.js'
import docgenConfig from './docgen.config.js'
import path from 'path'

const CONFIG = {
  genType: 'docute',
  title: 'Components',
  include: '**/*.vue',
  exclude: [],
  outDir: './',
  markdownDir: 'docs',
  markdownFile: '',
  host: '127.0.0.1',
  keepFolderStructure: false,
}

const mixConfig = Object.assign(CONFIG, {
  include: docgenConfig.package.map(item => path.join('node_modules', item.name, item.path))
})

genMarkdown(mixConfig)