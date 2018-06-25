/**
 * Returns an object array based on a search by hash (primary key)
 * @param {Object} body
 * @example
 *
 * req.params.body = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "hash_values":[1,3],
 *      "attributes":["*"]
 *  };
 */
function HarperDBSearchByHash(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.searchByHash(req.params.body.schema, req.params.body.table, req.params.body.hashes, req.params.body.attributes, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
