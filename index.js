const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.redirect('https://koodikrapula.fi');
})

app.get(['/shortener', '/short', '/sh', '/s'], (req, res) => {
    res.sendFile(path.join(__dirname + '/shortener.html'));
})

app.get('/:path', (req, res) => {
    res.redirect(`https://koodikrapula.fi/${req.params.path}`);
})

app.listen(process.env.port || 3000)