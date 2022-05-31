import mongoose from "mongoose";

const dogSchema = mongoose.Schema({
    dogname: String,
    breeds: String,
    description: String,
    imageFile: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
      },
      likeCount: {
          type: Number,
          default: 0,
        },
});

const DogModel = mongoose.model("Dog", dogSchema);
export default DogModel;
