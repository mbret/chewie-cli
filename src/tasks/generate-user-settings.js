const fs = require('fs-extra');

class Task {

  constructor () {
    this.fileName = '.user.conf.json'
  }

  /**
   *
   */
  run (chewie, argv) {
    console.log(`Generating ${this.fileName} to ${process.cwd()} (do not overwrite existing file)`)
    fs.copySync(__dirname + `/../../templates/${this.fileName}.tmpl, process.cwd() + `/${this.fileName}`, {
      overwrite: false
    });
  }
}

module.exports.MyBuddyTask = Task;