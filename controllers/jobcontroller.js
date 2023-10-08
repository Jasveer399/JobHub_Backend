const Job = require("../models/job");

module.exports = {
  createjob: async (req, res) => {
    const newjob = new Job(req.body);

    try {
      await newjob.save();

      res
        .status(201)
        .json({ status: true, message: "Job Created Successfuly" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateJob: async (req, res) => {
    const jobId = req.params.id;
    const update = req.body;
    try {
      const updatedJob = await Job.findByIdAndUpdate(jobId, update, {
        new: true,
      });
      if (!updatedJob) {
        return res
          .status(404)
          .json({ status: false, message: "Job not Found" });
      }
      res
        .status(200)
        .json({ status: true, message: "Job updated Successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteJob: async (req, res) => {
    const jobId = req.params.id;

    try {
      await Job.findByIdAndDelete(jobId);
      res
        .status(201)
        .json({ status: true, message: "Job deleted Successfuly" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getJob: async (req, res) => {
    const jobId = req.params.id;
    try {
      const job = await Job.findById(
        { _id: jobId },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
