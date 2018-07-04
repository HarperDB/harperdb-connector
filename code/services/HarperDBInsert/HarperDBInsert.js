/**
 * Inserts JSON data into an existing table in HarperDB
 * @param {string} schema Schema the table resides under
 * @param {string} table Table where data will be inserted
 * @param {Object[]} records Object array of records
 * @param {string} [end_point] HarperDB end point to connect to (defaults to the end_point setting in HarperDBConfiguration)
 * @example
 *
 * req.params = {
 *      "schema":"dev",
 *      "table":"dog",
 *      "records":[
 *      {
        "id" : 1,
        "dog_name" : "Penny",
        "owner_name": "Kyle",
        "breed_id":154,
        "age":5,
        "weight_lbs":35,
        "adorable":true
      },
      {
        "id" : 2,
        "dog_name" : "Harper",
        "owner_name": "Stephen",
        "breed_id":346,
        "age":5,
        "weight_lbs":55,
        "adorable":true
      },
      {
        "id" : 3,
        "dog_name" : "Alby",
        "owner_name": "Kaylan",
        "breed_id":348,
        "age":5,
        "weight_lbs":84,
        "adorable":true
      },
      {
        "id" : 4,
        "dog_name" : "Billy",
        "owner_name": "Zach",
        "breed_id":347,
        "age":4,
        "weight_lbs":60,
        "adorable":true
      },
      {
        "id" : 5,
        "dog_name" : "Rose Merry",
        "owner_name": "Zach",
        "breed_id":348,
        "age":6,
        "weight_lbs":15,
        "adorable":true
      },
      {
        "id" : 6,
        "dog_name" : "Kato",
        "owner_name": "Kyle",
        "breed_id":351,
        "age":4,
        "weight_lbs":28,
        "adorable":true
      },
      {
        "id" : 7,
        "dog_name" : "Simon",
        "owner_name": "Fred",
        "breed_id":349,
        "age":1,
        "weight_lbs":35,
        "adorable":true
      },
      {
        "id" : 8,
        "dog_name" : "Gemma",
        "owner_name": "Stephen",
        "breed_id":350,
        "age":3,
        "weight_lbs":55,
        "adorable":true
      },
      {
        "id" : 9,
        "dog_name" : "Gertrude",
        "owner_name": "Eli",
        "breed_id":158,
        "age":5,
        "weight_lbs":70,
        "adorable":true
      },
      {
        "id" : 10,
        "dog_name" : "Big Louie",
        "owner_name": "Eli",
        "breed_id":241,
        "age":11,
        "weight_lbs":20,
        "adorable":false
      }
 *      ]
 *  };
 *
 *  @returns {Object}
 *  @example
 *  {
  "message": "inserted 10 of 10 records",
  "update_hashes": [
    1,2,3,4,5,6,7,8,9,10
  ],
  "skipped_hashes": []
}
 */
function HarperDBInsert(req, resp) {
    var harperdb = HarperDB(req.params.end_point);
    harperdb.insert(req.params.schema, req.params.table, req.params.records, function(err, results){
        if(err){
            return resp.error(err);
        }

        resp.success(results);
    });
}
