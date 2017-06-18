var TASKS = [
    {
        title: 'help',
        name: 'help',
        summary: 'Provides help for a certain command',
        args: {
            '[command]': 'The command you desire help with'
        },
        module: './tasks/help'
    },
    {
        title: 'info',
        name: 'info',
        summary: 'List information about the users runtime environment',
        module: './tasks/info'
    },
    {
        title: 'create',
        name: 'create',
        summary: 'Create a new project in the specified PATH',
        args: {
            '[options]': 'any flags for the command',
            '<PATH>': 'directory for the new project',
            '[template]': 'Starter templates can either come from a named template, \n' +
            '(ex: tabs, sidemenu, blank),\n' +
            'a Github repo, a Codepen url, or a local directory.\n' +
            'Codepen url, ex: http://codepen.io/ionic/pen/odqCz\n' +
            'Defaults to Ionic "tabs" starter template'
        },
        options: {
            '--appname|-a': 'Human readable name for the app (Use quotes around the name)',
            '--id|-i': 'Package name for <widget id> config, ex: com.mycompany.myapp',
            '--no-cordova|-w': {
                title: 'Create a basic structure without Cordova requirements',
                boolean: true
            },
            '--sass|-s': {
                title: 'Setup the project to use Sass CSS precompiling',
                boolean: true
            },
            //'--list|-l': {
            //    title: 'List starter templates available',
            //    boolean: true
            //},
            '--io-app-id': 'The Ionic.io app ID to use',
            '--template|-t': 'Project starter template',
            '--zip-file|-z': 'URL to download zipfile for starter template'
        },
        module: './tasks/create'
    },
    {
        title: 'start',
        name: 'start',
        summary: 'Run a project',
        module: './tasks/start'
    },
];

module.exports = TASKS;