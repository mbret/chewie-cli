'use strict';

var MyBuddySystemLib = require('../../my-buddy-system-lib');
console.log(MyBuddySystemLib);
var Utils = MyBuddySystemLib.utils;
var logging = MyBuddySystemLib.logging;
var Git = require("nodegit");

var GIT_PROJECT_WRAPPER = 'my-buddy-project-base';

class MyBuddyTask {

    run(myBuddy, argv){

        console.log(argv);

        console.log('MyBuddyTask');

        // need at least task + path
        if(argv._.length < 2) {
            return Utils.fail('Invalid command', 'create');
        }

        var path = argv._[1];

        if (path == '.') {
            console.error('Please name your Ionic project something meaningful other than \'.\'');
            return;
        }

        //
        this
            .fetchRepository(path)
            .then(function(){
                console.log('done');
            });

    }

    fetchRepository(path){
        return Git.Clone("https://github.com/mbret/" + GIT_PROJECT_WRAPPER, path);
    }
}

module.exports.MyBuddyTask = MyBuddyTask;