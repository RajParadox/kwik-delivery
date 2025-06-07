import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    image: {
        type: Array,
        required: []
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    unit: {
        type: String,
        default: "",
    },
    stock: {
        type: Number,
        default: null,
    },
    price: {
        type: Number,
        default: null,
    },
    discount: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        default: "",
    },
    more_details: {
        type: Object,
        default: {},
    },
    published: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;