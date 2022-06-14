import { readFile } from 'node:fs/promises'

const filepath = './.eslintrc.js'

readFile(filepath, {encoding: 'utf-8'}).then(console.log)