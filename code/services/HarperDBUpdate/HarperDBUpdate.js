/**
 * Updates JSON data in an existing schema in HarperDB
 * @param {Object} params
 * @example
 *
 * req.params = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "records":[
 *      {
        "id" : 1,
        "dog_name" : "Penny Bernhardy",
        "age":6
      }
 *      ]
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
  "message": "updated 1 of 1 records",
  "update_hashes": [
    1
  ],
  "skipped_hashes": []
}
 */
function HarperDBUpdate(req, resp) {
    const harperdb = HarperDB();
    harperdb.update(req.params.schema, req.params.table, req.params.records, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
