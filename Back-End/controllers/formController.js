const serviceRequest = require("../models/serviceRequest");

// Create new service form
const createServiceForm = async (req, res, next) => {
  try {
    const { requestNumber, requestDate } = req.body;
    if (!requestNumber || !requestDate) {
      res.status(400);
      throw new Error("Request number and date are required");
    }

    const serviceForm = new serviceRequest(req.body);
    await serviceForm.save();
    res.status(201).json(serviceForm);
  } catch (error) {
    next(error);
  }
};

  // // Get all service forms
  // const getAllServiceForms = async (req, res, next) => {
  //   try {
  //     const serviceForms = await ServiceRequest.find();
  //     res.json(serviceForms);
  //   } catch (error) {
  //  next(error);
  // };
  // };

//   // Get service form by ID
//   const getServiceFormById = async (req, res) => {
//     try {
//       const serviceForm = await ServiceRequest.findById(req.params.id);
//       if (!serviceForm) {
//         return res.status(404).json({ message: 'Service form not found' });
//       }
//       res.json(serviceForm);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error fetching service form', error: error.message });
//     }
//   };

//   // Update service form by ID
//   const updateServiceForm = async (req, res) => {
//     try {
//       const updatedForm = await ServiceRequest.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true, runValidators: true }
//       );
//       if (!updatedForm) {
//         return res.status(404).json({ message: 'Service form not found' });
//       }
//       res.json(updatedForm);
//     } catch (error) {
//       console.error(error);
//       res.status(400).json({ message: 'Error updating service form', error: error.message });
//     }
//   };

//   // Delete service form by ID
//   const deleteServiceForm = async (req, res) => {
//     try {
//       const deletedForm = await ServiceRequest.findByIdAndDelete(req.params.id);
//       if (!deletedForm) {
//         return res.status(404).json({ message: 'Service form not found' });
//       }
//       res.json({ message: 'Service form deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error deleting service form', error: error.message });
//     }
//   };

module.exports = {
  createServiceForm,
  // getAllServiceForms,
  // getServiceFormById,
  // updateServiceForm,
  // deleteServiceForm,
};