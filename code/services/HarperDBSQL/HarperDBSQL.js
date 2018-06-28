/**
 * Returns an object array based on a search by hash (primary key)
 * @param {Object} params
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
    const harperdb = HarperDB();
    harperdb.sql(req.params.sql, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
