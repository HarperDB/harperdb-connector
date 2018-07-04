/**
 * Creates a new table in an existing schema in HarperDB
 * @param {string} schema Name of schema to create table under
 * @param {string} table Name of the new Table to create
 * @param {string} hash_attribute Name of the hash attribute (primary key) that will be the unique identifier for each row
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params.body = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "hash_attribute": "id"
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
*  "message": "table dev.dog successfully created."
*  }
 */
function HarperDBCreateTable(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.createTable(req.params.schema, req.params.table, req.params.hash_attribute, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
