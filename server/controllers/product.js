exports.create = async (req, res) => {
  try {
    // code
    res.send("Hello Create Product");
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
    res.send("Hello List Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.update = async (req, res) => {
  try {
    // code
    res.send("Hello Update Product");
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
    res.send("Hello Remove Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.listby = async (req, res) => {
  try {
    // code
    res.send("Hello Listby Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.searchFilters = async (req, res) => {
  try {
    // code
    res.send("Hello searchFilters Product");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
