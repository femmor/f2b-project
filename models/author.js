import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Author", authorSchema);
