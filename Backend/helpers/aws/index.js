const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  accessKeyId: "XXXXXXXXXXXXXXX",
  region: "us-east-1",
});

s3 = new aws.S3();

var tipImageUpload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "bucket-name",
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    },
  }),
});

module.exports = { tipImageUpload };
