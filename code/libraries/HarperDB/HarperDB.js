/**
 * Library for interating with HarperDB
 * @constructor
 * @param end_point the endpoint where the database exist
 */
function HarperDB(end_point){
    const harperdb_end_point = end_point ? end_point : HarperDBConfiguration.end_point;
    var http = Requests();

    /**
     * Create a schema
     * @param {string} schema Name of new schema to create
     * @param callback
     * @returns {Object}
     * @example
     *  {
     *      "message": "schema dev successfully created"
     * }
     */
    function createSchema(schema, callback){
        const body = {
            operation:"create_schema",
            schema: schema
        };

        executeRequest(body, callback);
    }

    /**
     * Create a table
     * @param {string} schema Name of schema which the table will be added to
     * @param {string} table Name of the new Table to create
     * @param {string} hash_attribute Name of the hash attribute (primary key) that will be the unique identifier for each row
     * @param callback
     * @returns {Object}
     * @example
     * {
     *  "message": "table dev.dog successfully created."
     *  }
     */
    function createTable(schema, table, hash_attribute, callback){
        const body = {
            operation:"create_table",
            schema: schema,
            table: table,
            hash_attribute:hash_attribute
        };

        executeRequest(body, callback);
    }

    /**
     * Insert record(s)
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where data will be inserted
     * @param {Object[]} records Object array of records
     * @example
     * [
     {
       "name":"Harper",
       "breed":"Mutt",
       "id":"1",
       "age":5

     },
     {
       "name":"Penny",
       "breed":"Mutt",
       "id":"3",
       "age":5

     }
     ]
     * @param callback
     * @returns  {Object}
     * @example
     * {
     *  "message": "successfully wrote 2 records"
     *  }
     */
    function insert(schema, table, records, callback){
        const body = {
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
     * @example
     * [
         {
           "id": 1,
           "weight_lbs": 55
         },
         {
         "id": 3,
         "owner": "kyle b",
         "weight_lbs": 35
       }
     ]
     * @param callback
     *
     * @returns  {Object}
     * @example
     * {
          "message": "updated 2 of 2 records",
          "update_hashes": [
            1,
            3
          ],
          "skipped_hashes": []
        }
     */
    function update(schema, table, records, callback){
        const body = {
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
     * @param {string[] | number[]} ids Array of hash values (primary keys) that will be deleted
     * @param callback
     * @returns  {Object}
     * @example
     * {
          "message": "records successfully deleted"
        }
     */
    function deleter(schema, table, ids, callback){
        const body = {
            operation:"delete",
            schema: schema,
            table: table,
            hash_values:ids
        };

        executeRequest(body, callback);
    }

    /**
     * Search for records based on hash (primary key)
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where the data will be queried
     * @param {string[] | number[]} hash_values Array of hash values (primary key values) that will be deleted
     * @param {string[]} get_attributes (optional) String array of attribute names that will be returned in the results
     * @param callback
     * @returns  {Object[]}
     * @example
     * [
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
     */
    function searchByHash(schema, table, hash_values, get_attributes, callback){
        const body = {
            operation:"search_by_hash",
            schema: schema,
            table: table,
            hash_values:hash_values,
            get_attributes: get_attributes ? get_attributes : ["*"]
        };

        executeRequest(body, callback);
    }

    /**
     * Search by value on an attribute
     * @param {string} schema Schema the table resides under
     * @param {string} table Table where the data will be queried
     * @param {string} search_attribute Attribute upon which to perform the search
     * @param {string} search_value Value that will be used in the search
     * @param {string[]} get_attributes (optional) String array of attribute names that will be returned in the results
     * @param callback
     * @returns  {Object[]}
     * @example
     * [
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
     */
    function searchByValue(schema, table, search_attribute, search_value, get_attributes, callback){
        const body = {
            operation:"search_by_value",
            schema: schema,
            table: table,
            search_attribute: search_attribute,
            search_value: search_value,
            get_attributes: get_attributes ? get_attributes : ["*"]
        };

        executeRequest(body, callback);
    }

    /**
     * Run SQL (INSERT / UPDATE / DELETE / SELECT)
     * @param {string} sql SQL Statement to execute
     * @param callback
     * @returns  {Object[]}
     * @example
     * [
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
     */
    function sql(sql, callback){
        const body = {
            operation:"sql",
            sql: sql
        };

        executeRequest(body, callback);
    }

    /**
     * Returns the schema/table/attribute meta data for all schemas
     * @param callback
     * @returns  {Object[]}
     * @example
     * [
     {
       "schema": "dev",
       "name": "breed",
       "hash_attribute": "id",
       "id": "4d560884-0f57-4756-a564-eea76f64d0af",
       "attributes": [
         {
           "attribute": "section"
         },
         {
           "attribute": "field6"
         },
         {
           "attribute": "country"
         },
         {
           "attribute": "name"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "image"
         }
       ]
     },
     {
       "schema": "dev",
       "name": "dog",
       "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
       "hash_attribute": "id",
       "attributes": [
         {
           "attribute": "adorable"
         },
         {
           "attribute": "weight_lbs"
         },
         {
           "attribute": "owner_name"
         },
         {
           "attribute": "doc"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "dog_name"
         },
         {
           "attribute": "age"
         },
         {
           "attribute": "breed_id"
         }
       ]
     }
     ]
     */
    function describeAll(callback){
        const body = {
            operation:"describe_all"
        };

        executeRequest(body, callback);
    }

    /**
     * Returns the schema/table/attribute meta data for a schema
     * @param {schema} schema Name of schema to return meta-data
     * @param callback
     * @returns  {Object[]}
     * @example
     * [
     {
       "schema": "dev",
       "name": "breed",
       "hash_attribute": "id",
       "id": "4d560884-0f57-4756-a564-eea76f64d0af",
       "attributes": [
         {
           "attribute": "section"
         },
         {
           "attribute": "field6"
         },
         {
           "attribute": "country"
         },
         {
           "attribute": "name"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "image"
         }
       ]
     },
     {
       "schema": "dev",
       "name": "dog",
       "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
       "hash_attribute": "id",
       "attributes": [
         {
           "attribute": "adorable"
         },
         {
           "attribute": "weight_lbs"
         },
         {
           "attribute": "owner_name"
         },
         {
           "attribute": "doc"
         },
         {
           "attribute": "id"
         },
         {
           "attribute": "dog_name"
         },
         {
           "attribute": "age"
         },
         {
           "attribute": "breed_id"
         }
       ]
     }
     ]
     */
    function describeSchema(schema, callback){
        const body = {
            operation:"describe_schema",
            schema:schema
        };

        executeRequest(body, callback);
    }

    /**
     * loads csv data into a table
     * @param {string} schema Schema the table resides under
     * @param {string} table Table the csv data is loading into
     * @param {string} data CSV formatted
     * @param callback
     * @returns  {Object}
     * @example
     * {
        "message": "successfully loaded 3 records"
        }
     */
    function csvDataLoad(schema, table, data, callback){
        const body = {
            operation:"csv_data_load",
            schema:schema,
            table:table,
            data:data
        };

        executeRequest(body, callback);
    }

    /**
     * Execute a raw HarperDB call
     * @param {Object} json
     * @example
     * {
        "operation":"insert",
        "schema":"dev",
        "table":"dog",
        "records": [
          {
            "name":"Harper",
            "breed":"Mutt",
            "id":"1",
            "age":5

          },
          {
            "name":"Penny",
            "breed":"Mutt",
            "id":"3",
            "age":5
          }
        ]
        }
     * @param callback
     * @returns {Object | Object[]}
     *
     */
    function executeOperation(json, callback){
        executeRequest(json, callback);
    }

    /**
     * Perform the request to HarperDB
     * @param {Object} body
     * @param callback
     * @returns {Object | Object[]}
     *
     */
    function executeRequest(body, callback){
        var options = {
            uri: harperdb_end_point,
            body: body,
            headers:{
                "Content-Type": "application/json"
            },
            auth:{
                user: HarperDBConfiguration.username,
                pass: HarperDBConfiguration.password
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
        executeOperation,
        describeAll,
        describeSchema,
        csvDataLoad
    };
}