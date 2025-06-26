import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line1: {
        type: String,
        required: [true, "Address line 1 is required"],
    },
    address_line2: {
        type: String,
        default: "",
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
},
{
    timestamps: true,
});
const AddressModel = mongoose.model("Address", addressSchhema);

export default AddressModel;