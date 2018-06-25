/**
 * Deletes data by hash (primary key) in HarperDB
 * @param {string} body
 * @example
 *
 * req.params.body = {
  "schema":"dev",
  "table":"breed",
  "data":"id,name,section,country,image\n1,ENGLISH POINTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/001g07.jpg\n2,ENGLISH SETTER,British and Irish Pointers and Setters,GREAT BRITAIN,http://www.fci.be/Nomenclature/Illustrations/002g07.jpg\n3,KERRY BLUE TERRIER,Large and medium sized Terriers,IRELAND,\n"
};
 */
function HarperDBCSVDataLoad(req, resp) {
    const harperdb = HarperDBInitialization();
    harperdb.csvDataLoad(req.params.body.schema, req.params.body.table, req.params.data, (err, results)=>{
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
