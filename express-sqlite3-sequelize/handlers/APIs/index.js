const { URLMappingHelper }  = require('./models');
const { get, getRandomString } = require('../helper');

const createShortURL = (req, res) => {
    const surl = get(req, 'url');
    const sid = getRandomString(7);
    const umh = new URLMappingHelper();
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    umh.create(surl, sid)
    .then(shortUrlObj => {
        const response = {"status": "ok", "urlid": shortUrlObj.sid};
        res.jsonp(response)
    })
}

module.exports = {
    createShortURL: createShortURL,
}