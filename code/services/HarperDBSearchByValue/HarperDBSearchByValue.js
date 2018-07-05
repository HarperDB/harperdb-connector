/**
 * Returns an object array based on a search by value on an attribute
 * @param {string} schema Schema the table resides under
 * @param {string} table Table where the data will be queried
 * @param {string} search_attribute Attribute upon which to perform the search
 * @param {string} search_value Value that will be used in the search
 * @param {string[]} get_attributes (optional) String array of attribute names that will be returned in the results
 * * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
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
    var harperdb = HarperDB(req.params.end_point);
    harperdb.searchByValue(req.params.schema, req.params.table, req.params.search_attribute, req.params.search_value, req.params.attributes, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
