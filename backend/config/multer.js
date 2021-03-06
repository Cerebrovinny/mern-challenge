const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require("aws-sdk");
const multerS3 = require('multer-s3');

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
        },
        //that will generate random numbers and letters before the filename 
        //that will prevent 2 files with the same name
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            })
        },
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'journalpdf2',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if (err) cb(err);
    
                    const fileName = `${hash.toString('hex')}-${file.originalname}`;
    
                    cb(null, fileName);
                })
        }
    }),
};

module.exports = {
    dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: storageTypes['local'],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: function (req, file, cb) {
        const journalAllowed = '.pdf';
        if (journalAllowed !== '.pdf') {
            return cb(new Error('Only pdfs journals are allowed'))
        }

        cb(null, true)
    }
};