const Application = require('../models/Application');
const Service = require('../models/Service');
const { createLog } = require('../utils/Logger');

exports.apply = async (req, res) => {
  try {
    const { serviceId } = req.body;
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    const formData = req.body.formData ? JSON.parse(req.body.formData) : {};
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const app = await Application.create({
      userId: req.user._id,
      serviceId,
      formData,
      fileUrl
    });
    createLog(req.user._id, 'apply_service', { applicationId: app._id, serviceId }, req.ip);
    res.status(201).json(app);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getUserApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user._id }).populate('serviceId');
    res.json(apps);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getAllApplications = async (req, res) => {
  try {
    // staff/officer see all
    const apps = await Application.find().populate('serviceId userId assignedTo');
    res.json(apps);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status, assignedTo } = req.body;
    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ message: 'Application not found' });
    if (status) app.status = status;
    if (assignedTo) app.assignedTo = assignedTo;
    await app.save();
    createLog(req.user._id, 'update_application_status', { applicationId: app._id, status }, req.ip);
    res.json(app);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
