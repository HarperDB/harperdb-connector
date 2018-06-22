function HarperDBExample(req, resp) {
  const myConfigurationForKey1 = HarperDBConfiguration.key1 
  const harperDB = HarperDB()
  // do some things with harperDB

  // since you use callback, you will put the following logic inside a callback
  // lets assume you return an err boolean, and demonstrate how to react:
    var err = true
    if(err){
      resp.error("Something bad happened.")
    }
    else{
      resp.success('Success');
    }
}
