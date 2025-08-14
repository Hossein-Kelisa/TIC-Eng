const express = require('express');
const router = express.Router();
const serviceRequest = require('../models/serviceRequest');
const {
    createServiceForm
    // getAllServiceForms,
    // getServiceFormById,
    // updateServiceForm,
    // deleteServiceForm
} = require('../controllers/formController');


// Create a new service request
router.post('/', createServiceForm);

// // Get all service requests
// router.get('/', getAllServiceForms);

// // Get a service request by ID
// router.get('/:id', getServiceFormById);

// // Update a service request by ID
// router.put('/:id', updateServiceForm);

// // Delete a service request by ID
// router.delete('/:id', deleteServiceForm);

module.exports = router;