const { HarperDBConnect } = require('./harperdb-connect');

/**
 * HarperDB library for interating with HarperDB
 * @param {string} username
 * @param {string} password
 * @param {string} end_point
 * @constructor
 */
function HarperDB(username, password, end_point){
    let http = Requests();

    /**
     * Create a schema
     * @param {string} schema
     */
    function createSchema(schema, callback){

    }

    function createTable(schema, table, callback){

    }

    function insert(schema, table, records, callback){

    }

    function update(schema, table, records, callback){

    }

    function deleter(schema, table, ids, callback){

    }

    function searchByHash(schema, table, ids, attributes, callback){

    }

    function searchByValue(schema, table, value, attributes, callback){

    }

    function sql(sql, callback){

    }

    function executeOperation(json, callback){

    }

    function buildRequest(body){
        var options = {
            uri:end_point,
            body: body,
            headers:{
                "Content-Type": "application/json"
            },
            auth:{
                user:username,
                pass: password
            }
        };
    }

    return {
        createSchema,
        createTable,
        insert,
        update,
        delete: deleter,
        searchByHash,
        searchByValue,
        sql,
        executeOperation
    };
}