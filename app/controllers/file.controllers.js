const uploadFile = require("../middleware/upload");
const upload = async (req, res)=>{
    try {
        console.log("file controller")
        await uploadFile(req, res);
        if(req.file == undefined){
            return res.status(400).send({
                massage: "not found the upload file."
            });
        }
        res.status(200).send({
            massage: "uploadfile successfully: " + req.file.filename,
            uploadFileName: req.file.filename
        });
    } catch (error) {
        res.status(500).send({
            massage: "Could not upload the file: " + error
        });
    }
};
const download = (req, res)=>{
    const filename = req.params.name;
    const directoryPath = __basedir + "/assets/";
    res.download(directoryPath + filename, filename, (err)=>{
        if(err){
            res.status(500).send({ massage: "Could not display the file. " + err});
        }
    });
};
module.exports = { upload, download };