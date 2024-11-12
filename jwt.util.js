
 const jwt=require('jsonwebtoken');

const SECRET_KEY = "JwT_LEARNING-B4";

function generateToken() {
    const token = jwt.sign({
        name: "rajkumar", 
        subscriptionId: 12345
    }, SECRET_KEY,{
        expiresIn: "1h",
        subject: "1234545",
        issuer:"google"

    });
    return token;
}
module.exports = {
    generateToken,
    SECRET_KEY
};