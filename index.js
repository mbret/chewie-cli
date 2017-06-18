#!/usr/bin/env node

'use strict'

process.title = 'chewie'

var cli = require('./src/cli')

cli.run(process.argv)