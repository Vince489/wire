import { Schema, model } from "mongoose";

const GamerSchema = new Schema({
  gamerTag: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  }
});

export const Gamer = model<any>("Gamer", GamerSchema);

export default defineEventHandler(async (event) => {
  const gamers = await Gamer.find();

  return {
    gamers,
  };
});