const mongoose = require('mongoose');
const DB = process.env.DATABASE;


mongoose.connect(DB , {
    useNewUrlParser: true,


    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to Mongo")
})
.catch((err)=>{
    console.log("Error in connecting Mongo: " + err)
})

// useNewUrlParser
// This option tells the MongoDB driver to use the new connection string
//  parser instead of the deprecated one. In older versions of the driver, the connection string
//   format was different, but with the new parser, the format has changed. By setting this option to true,
//  you ensure that the driver uses the updated parser to correctly interpret and parse the connection string.

// useUnifiedTopology: true: This option 
// enables the MongoDB driver to use the new server discovery 
// and monitoring engine, which is known as the unified topology. The unified topology 
// provides a more efficient and reliable way to monitor the MongoDB deployment, including handling server 
// selection, monitoring server state changes, and managing connections. It also supports replica sets and sharded 
// clusters seamlessly. By setting this option to 
// true, you instruct the driver to use this improved topology instead of the older one.
