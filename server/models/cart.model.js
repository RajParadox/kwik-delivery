import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is required"],
    },
    quantity: {
        type: Number,
        default: 1,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },
}, {
    timestamps: true,
});
const CartModel = mongoose.model("cartProduct", cartProductSchema);
export default CartModel;
