/**
 * Deletes data by hash (primary key) in HarperDB
 * @param {Object} body
 * @example
 *
 * req.params.body = {
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
    const harperdb = HarperDB();
    harperdb.delete(req.params.schema, req.params.table, req.params.hash_values, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
