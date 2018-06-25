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
    const harperdb = HarperDBInitialization();
    harperdb.searchByHash(req.params.body.schema, req.params.body.table, req.params.body.hashes, req.params.body.attributes, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
