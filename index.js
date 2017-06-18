#!/usr/bin/env node

'use strict'

process.title = 'chewie'

const cli = require('./src/cli')

cli.run(process.argv)