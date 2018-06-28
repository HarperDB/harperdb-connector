/**
 * Creates a new table in an existing schema in HarperDB
 * @param {Object} params
 * @example
 *
 * req.params.body = {
 *      "schema":"dev",
 *      "table":"dog"
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
*  "message": "table dev.dog successfully created."
*  }
 */
function HarperDBCreateTable(req, resp) {
    const harperdb = HarperDB();
    harperdb.createTable(req.params.schema, req.params.table, req.params.hash_attribute, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
