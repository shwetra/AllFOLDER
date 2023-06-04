const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  startDate: String,
  endDate: String,
  Reason: String,
  Type: String,
  Divison: String,
  Category: String,
  Priority: String,
  Department: String,
  Location: String,
  projectTheme: String,
  status: {
    type: String,
    default: 'registered',
  },
});

const ProjectModel = mongoose.model('ProjectModel', ProjectSchema);

module.exports = ProjectModel;
