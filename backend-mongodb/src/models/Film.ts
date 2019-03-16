import * as mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  duration: {
    required: true,
    type: Number
  },
  author: {
    required: true,
    type: [String]
  },
  tickets: {
    required: false,
    type: Number
  },
  writers: [String],
  trailer: {
    required: true,
    type: [String]
  },
  director: [String],
  createAt: {
    required: true,
    type: Date
  },
  actors: [String],
  images: {
    required: true,
    type: [String]
  },
  genres: {
    required: true,
    type: [String]
  }
});

//new Date(ano, mes, dia)
export default mongoose.model("Film", FilmSchema);
