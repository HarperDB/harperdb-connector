/**
 * Execute a raw HarperDB call
 * @param {Object} body - The full body of a call to execute an operation in HarperDB
 * @example
 * {
        "operation":"insert",
        "schema":"dev",
        "table":"dog",
        "records": [
          {
            "name":"Harper",
            "breed":"Mutt",
            "id":"20",
            "age":5

          },
          {
            "name":"Penny",
            "breed":"Mutt",
            "id":"30",
            "age":5
          }
        ]
        }
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 *  @returns {Object | Object[]} - Return results vary based on operation executed
 */
function HarperDBExecuteOperation(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.executeOperation(req.params.body, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
