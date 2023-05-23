import User from "../models/User.js";
import statuscodes from "http-status-codes";
const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!name || !password || !email) {
    res
      .status(statuscodes.BAD_REQUEST)
      .json({ msg: "please provide all values" });
  }
  const user = await User.create(req.body);
  const token = await user.createJWT();
  res.status(statuscodes.CREATED).json({ email, token });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    res
      .status(statuscodes.BAD_REQUEST)
      .json({ msg: "please provide all values" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(statuscodes.NOT_FOUND).json({ msg: "wrong credentials" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    res.status(statuscodes.BAD_REQUEST).json({ msg: "wrong credentials" });
  }
  const token = user.createJWT();
  res.status(statuscodes.OK).json({ msg: "Logged in successfully", token });
};
export { register, login };
