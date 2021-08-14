const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  campsites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campsite",
    },
  ],
});

favoriteSchema.plugin(passportLocalMongoose);

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;
