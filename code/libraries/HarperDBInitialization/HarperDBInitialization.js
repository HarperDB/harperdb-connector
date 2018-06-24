/**
 * Initializes the HarperDB Connector with end_point, username & password.  Returns the accessor functions to interact with HarperDB
 * @returns {{createSchema, createTable, insert, update, delete, searchByHash, searchByValue, sql, executeOperation, describeAll, describeSchema}}
 * @constructor
 */
function HarperDBInitialization(){
    const end_point = HarperDBConfiguration.end_point;
    const username = HarperDBConfiguration.username;
    const password = HarperDBConfiguration.password;
    return HarperDB(username, password, end_point);
}