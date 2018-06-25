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
    const harperdb = HarperDBInitialization();
    harperdb.searchByValue(req.params.body.schema, req.params.body.table, req.params.body.search_attribute, req.params.body.search_value, req.params.body.attributes, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
