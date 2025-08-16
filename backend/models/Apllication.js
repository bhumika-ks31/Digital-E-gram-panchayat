import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: String, // ideally ObjectId
  type: String, // Birth Certificate, Property Tax, etc.
  status: { type: String, default: "Pending" }, // Pending, Approved, Rejected, Paid
  submissionDate: { type: Date, default: Date.now },
  formData: Object
});

export default mongoose.model("Application", applicationSchema);
