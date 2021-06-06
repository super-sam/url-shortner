const { URLMapping }  = require('./handlers/APIs/models');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import Routes
const apiRouter = require('./routes/apis');
const redirect = require('./handlers/Redirect/index');


// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.
// Serve Client App Files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('homepage.ejs', {pageTitle: 'URL Shortner'})
})
app.post('/', (req, res) => {
    res.json({'message': 'Hello from URL Shortner', t: 'POST'})
})
app.use('/api', apiRouter);
app.use('/:sid', redirect.redirectToURL);

async function syncAllModels(){
    const models = [URLMapping];
    for(let i = 0; i < models.length; i += 1){
        const model = models[i];
        await model.sync()
    }
}

syncAllModels()
.then(() => {
    console.log("All models were synchronized successfully.")
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    })
})
