/**
 * Updates JSON data in an existing schema in HarperDB
 * * @param {Object} body
 * @example
 *
 * req.params.body = {
 *      "schema":"dev"
 *  };
 */
function HarperDBDescribeSchema(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.describeSchema((err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
