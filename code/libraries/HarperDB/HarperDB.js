"use strict";

/**
 * HarperDB library for interating with HarperDB
 * @param {string} username Username used to authenticate against HarperDB
 * @param {string} password Password used to authenticate against HarperDB
 * @param {string} end_point Endpoint used to connect to an instance of HarperDB i.e. http://127.0.0.1:9925
 * @constructor
 */
function HarperDB(username, password, end_point){
    let http = Requests();

    /**
     * Create a schema
     * @param {string} schema Name of new schema to create
     * @param callback
     * @returns {Object}
     */
    function createSchema(schema, callback){
        let body = {
            operation:"create_schema",
            schema: schema
        };

        executeRequest(body, callback);
    }

    /**
     * Create a table
     * @param {string} schema Name of schema which the table will be added to
     * @param {string} table Name of the new Table to create
     * @param callback
     */
    function createTable(schema, table, callback){
        let body = {
            operation:"create_table",
            schema: schema,
            table: table
        };

        executeRequest(body, callback);
    }

    /**
     * Insert record(s)
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where data will be inserted
     * @param {Object[]} records Object array of records
     * @param callback
     */
    function insert(schema, table, records, callback){
        let body = {
            operation:"insert",
            schema: schema,
            table: table,
            records:records
        };

        executeRequest(body, callback);
    }

    /**
     * Update record(s)
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where data will be updated
     * @param {Object[]} records Object array of records
     * @param callback
     */
    function update(schema, table, records, callback){
        let body = {
            operation:"update",
            schema: schema,
            table: table,
            records:records
        };

        executeRequest(body, callback);
    }

    /**
     * Delete record(s)
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where data will be deleted
     * @param {[]} ids Array of hash values (primary keys) that will be deleted
     * @param callback
     */
    function deleter(schema, table, ids, callback){
        let body = {
            operation:"delete",
            schema: schema,
            table: table,
            hash_values:ids
        };

        executeRequest(body, callback);
    }

    /**
     * Search for records based on hash (primary key)
     * @param schema Schema the table resides under
     * @param table Table where the data will be queried
     * @param ids
     * @param attributes
     * @param callback
     */
    function searchByHash(schema, table, ids, attributes, callback){
        let body = {
            operation:"search_by_hash",
            schema: schema,
            table: table,
            hash_values:ids,
            get_attributes: attributes ? attributes : ["*"]
        };

        executeRequest(body, callback);
    }

    /**
     * Search by value on an attribute
     * @param schema
     * @param table
     * @param search_attribute
     * @param search_value
     * @param attributes
     * @param callback
     */
    function searchByValue(schema, table, search_attribute, search_value, attributes, callback){
        let body = {
            operation:"search_by_value",
            schema: schema,
            table: table,
            search_attribute: search_attribute,
            search_value: search_value,
            get_attributes: attributes ? attributes : ["*"]
        };

        executeRequest(body, callback);
    }

    /**
     * Run SQL (INSERT / UPDATE / DELETE / SELECT)
     * @param sql
     * @param callback
     */
    function sql(sql, callback){
        let body = {
            operation:"sql",
            sql: sql
        };

        executeRequest(body, callback);
    }

    /**
     * Execute a raw HarperDB call
     * @param json
     * @param callback
     */
    function executeOperation(json, callback){
        executeRequest(json, callback);
    }

    /**
     * Perform the request to HarperDB
     * @param body
     * @param callback
     */
    function executeRequest(body, callback){
        let options = {
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

        http.post(options, callback);
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