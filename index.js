const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.redirect('https://koodikrapula.fi');
})

app.get(['/shortener', '/short', '/sh', '/s'], (req, res) => {
    res.send('Url shortened 🐱‍👤!')
})

app.get('/:path', (req, res) => {
    res.redirect(`https://koodikrapula.fi/${req.params.path}`);
})

app.listen(PORT)