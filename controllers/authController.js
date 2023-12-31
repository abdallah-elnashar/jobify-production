import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import UnathenticatedError from "../errors/unauthenticatedError.js";

//

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    throw new BadRequestError("please provide all values");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
  });
};

//
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");
  console.log(user);
  if (!user) {
    throw new UnathenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new UnathenticatedError("Invalid ssdsd");
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

//
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login, updateUser };
