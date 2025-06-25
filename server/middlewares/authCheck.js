const jwt = require("jsonwebtoken");

exports.authCheck = async (req, res, next) => {
  try {
    // code
    const headerToken = req.headers.authorization;
    if (!headerToken) {
      return res.status(401).json({
        message: "No Token Authorization",
      });
    }
    const token = headerToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET);

    console.log(decoded);
    console.log("Hello Midldleware");
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Token Invalid",
    });
  }
};
