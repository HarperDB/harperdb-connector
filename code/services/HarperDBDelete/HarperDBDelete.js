/**
 * Deletes data by hash (primary key) in HarperDB
 * @param {string} schema Schema the table resides under
 * @param {string} table Table where data will be deleted
 * @param {string[] | number[]} ids Array of hash values (primary keys) that will be deleted
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "hash_values":[ 5,8]
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
        "message": "records successfully deleted"
    }
 */
function HarperDBDelete(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.delete(req.params.schema, req.params.table, req.params.hash_values, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
