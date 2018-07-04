/**
 * Creates a new schema in HarperDB
 * @param {string} schema Name of new schema to create
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
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
    var harperdb = HarperDB(req.params.end_point);
    harperdb.createSchema(req.params.schema, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
