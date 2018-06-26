/**
 * Returns an object array based on a search by hash (primary key)
 * @param {Object} body
 * @example
 *
 * req.params.body = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "search_attribute":"dog_name",
 *      "search_value":"Penny",
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
      }
 *  ]
 */
function HarperDBSearchByValue(req, resp) {
    const harperdb = HarperDB();
    harperdb.searchByValue(req.params.schema, req.params.table, req.params.search_attribute, req.params.search_value, req.params.attributes, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
