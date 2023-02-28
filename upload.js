var fs = require('fs');
var AWS = require('aws-sdk')

var s3 = new AWS.S3({ params: { Bucket: 'goswamibucket33' } });

fs.readFile("demoFile.txt", (err, data) => {
    var params = {
        Key: "myDemoFile.txt",
        Body: data
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.log('ERROR MSG: ', err)
        } else {
            console.log('Successfully Uploaded Data....');
        }
    })
});