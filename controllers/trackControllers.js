import Track from "../models/Track.js";
import statuscodes from "http-status-codes";
const createTrack = async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations) {
    res
      .status(statuscodes.BAD_REQUEST)
      .json({ msg: "please enter all values" });
  }
  const track = await Track.create({ name, locations, userId: req.user });

  res.status(statuscodes.CREATED).json(track);
};
const getTracks = async (req, res) => {
  const tracks = await Track.find({ userId: req.user });
  res.send(tracks);
};
export { createTrack, getTracks };
