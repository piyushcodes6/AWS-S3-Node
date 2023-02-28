var AWS = require("aws-sdk");
var s3 = new AWS.S3();

var params = {
    Bucket: "goswamibucket33",
    CreateBucketConfiguration: {
        LocationConstraint: "ap-south-1"
    }

};

s3.createBucket(params, function (err, data) {
    if (err) console.log(err, err.stack)
    else console.log("Successfully created....");
});
