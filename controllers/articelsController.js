import ArticlesModel from "../models/articelsModel.js";

export const getAllArticels = async () => {
  return await ArticlesModel.find({});
};
export const getMenArticels = async () => {
  return await ArticlesModel.find({ gender: "men" });
};
export const getWomenArticels = async () => {
  return await ArticlesModel.find({ gender: "women" });
};
export const getChildernArticels = async () => {
  return await ArticlesModel.find({ gender: "childern" });

};
export const getDteails = async (id) => {
  return await ArticlesModel.findById(id);
};



