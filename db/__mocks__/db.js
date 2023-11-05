class Pool{
    constructor(){

    }

    query(query,params,callback){
        if(params.length == 0 || params.some(p => p == undefined)){
            callback("error",null);
            return;
        }
        callback(null, "ok");
    }
}

const pool = new Pool();
module.exports = pool