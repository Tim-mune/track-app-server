const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err.code === 11000) {
    res.status(400).json({ msg: "email already in use" });
  }
  res.status(500).json({ msg: "theres an error" });
};
export default errorMiddleware;
