const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
   place: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Place'},
    user: {type:mongoose.Schema.Types.ObjectId, required:true},
    name: {type:String, required:true},
    phone: String,
    price: Number,
});

const BookingModel = mongoose.model("Purchase", bookingSchema);
module.exports = BookingModel;