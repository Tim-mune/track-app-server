import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.send("Unauthenticated");
  }
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  req.user = payload.userId;
  next();
};
export default auth;
