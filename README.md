# ipm package: harperdb-connector

## Overview

HarperDB is a database that optimizes the data value chain for any size company without sacrificing features, functionality and stability.  HarperDB is designed with a small footprint that enables an enterprise class database to run on the edge and scale to servers in the cloud.  HarperDB was founded in Denver, CO with the belief that database architecture can be simple and accessible to everyone.
To learn more about HarperDB and it's features check out our [documentation](https://docs.harperdb.io/).

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

_Open the configuration file: HarperDBConfiguration.js and change the end_point, username & password to reflect your HarperDB configuration:_
* end_point: the full url, including port, that your instance of HarperDB resides on. i.e. http://192.168.0.4:9925 
* username: The username you wish to use to connect to HarperDB
* password: The password of the username connecting to HarperDB

## Usage
_HarperDB was designed to be simple and flexible offloading the complexity of databases from the developer.  
To view a quick guide to working with HarperDB and understand the basic concepts please explore our [Getting Started Example](https://examples.harperdb.io/)_

_A typical flow for working with HarperDB is the following:_
* Create a schema. Schemas are the starting point for a data model in HarperDB. Schemas are essentially a namespace that tables reside under.  
    A schema is created by calling the HarperDBCreateSchema service
* Create a table.  Tables reside under schemas and hold each object / row of data.  Create a table by calling the HarperDBCreateTable service
* Insert Data.  HarperDB can insert both structured and unstructured data.  You can insert data via NoSQL with the HarperDBInsert Service and/or perform SQL INSERT with the HarperDBSQL Service.
* Update Data. HarperDB can update both structured and unstructured data.  You can update data via NoSQL with the HarperDBUpdate Service and/or perform SQL UPDATE with the HarperDBSQL Service.
* Query data by Hash (Primary Key). You can retrieve your data via a NoSQL search by hash function that returns data based on their hash value.  Search By Hash with the HarperDBSearchByHash service.
* Query data by value.  Leveraging HarperDB's fully indexed data model you can search by value on any attribute in your data model.  Search by Value with the HarperDBSearchByVale service.
* Query with SQL.  HarperDB has a robust SQL engine that allows you to perform full CRUD via SQL as well as perform aggregates, joins, conditions, etc... with the HarperDBSQL service.

## Assets

### Code Services

- `HarperDBCreateSchema` - Creates a new schema in HarperDB
- `HarperDBCreateTable` - Creates a new table in an existing schema in HarperDB
- `HarperDBCSVDataLoad` - Loads CSV formatted data into a HarperDB table
- `HarperDBDelete` - Deletes data by hash (primary key) in HarperDB
- `HarperDBDescribeAll` - Returns the schema/table/attribute meta data for all schemas
- `HarperDBDescribeSchema` - Returns the schema/table/attribute meta data for a schema
- `HarperDBExecuteOperation` - Execute a raw HarperDB call
- `HarperDBInsert` - Inserts JSON data into an existing table in HarperDB
- `HarperDBSearchByHash` - Returns an object array based on a search by hash (primary key)
- `HarperDBSearchByValue` - Returns an object array based on a search by value on an attribute
- `HarperDBSQL` - Run SQL (INSERT / UPDATE / DELETE / SELECT)
- `HarperDBUpdate` - Updates data in an existing table in HarperDB

### Code Libraries

- `HarperDB` - Library that executes core operations against HarperDB
- `HarperDBConfiguration` - Configuration settings to connect to HarperDB

## API

_Recommend using JSDoc for documenting your JavaScript code, and using jsdoc2md npm tool (https://www.npmjs.com/package/jsdoc-to-markdown) to generate markdown_

```
npm install --save jsdoc-to-markdown
npm run jsdoc
```
### Classes

<dl>
<dt><a href="#HarperDB">HarperDB</a></dt>
<dd></dd>
</dl>

<a name="HarperDB"></a>

### HarperDB
**Kind**: global class  

* [HarperDB](#HarperDB)
    * [new HarperDB(end_point)](#new_HarperDB_new)
    * [~createSchema(schema, callback)](#HarperDB..createSchema) ⇒ <code>Object</code>
    * [~createTable(schema, table, hash_attribute, callback)](#HarperDB..createTable) ⇒ <code>Object</code>
    * [~insert(schema, table, records, callback)](#HarperDB..insert) ⇒ <code>Object</code>
    * [~update(schema, table, records, callback)](#HarperDB..update) ⇒ <code>Object</code>
    * [~deleter(schema, table, ids, callback)](#HarperDB..deleter) ⇒ <code>Object</code>
    * [~searchByHash(schema, table, hash_values, get_attributes, callback)](#HarperDB..searchByHash) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~searchByValue(schema, table, search_attribute, search_value, get_attributes, callback)](#HarperDB..searchByValue) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~sql(sql, callback)](#HarperDB..sql) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~describeAll(callback)](#HarperDB..describeAll) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~describeSchema(schema, callback)](#HarperDB..describeSchema) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~csvDataLoad(schema, table, data, callback)](#HarperDB..csvDataLoad) ⇒ <code>Object</code>
    * [~executeOperation(json, callback)](#HarperDB..executeOperation) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
    * [~executeRequest(body, callback)](#HarperDB..executeRequest) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>

<a name="new_HarperDB_new"></a>

#### new HarperDB(end_point)
Library for interating with HarperDB


| Param | Description |
| --- | --- |
| end_point | the endpoint where the database exist |

<a name="HarperDB..createSchema"></a>

#### HarperDB~createSchema(schema, callback) ⇒ <code>Object</code>
Create a schema

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Name of new schema to create |
| callback |  |  |

**Example**  
```js
{
     "message": "schema dev successfully created"
}
```
<a name="HarperDB..createTable"></a>

#### HarperDB~createTable(schema, table, hash_attribute, callback) ⇒ <code>Object</code>
Create a table

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Name of schema which the table will be added to |
| table | <code>string</code> | Name of the new Table to create |
| hash_attribute | <code>string</code> | Name of the hash attribute (primary key) that will be the unique identifier for each row |
| callback |  |  |

**Example**  
```js
{
 "message": "table dev.dog successfully created."
 }
```
<a name="HarperDB..insert"></a>

#### HarperDB~insert(schema, table, records, callback) ⇒ <code>Object</code>
Insert record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be inserted |
| records | <code>Array.&lt;Object&gt;</code> | Object array of records |
| callback |  |  |

**Example**  
```js
[
     {
       "name":"Harper",
       "breed":"Mutt",
       "id":"1",
       "age":5

     },
     {
       "name":"Penny",
       "breed":"Mutt",
       "id":"3",
       "age":5

     }
     ]
```
**Example**  
```js
{
 "message": "successfully wrote 2 records"
 }
```
<a name="HarperDB..update"></a>

#### HarperDB~update(schema, table, records, callback) ⇒ <code>Object</code>
Update record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be updated |
| records | <code>Array.&lt;Object&gt;</code> | Object array of records |
| callback |  |  |

**Example**  
```js
[
         {
           "id": 1,
           "weight_lbs": 55
         },
         {
         "id": 3,
         "owner": "kyle b",
         "weight_lbs": 35
       }
     ]
```
**Example**  
```js
{
          "message": "updated 2 of 2 records",
          "update_hashes": [
            1,
            3
          ],
          "skipped_hashes": []
        }
```
<a name="HarperDB..deleter"></a>

#### HarperDB~deleter(schema, table, ids, callback) ⇒ <code>Object</code>
Delete record(s)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where data will be deleted |
| ids | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | Array of hash values (primary keys) that will be deleted |
| callback |  |  |

**Example**  
```js
{
          "message": "records successfully deleted"
        }
```
<a name="HarperDB..searchByHash"></a>

#### HarperDB~searchByHash(schema, table, hash_values, get_attributes, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Search for records based on hash (primary key)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where the data will be queried |
| hash_values | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | Array of hash values (primary key values) that will be deleted |
| get_attributes | <code>Array.&lt;string&gt;</code> | (optional) String array of attribute names that will be returned in the results |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..searchByValue"></a>

#### HarperDB~searchByValue(schema, table, search_attribute, search_value, get_attributes, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Search by value on an attribute

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table where the data will be queried |
| search_attribute | <code>string</code> | Attribute upon which to perform the search |
| search_value | <code>string</code> | Value that will be used in the search |
| get_attributes | <code>Array.&lt;string&gt;</code> | (optional) String array of attribute names that will be returned in the results |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..sql"></a>

#### HarperDB~sql(sql, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Run SQL (INSERT / UPDATE / DELETE / SELECT)

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| sql | <code>string</code> | SQL Statement to execute |
| callback |  |  |

**Example**  
```js
[
     {
       "age": 5,
       "breed": "Mutt",
       "id": 1,
       "name": "Harper",
       "weight_lbs": 55
     },
     {
       "age": 5,
       "breed": "Mutt",
       "id": 3,
       "name": "Penny",
       "owner": "kyle b",
       "weight_lbs": 35
     }
     ]
```
<a name="HarperDB..describeAll"></a>

#### HarperDB~describeAll(callback) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the schema/table/attribute meta data for all schemas

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param |
| --- |
| callback | 

**Example**  
```js
[
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
```
<a name="HarperDB..describeSchema"></a>

#### HarperDB~describeSchema(schema, callback) ⇒ <code>Array.&lt;Object&gt;</code>
Returns the schema/table/attribute meta data for a schema

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>schema</code> | Name of schema to return meta-data |
| callback |  |  |

**Example**  
```js
[
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
```
<a name="HarperDB..csvDataLoad"></a>

#### HarperDB~csvDataLoad(schema, table, data, callback) ⇒ <code>Object</code>
loads csv data into a table

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>string</code> | Schema the table resides under |
| table | <code>string</code> | Table the csv data is loading into |
| data | <code>string</code> | CSV formatted |
| callback |  |  |

**Example**  
```js
{
        "message": "successfully loaded 3 records"
        }
```
<a name="HarperDB..executeOperation"></a>

#### HarperDB~executeOperation(json, callback) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
Execute a raw HarperDB call

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type |
| --- | --- |
| json | <code>Object</code> | 
| callback |  | 

**Example**  
```js
{
        "operation":"insert",
        "schema":"dev",
        "table":"dog",
        "records": [
          {
            "name":"Harper",
            "breed":"Mutt",
            "id":"1",
            "age":5

          },
          {
            "name":"Penny",
            "breed":"Mutt",
            "id":"3",
            "age":5
          }
        ]
        }
```
<a name="HarperDB..executeRequest"></a>

#### HarperDB~executeRequest(body, callback) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
Perform the request to HarperDB

**Kind**: inner method of [<code>HarperDB</code>](#HarperDB)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 
| callback |  | 

