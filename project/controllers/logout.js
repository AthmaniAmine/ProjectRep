const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    
   res.clearCookie("userSave", {
    httpOnly: true, 
    sameSite: "None", 
    secure: true, 
    
    path: "/", 
});
    
    
}

module.exports = logout;
