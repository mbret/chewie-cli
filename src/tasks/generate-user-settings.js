const fs = require('fs-extra');

class Task {

  /**
   *
   */
  run (chewie, argv) {
    console.log(`Generating settings.json to ${process.cwd()} (do not overwrite existing file)`)
    fs.copySync(__dirname + "/../../templates/settings.json.tmpl", process.cwd() + "/settings.json", {
      overwrite: false
    });
  }
}

module.exports.MyBuddyTask = Task;