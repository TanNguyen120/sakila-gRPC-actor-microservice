const client = require('./client')
client.list({}, (error, actors) => {
    if (!error) {
        console.log('Fetch list of actor successfully!')
        console.log(actors)
    } else {
        console.error(error)
    }
})