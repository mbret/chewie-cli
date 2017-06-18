var fs = require('fs'),
    IonicAppLib = module.exports,
    path = require('path');
var libPath = path.join(__dirname);

var capitalize = function capitalize(str) {
    return str && str[0].toUpperCase() + str.slice(1);
};

var camelCase = function camelCase(input) {
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
};

//
// Setup all modules as lazy-loaded getters.
//
fs.readdirSync(libPath).forEach(function (file) {
    file = file.replace('.js', '');
    var command;

    if (file.indexOf('-') > 0) {
        command = camelCase(file);
    } else {
        command = file;
    }

    IonicAppLib.__defineGetter__(command, function () {
        return require(libPath + '/' + file);
    });
});

IonicAppLib.__defineGetter__('semver', function () {
    return require('semver');
});