'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService.js');

module.exports.createJob = function createJob(req, res, next, body) {
  Jobs.createJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createJobApplication = function createJobApplication(req, res, next, body, id) {
  Jobs.createJobApplication(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteJobWithId = function deleteJobWithId(req, res, next, id) {
  Jobs.deleteJobWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllJobs = function listAllJobs(req, res, next) {
  Jobs.listAllJobs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyJobApplicationWithId = function modifyJobApplicationWithId(req, res, next, body, id) {
  Jobs.modifyJobApplicationWithId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyJobWithId = function modifyJobWithId(req, res, next, body, id) {
  Jobs.modifyJobWithId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewApplicationsForJob = function viewApplicationsForJob(req, res, next, id) {
  Jobs.viewApplicationsForJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewJobWithId = function viewJobWithId(req, res, next, id) {
  Jobs.viewJobWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
