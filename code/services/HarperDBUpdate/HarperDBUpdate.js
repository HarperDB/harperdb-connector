/**
 * Updates data in an existing table in HarperDB
 * @param {string} schema Schema the table resides under
 * @param {string} table Table where data will be updated
 * @param {Object[]} records Object array of records
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
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
    var harperdb = HarperDB(req.params.end_point);
    harperdb.update(req.params.schema, req.params.table, req.params.records, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
