// A FAKE CLIENT FOR TESTING



const client = require('./client')
// client.list({}, (error, actors) => {
//     if (!error) {
//         console.log('Fetch list of actor successfully!')
//         console.log(actors)
//     } else {
//         console.error(error)
//     }
// });
// client.get({ id: 44 }, (error, actor) => {
//     if (!error) {
//         console.log('Fetch actor successfully!')
//         console.log(actor)
//     } else {
//         console.error(error)
//     }
// });

// client.create({ first_name: "Nguyen", last_name: "Huy" }, (error, actor) => {
//     if (!error) {
//         console.log('Create actor successfully!')
//         console.log('affected rows: ' + actor.rows)
//     } else {
//         console.error(error)
//     }
// });

client.update({ first_name: "Nguyen", last_name: "Huy", actor_id: "22" }, (error, actor) => {
    if (!error) {
        console.log('Update actor successfully!')
        console.log('affected rows: ' + actor.rows)
    } else {
        console.error(error)
    }
});