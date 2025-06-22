// Functions

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Step 1: Validate Body
    if (!email) {
      return res.status(400).json({
        message: "Email is required!!!",
      });
    }
    if (!password) {
      return res.status(400).json({
        message: "Password is required!!!",
      });
    }
    // Step 2: Check Email in DB already exists ?
    console.log(email, password);
    res.send("Hello Register In Controllers");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Hello Login In Controllers");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.currentUser = async (req, res) => {
  try {
    res.send("Hello Current User");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
