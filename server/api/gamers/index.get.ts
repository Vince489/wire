import { Schema, model } from "mongoose";

const GamerSchema = new Schema({
  gamerTag: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 3500
  },
  ovr: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  img: {
    type: String
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  draws: {
    type: Number,
    default: 0
  },
  koWins: {
    type: Number,
    default: 0
  },
  koLosses: {
    type: Number,
    default: 0
  },
  division: {
    type: String
  },
  htFt: {
    type: Number,
    required: true
  },
  htIn: {
    type: Number,
    required: true
  },
  wt: {
    type: Number,
    required: true
  },
  rch: {
    type: Number,
    required: true
  },
  signupDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

export const Gamer = model<any>("Gamer", GamerSchema);

export default defineEventHandler(async (event) => {
  const gamers = await Gamer.find();

  return {
    gamers,
  };
});