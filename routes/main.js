const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
    const data = {
        greeting: 'Hey Welcome to the show',
        introduction: 'Developing everyday'
    }

    res.render('landing', data)
})


module.exports = router;