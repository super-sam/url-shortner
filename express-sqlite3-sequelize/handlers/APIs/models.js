const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory', {
    // Choose one of the logging options
    logging: (...msg) => console.log(msg), // Displays all log function call parameters
  });

class URLMapping extends Model {}

URLMapping.init({
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sid: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'URLMapping',
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
});


class URLMappingHelper {
    async create(url, sid) {
        try{
            const urlMappingObj = await URLMapping.create({
                url: url,
                sid: sid
            })
            // console.info(urlMappingObj);
            return urlMappingObj
        } catch(err){
            console.error('surl creation Failed');
            console.error(err);
            return null;
        }
    }

    async getBySid(sid){
        let urlMappingObj = null;
        try {
            urlMappingObj = await URLMapping.findOne({
                where: {
                    sid: sid
                }
            })
            // console.info(urlMappingObj);
        } catch (error) {
            
        } finally {
            return urlMappingObj
        }
    }
}

module.exports = {
    URLMapping: URLMapping,
    URLMappingHelper: URLMappingHelper
}