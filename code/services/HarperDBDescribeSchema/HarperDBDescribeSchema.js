/**
 * Returns the schema/table/attribute meta data for a schema
 * @param {schema} schema Name of schema to return meta-data
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
 *      "schema":"dev"
 *  };
 *
 *  @returns {Object[]}
 *  @example
 *  [
 {
   "schema": "dev",
   "name": "breed",
   "hash_attribute": "id",
   "id": "4d560884-0f57-4756-a564-eea76f64d0af",
   "attributes": [
     {
       "attribute": "section"
     },
     {
       "attribute": "field6"
     },
     {
       "attribute": "country"
     },
     {
       "attribute": "name"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "image"
     }
   ]
 },
 {
   "schema": "dev",
   "name": "dog",
   "id": "125ab5c9-f8ac-4197-a348-dd716b0f11ed",
   "hash_attribute": "id",
   "attributes": [
     {
       "attribute": "adorable"
     },
     {
       "attribute": "weight_lbs"
     },
     {
       "attribute": "owner_name"
     },
     {
       "attribute": "doc"
     },
     {
       "attribute": "id"
     },
     {
       "attribute": "dog_name"
     },
     {
       "attribute": "age"
     },
     {
       "attribute": "breed_id"
     }
   ]
 }
 ]
 */
function HarperDBDescribeSchema(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.describeSchema(req.params.schema, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
