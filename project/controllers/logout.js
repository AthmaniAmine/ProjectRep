const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    
   res.clearCookie("userSave", {
    httpOnly: true, // Secure cookie
    sameSite: "None", // Cross-site cookies
    secure: true, // HTTPS only
    domain: "front-flame-psi.vercel.app", // Frontend domain
    path: "/", // Path of the cookie
});
    
    
    res.status(200).json({ status: "success", message: "User logout successfully" });
}

module.exports = logout;
