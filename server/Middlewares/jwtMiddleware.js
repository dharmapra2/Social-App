import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
      if (err) {
        console.log(`JWT Middleware error: ${err}`);
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token expired" });
        } else if (err.name === "JsonWebTokenError") {
          return res.status(401).json({ error: "Invalid token" });
        } else {
          return res.status(403).json({ error: "Forbidden" });
        }
      }
      console.log(user);

      req.currentUser = user;
      next();
    });
  } else {
    // Unauthorized access
    return res.status(401).json({ message: "Please provide the token." });
  }
};

export default authenticateJWT;
