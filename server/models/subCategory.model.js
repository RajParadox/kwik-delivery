import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Category is required"],
        }
    ],
}, {
    timestamps: true,
});
const SubCategoryModel = mongoose.model("SubCategory", subcategorySchema);
export default SubCategoryModel;