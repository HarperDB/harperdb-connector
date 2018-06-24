/**
 * Updates JSON data in an existing schema in HarperDB
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
