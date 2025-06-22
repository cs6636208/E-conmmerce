// Functions

exports.create = async (req, res) => {
  try {
    // code
    res.send("Hello Category");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.list = async (req, res) => {
  try {
    // code
    res.send("Hello Category List");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.remove = async (req, res) => {
  try {
    // code
    const { id } = req.params;
    console.log(id);
    res.send("Hello Category Remove");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
