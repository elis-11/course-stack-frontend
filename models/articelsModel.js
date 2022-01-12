import mongoose from "mongoose";

const ArticlesSchema = mongoose.Schema({
  gender:String,
  imageDescription:String,
  imageURL:String,
  thePrice:String,
  id:String,
});
const ArticlesModel = mongoose.model("articel", ArticlesSchema);
export default ArticlesModel;
