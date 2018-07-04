/**
 * Run SQL (INSERT / UPDATE / DELETE / SELECT)
 * @param {string} sql SQL Statement to execute
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
 *      "sql":"SELECT * FROM dev.dog"
 *  };
 *
 *  req.params.body = {
 *      "sql":"SELECT COUNT(id), owner_name FROM dev.dog GROUP BY owner_name"
 *  };
 *
 * req.params.body = {
 *      "sql":"INSERT INTO dev.dog (id, name) VALUES(22, 'Simon')"
 *  };
 *
 *  req.params.body = {
 *      "sql":"DELETE FROM dev.dog WHERE id = 22"
 *  };
 *
 *  @returns {Object | Object[]}
 */
function HarperDBSQL(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.sql(req.params.sql, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
