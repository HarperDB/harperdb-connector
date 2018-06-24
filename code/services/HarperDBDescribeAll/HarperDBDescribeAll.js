/**
 * Updates JSON data in an existing schema in HarperDB
 */
function HarperDBDescribeAll(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.describeAll((err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
