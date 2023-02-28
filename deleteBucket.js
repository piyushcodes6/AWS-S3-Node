var AWS = require('aws-sdk')
var s3 = new AWS.S3();

var params = { Bucket: 'goswamibucket33' }

s3.deleteBucket(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log("Successfully deleted");
});