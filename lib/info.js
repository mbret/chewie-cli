'use strict';

var fs = require('fs'),
    path = require('path'),
    shelljs = require('shelljs'),
    os = require('os'),
    semver = require('semver');
var logging = require('./logging');

exports.getLinuxEnvironmentInfo = function getLinuxEnvironmentInfo() {
    var result = shelljs.exec('lsb_release -id', { silent: true });
    return result.output.replace(/\n/g, ' ')
};

exports.getWindowsEnvironmentInfo = function getWindowsEnvironmentInfo() {
    // Windows version reference
    // http://en.wikipedia.org/wiki/Ver_%28command%29
    var version = os.release();
    var windowsVersion = null;
    switch(version) {
        case '5.1.2600':
            windowsVersion = 'Windows XP';
            break;
        case '6.0.6000':
            windowsVersion = 'Windows Vista';
            break;
        case '6.0.6002':
            windowsVersion = 'Windows Vista SP2';
            break;
        case '6.1.7600':
            windowsVersion = 'Windows 7';
            break;
        case '6.1.7601':
            windowsVersion = 'Windows 7 SP1';
            break;
        case '6.2.9200':
            windowsVersion = 'Windows 8';
            break;
        case '6.3.9600':
            windowsVersion = 'Windows 8.1';
            break;
    }

    return windowsVersion;
};

//http://stackoverflow.com/questions/6551006/get-my-os-from-the-node-js-shell
exports.getOsEnvironment = function getOsEnvironment(info) {
    switch(os.type()) {
        //case 'Darwin':
        //    info.os = Info.getMacInfo();
        //    info.xcode = Info.getXcodeInfo();
        //    info.ios_sim = Info.getIosSimInfo();
        //    info.ios_deploy = Info.getIosDeployInfo();
        //    break;
        case 'Windows_NT':
            info.os = this.getWindowsEnvironmentInfo();
            break;
        case 'Linux':
            info.os = this.getLinuxEnvironmentInfo();
            break;
    }
};

exports.getNodeVersion = function getNodeVersion(info) {
    info.node = process.version;
    // var command = 'node -v';
    // var result = shelljs.exec(command, { silent: true } );
    // info.node = result.output.replace('\n','');
};

exports.gatherGulpInfo = function gatherGulpInfo(info) {
    var result = shelljs.exec('gulp -v', { silent: true });

    try {
        if (result.code == 0) {
            // logging.logger.log(result.output);
            var gulpVersions = result.output.replace(/(\[.*\])/g, '').split('\n');
            if (gulpVersions.length > 0) {
                info.gulp = gulpVersions[0];
                info.gulp_local = gulpVersions[1];
            }
        }
    } catch (ex) {

    }
};

exports.printInfo = function printInfo(info) {
    logging.logger.info('\nYour system information:\n');

    if (info.ionic_cli) {
        logging.logger.info('Ionic CLI Version:', info.ionic_cli);
    }

    if (info.ionic_lib) {
        logging.logger.info('Ionic App Lib Version:', info.ionic_lib);
    }

    if (info.ios_deploy) {
        logging.logger.info('ios-deploy version:', info.ios_deploy)
    }

    if(info.ios_sim) {
        logging.logger.info('ios-sim version:', info.ios_sim);
    }

    logging.logger.info('OS:', info.os);
    logging.logger.info('Node Version:', info.node);

    if(info.xcode) {
        logging.logger.info('Xcode version:', info.xcode);
    }

    logging.logger.info('\n');
};

exports.gatherInfo = function gatherInfo() {
    var info = {};
    //For macs we want:
    //Mac version, xcode version (if installed)

    //For windows
    //Windows version

    //For all
    // Android SDK info
    // Cordova CLI info
    // Ionic CLI version
    // Ionic version

    // var info = {
    //   cordova: 'CLI v3.5.0',
    //   os: 'Mac OSX Yosemite',
    //   xcode: 'Xcode 6.1.1',
    //   ionic: '1.0.0-beta.13',
    //   ionic_cli: '1.3.0'
    // };

    //Info.getIonicLibVersion(info);

    this.getNodeVersion(info);

    this.getOsEnvironment(info);

    //Info.getCordovaInfo(info);

    this.gatherGulpInfo(info);

    return info;
};