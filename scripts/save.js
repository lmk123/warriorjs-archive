const fs = require('fs')
const ncp = require('ncp').ncp

const profileStr = fs.readFileSync(
  './warriorjs/artist-beginner/.profile',
  'utf8'
)
const profile = JSON.parse(atob(profileStr))

const dest = './src/Level ' + profile.levelNumber

ncp(
  './warriorjs/artist-beginner',
  dest,
  {
    filter: /\.gitkeep/
  },
  () => {
    console.log(`Saved to '${dest}/'.`)
  }
)

function atob(string) {
  return new Buffer(string, 'base64').toString()
}
