const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

let S3 = new S3Client({
    region: 'us-east-1',
    credentials:{
        accessKeyId: 'AKIAZNOBTDBO5PQTTGVH',
        secretAccessKey: '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'
    },
    sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})

const storageTypes = {
    local:multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb)=>{
            crypto.randomBytes(5, (err, hash)=>{
                if(err) cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            })
        }
    },),
    s3: multerS3({
        s3: S3,
        bucket: 'uploadsnodejs',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb)=>{
            crypto.randomBytes(5, (err, hash)=>{
                if(err) cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            })
            
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes['s3'],
    limitis:{
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req, file, cb)=>{
        const TypeImages = [
            'image/pjpeg',
            'image/jpeg',
            'image/png',
            'image/gif'
        ];
        if(TypeImages.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(new Error("Invalid file type."));
        }
    }
}