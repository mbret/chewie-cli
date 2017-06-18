'use strict';

var fs = require('fs');
var path = require('path');
var Task = require('./task').Task;
const spawn = require('child_process').spawn;

var MyBuddyTask = function() {};

MyBuddyTask.prototype = new Task();

MyBuddyTask.prototype.run = function(ionic) {
    this.ionic = ionic;

    var appPath = process.cwd();
    const ls = spawn('node', [appPath + '/index.js'], {detached: false, stdio: 'inherit'});
};

exports.MyBuddyTask = MyBuddyTask;