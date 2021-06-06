const { URLMappingHelper }  = require('../APIs/models');
const { get } = require('../helper');

const redirect = (req, res) => {
    const {sid} = req.params;
    const umh = new URLMappingHelper();
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    umh.getBySid(sid)
    .then(shortUrlObj => {
        res.redirect(301, shortUrlObj.url)
        // res.jsonp({status: 'ok', 'url': shortUrlObj.url})
    })
}

module.exports = {
    redirectToURL: redirect
}