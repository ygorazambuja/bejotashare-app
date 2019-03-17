import * as mongoose from "mongoose";

interface IFilm extends mongoose.Document {
    actors: [string];
    author: [string];
    createAt: Date;
    director: [string];
    duration: [number];
    genres: [string];
    images: [string];
    name: string;
    tickets: number;
    trailer: [string];
    writers: [string];
}

const FilmSchema = new mongoose.Schema({
    actors: [String],
    author: {
        required: true,
        type: [String],
    },
    createAt: {
        required: true,
        type: Date,
    },
    director: [String],
    duration: {
        required: true,
        type: Number,
    },
    genres: {
        required: true,
        type: [String],
    },
    images: {
        required: true,
        type: [String],
    },
    name: {
        required: true,
        type: String,
        unique: true,
    },
    tickets: {
        required: false,
        type: Number,
    },
    trailer: {
        required: true,
        type: [String],
    },
    writers: [String],
});

export default mongoose.model<IFilm>("Film", FilmSchema);
