/**
 * Creates a new schema in HarperDB
 * @param {string} params
 * @example
 *
 * req.params = {
 *      "schema":"dev"
 *  };
 *
 *  @returns {Object}
 *  {
    "message": "schema dev successfully created"
    }
 *
 */
function HarperDBCreateSchema(req, resp) {
    var harperdb = HarperDB();
    harperdb.createSchema(req.params.schema, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
