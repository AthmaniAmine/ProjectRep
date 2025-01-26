const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    
   res.clearCookie("userSave", {
    httpOnly: true, 
    sameSite: "None", 
    secure: true, 
    domain: "dzartisansapp.onrender.com", 
    path: "/", 
});
    
    
    res.status(200).json({ status: "success", message: "User logout successfully" });
}

module.exports = logout;
