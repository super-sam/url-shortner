const { URLMapping }  = require('./handlers/APIs/models');

async function syncAllModels(){
    const models = [URLMapping];
    for(let i = 0; i < models.length; i += 1){
        const model = models[i];
        await model.sync()
    }
}

syncAllModels()
.then(() => {console.log("All models were synchronized successfully.")})