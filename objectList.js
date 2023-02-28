var AWS = require('aws-sdk')
var s3 = new AWS.S3();

var params = { Bucket: 'goswamibucket33', MaxKeys: 10 }

s3.listObjects(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else return data.Contents.forEach(el => {
        console.log(el.Key);
    })
})
