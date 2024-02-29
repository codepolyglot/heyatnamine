const {onDocumentWritten}=require("firebase-functions/v2/firestore");
const {onRequest, onCall}=require("firebase-functions/v2/https");
const logger=require("firebase-functions/logger");

exports.helloWorld=onRequest((request, response)=>{
logger.info("Hellologs!", {structuredData:true});
response.send("HellofromFirebase!");
});

exports.exampleOnCallFunction=onCall((data, context)=>{
logger.info("ExampleonCallfunctiontriggered!", {data, context});
return{message:"ThisisanexampleonCallfunctionresponse."};
});

exports.exampleOnDocumentWrittenFunction=onDocumentWritten((change, context)=>{
logger.info("ExampleonDocumentWrittenfunctiontriggered!", {change, context});
});
