const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    descriptio: { type: String, required: true },
    agentName: { type: String, required: true },
    salary: { type: String, required: true },
    period: { type: String, required: true },
    contract: { type: String, required: true },
    hiring: { type: Boolean, required: true },
    requirements: { type: Array, required: true },
    imageUrl: { type: String, required: true },
    agentId: { type: String, required: true },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Job", JobSchema);
