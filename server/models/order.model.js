import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderID: {
        type: String,
        required: [true, "Order ID is required"],
        unique: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product ID is required"],
    },
    product_details: {
        name : {
            type: String,
        },
        image : {
            type: String,
            
        },   
    },
    paymentID : {
        type: String,
        default: "",
    },
    payment_status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
    delivery_status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending",
    },
    delivery_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: [true, "Delivery address is required"],
    },
    subTotal: {
        type: Number,
        default : 0,
    },
    totalAmmount: {
        type: Number,
        default : 0,
    },
    invoice: {
        type: String,
        default: "",
    },
},
{
    timestamps: true,
});
const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;