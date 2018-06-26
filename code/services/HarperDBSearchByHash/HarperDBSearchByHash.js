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
 *
 *  @returns {Object[]}
 *  @example
 *  [
 *      {
        "id" : 1,
        "dog_name" : "Penny",
        "owner_name": "Kyle",
        "breed_id":154,
        "age":5,
        "weight_lbs":35,
        "adorable":true
      },
 {
     "id" : 3,
     "dog_name" : "Alby",
     "owner_name": "Kaylan",
     "breed_id":348,
     "age":5,
     "weight_lbs":84,
     "adorable":true
   }
 *  ]
 */
function HarperDBSearchByHash(req, resp) {
    const harperdb = HarperDB();
    harperdb.searchByHash(req.params.schema, req.params.table, req.params.hashes, req.params.attributes, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
