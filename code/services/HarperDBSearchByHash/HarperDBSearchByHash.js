/**
 * Returns an object array based on a search by hash (primary key)
 * @param {string} schema Schema the table resides under
 * @param {string} table Table where the data will be queried
 * @param {string[] | number[]} hash_values Array of hash values (primary key values) that will be deleted
 * @param {string[]} get_attributes (optional) String array of attribute names that will be returned in the results
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
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
    var harperdb = HarperDB(req.params.end_point);
    harperdb.searchByHash(req.params.schema, req.params.table, req.params.hash_values, req.params.attributes, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
