var fs = require('fs');
var path = require('path');
var Task = require('./task').Task;
//var ionicAppLib = require('ionic-app-lib');
var Info = require('../info');
    //IonicStats = require('./stats').IonicStats;

var MyBuddyTask = function() {};

MyBuddyTask.prototype = new Task();

MyBuddyTask.prototype.run = function(ionic) {
    this.ionic = ionic;

    try {

        var info = Info.gatherInfo();

        //Info.getIonicVersion(info, process.cwd());
        //Info.getIonicCliVersion(info, path.join(__dirname, '../../'));

        Info.printInfo(info);

        //Info.checkRuntime();
    } catch (ex) {
        this.ionic.fail('There was an error retrieving your environment information:', ex);
    }
};

exports.MyBuddyTask = MyBuddyTask;