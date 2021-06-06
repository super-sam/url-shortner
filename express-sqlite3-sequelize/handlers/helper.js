/**
 * 
 * @param {Object} req - Request Object
 * @param {string} req.method - Type of request GET | POST
 * @param {string} key  - Key that needs to be searched in the request
 * @param {string} [def=''] - The default value if key isn't found
 * 
 * @return {string} val - The value of key in the request
 */
const get = (req, key, def) => {
    if(!def){
        def = '';
    }
    if(req.method === 'GET'){
        return req.query.hasOwnProperty(key) ? req.query[key] : def;
    } else if(req.method === 'POST'){
        return req.body.hasOwnProperty(key) ? req.body[key] : def;
    }
    return '';
}

const getRandomString = (length) => {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

module.exports = {
    get,
    getRandomString
}
