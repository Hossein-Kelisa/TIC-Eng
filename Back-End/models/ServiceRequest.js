// const mongoose = require('mongoose');

// const serviceRequestSchema = new mongoose.Schema({

//   // Basic Info
//   requestNumber: { type: String, required: true },
//   requestDate: { type: Date, required: true },
//   companyName: { type: String, required: true },
//   consultant: String,
//   employerName: String,
//   projectName: String,
//   postalCode: String,
//   postalAddress: String,
//   responsiblePerson: String,
//   fax: String,
//   phone: String,
//   others: String,

//   // Service Types
//   serviceType: {
//     UT: { type: Boolean, default: false },
//     MT: { type: Boolean, default: false },
//     PT: { type: Boolean, default: false },
//     VT: { type: Boolean, default: false },
//     RTI: { type: Boolean, default: false },
//     others: String
//   },

//   // Work Details
//   workDetails: String,
//   workDuration: String,
//   referenceStandard: String,
//   city: String,
//   country: String,

//   // Work Location
//   workLocation: {
//     atHeight: { type: Boolean, default: false },
//     onGround: { type: Boolean, default: false },
//     underground: { type: Boolean, default: false },
//     onLand: { type: Boolean, default: false },
//     onWater: { type: Boolean, default: false }
//   },

//   // Time of Inspection
//   timeOfInspection: {
//     VT: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     },
//     PT: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     },
//     MT: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     },
//     UT: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     },
//     RTI: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     },
//     others: {
//       day: { type: Boolean, default: false },
//       night: { type: Boolean, default: false },
//       fullDay: { type: Boolean, default: false }
//     }
//   },

//   // Employer Commitments
//   employerCommitments: {
//     phoneAndFax: { type: Boolean, default: false },
//     scaffolding: { type: Boolean, default: false },
//     transportation: { type: Boolean, default: false },
//     workplaceTransport: { type: Boolean, default: false },
//     lighting: { type: Boolean, default: false },
//     food: { type: Boolean, default: false },
//     workEnvironment: { type: Boolean, default: false },
//     other: String
//   },

//   // Materials
//   materials: {
//     providedBy: { type: String, enum: ['Employer', 'Company'] },
//     materialDetails: String
//   },

//   // Human Resources
//   humanResources: {
//     level1: Number,
//     level2International: Number,
//     level3International: Number,
//     UT: Number,
//     MT: Number,
//     VT: Number,
//     PT: Number,
//     RTI: Number
//   },

//   // Other Info
//   teamCount: Number,
//   preparedBy: String,
//   preparedDate: Date,
//   employerSignature: String,
//   managerSignature: String,
//   managerOpinion: String,
//   responseDetails: String,
//   customerNumber: String,
//   adminSignature: String

// }, { timestamps: true });

// module.exports = mongoose.model('serviceRequest', serviceRequestSchema);
