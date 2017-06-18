#!/usr/bin/env node

'use strict';

process.title = 'buddy';

var cli = require('../lib/cli');

cli.run(process.argv);