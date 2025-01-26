const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    
   res.clearCookie("userSave", {
    httpOnly: true, 
    sameSite: "None", 
    secure: true, 
    domain: "front-flame-psi.vercel.app",
    
});
    
res.status(200).send("Cookie cleared!");
}

module.exports = logout;
