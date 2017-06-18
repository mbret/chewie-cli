const jsonfile = require('jsonfile')
const Moniker = require('moniker')
const path = require('path')
const uuid = require('uuid')

class Task {

  /**
   *
   */
  run (chewie, argv) {
    let file = path.join(process.cwd(), '.system')
    console.log('Generating .system file at %s if not exist', process.cwd())
    let obj = null
    try {
      obj = jsonfile.readFileSync(file)
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e
      }
    }
    if (!obj) {
      obj = {id: uuid.v4(), name: Moniker.generator([Moniker.adjective, Moniker.noun]).choose()}
      console.log(`.system does not exist, creating a new one with`, obj)
      jsonfile.writeFileSync(file, obj)
    }

    return obj
  }
}

module.exports.MyBuddyTask = Task;