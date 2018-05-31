const fs = require('fs')
const ncp = require('ncp').ncp

const profileStr = fs.readFileSync(
  './warriorjs/artist-beginner/.profile',
  'utf8'
)
const profile = JSON.parse(atob(profileStr))

ncp('./warriorjs/artist-beginner', './src/Level ' + profile.levelNumber)

function atob(string) {
  return new Buffer(string, 'base64').toString()
}
