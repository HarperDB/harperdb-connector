/**
 * Creates a new schema in HarperDB
 * @param {string} schema Name of schema to create
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
