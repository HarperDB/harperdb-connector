/**
 * Deletes data by hash (primary key) in HarperDB
 * @param {string} body
 * @example
 *
 * req.params.body = [{
 *      "schema":"dev",
 *      "table":"dog",
 *      "hash_values":[ 5,8]
 *  }];
 */
function HarperDBDelete(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.delete(req.params.body.schema, req.params.body.table, req.params.hash_values, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
