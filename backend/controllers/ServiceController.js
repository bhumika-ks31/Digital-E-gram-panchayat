const Service = require('../models/Service');
const { createLog } = require('../utils/Logger');

exports.createService = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const svc = await Service.create({ title, description, category, createdBy: req.user._id });
    createLog(req.user._id, 'create_service', { serviceId: svc._id }, req.ip);
    res.status(201).json(svc);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getServices = async (req, res) => {
  try {
    const q = {};
    if (req.query.category) q.category = req.query.category;
    if (req.query.q) q.title = { $regex: req.query.q, $options: 'i' };
    const services = await Service.find(q).populate('createdBy','name email');
    res.json(services);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateService = async (req, res) => {
  try {
    const svc = await Service.findById(req.params.id);
    if (!svc) return res.status(404).json({ message: 'Service not found' });
    // optionally allow only creator or officer
    svc.title = req.body.title || svc.title;
    svc.description = req.body.description || svc.description;
    svc.category = req.body.category || svc.category;
    await svc.save();
    createLog(req.user._id, 'update_service', { serviceId: svc._id }, req.ip);
    res.json(svc);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteService = async (req, res) => {
  try {
    const svc = await Service.findByIdAndDelete(req.params.id);
    if (!svc) return res.status(404).json({ message: 'Service not found' });
    createLog(req.user._id, 'delete_service', { serviceId: req.params.id }, req.ip);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
