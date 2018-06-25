/**
 * Updates JSON data in an existing schema in HarperDB
 * @param {Object} body
 * @example
 *
 * req.params.body = {
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
 */
function HarperDBUpdate(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.update(req.params.body.schema, req.params.body.table, req.params.records, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
