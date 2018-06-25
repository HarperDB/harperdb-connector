/**
 * Creates a new schema in HarperDB
 * @param {Object} body
 * @example
 *
 * req.params.body = {
 *      "schema":"dev"
 *  };
 *
 *  @returns {Object}
 *  {
    "message": "schema dev successfully created"
    }
 *
 */
function CreateSchema(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.createSchema(req.params.body.schema, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
