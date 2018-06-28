/**
 * Deletes data by hash (primary key) in HarperDB
 * @param {string} params
 * @example
 *
 * req.params = {
  "schema":"dev",
  "table":"breed",
  "data":"id,name,section,country,image\n1,ENGLISH POINTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/001g07.jpg\n2,ENGLISH SETTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/002g07.jpg\n3,KERRY BLUE TERRIER,Large and medium sized Terriers,IRELAND,\n"
};

 @returns {Object}
 @example
 {
    "message": "successfully loaded 3 records"
 }
 */
function HarperDBCSVDataLoad(req, resp) {
    const harperdb = HarperDB();
    harperdb.csvDataLoad(req.params.schema, req.params.table, req.params.data, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
