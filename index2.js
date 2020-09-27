// import Samsung, { APPS, KEYS } from 'samsung-tv-control'
const { Samsung, KEYS, APPS } = require('samsung-tv-control')

const config = {
  // debug: true, // Default: false
  ip: '192.168.1.10',
  mac: '5C:C1:D7:9B:77:7A',
  token: '16421633',
  // port: 8001,
}

const control = new Samsung(config)

// control.turnOn()
control
  .isAvailable()
  .then(() => {
    // Get token for API
    // control.getToken(token => {
    //   console.log('# Response getToken:', token)
    // })

    // Send key to TV
    control.sendKey(KEYS.KEY_POWER, function(err, res) {
      if (err) {
        throw new Error(err)
      } else {
        console.log(res)
      }
      control.closeConnection();
    });

    // Get all installed apps from TV
    // control.getAppsFromTV((err, res) => {
    //   if (!err) {
    //     console.log('# Response getAppsFromTV', res)
    //   }
    // })

    // Open app by appId which you can get from getAppsFromTV
    // control.openApp(APPS.YouTube, (err, res) => {
    //   if (!err) {
    //     console.log('# Response openApp', res)
    //   }
    // })

    // Control will keep connection for next messages in 1 minute
    // If you would like to close it immediately, you can use `closeConnection()`
    // control.closeConnection()
  })
  .catch(e => console.error(e))