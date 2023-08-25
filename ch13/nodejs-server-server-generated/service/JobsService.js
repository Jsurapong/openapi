'use strict';


const mongoose = require('mongoose');
const JobModel = mongoose.model('Job', require('../models/Job').Job);

/**
 * Create Job
 *
 * body Job  (optional)
 * no response value expected for this operation
 **/
exports.createJob = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Create Job Application
 *
 * body JobApplication  (optional)
 * id String 
 * no response value expected for this operation
 **/
exports.createJobApplication = function (body, id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Delete Job
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteJobWithId = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * List All Jobs
 *
 * returns inline_response_200
 **/
exports.listAllJobs = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "items": [{
        "creator_user_id": "creator_user_id",
        "start_time": "start_time",
        "activity": "activity",
        "end_time": "end_time",
        "id": "id",
        "dog": {
          "size": "size",
          "name": "name",
          "age": 0,
          "breed": "breed"
        }
      }, {
        "creator_user_id": "creator_user_id",
        "start_time": "start_time",
        "activity": "activity",
        "end_time": "end_time",
        "id": "id",
        "dog": {
          "size": "size",
          "name": "name",
          "age": 0,
          "breed": "breed"
        }
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify Job Application
 *
 * body JobApplication Update the application details (optional)
 * id String 
 * returns JobApplication
 **/
exports.modifyJobApplicationWithId = function (body, id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "user_id": "user_id",
      "job_id": "job_id",
      "id": "id",
      "status": "status"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify Job
 *
 * body Job  (optional)
 * id String 
 * returns Job
 **/
exports.modifyJobWithId = function (body, id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "creator_user_id": "creator_user_id",
      "start_time": "start_time",
      "activity": "activity",
      "end_time": "end_time",
      "id": "id",
      "dog": {
        "size": "size",
        "name": "name",
        "age": 0,
        "breed": "breed"
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Applications For Job
 *
 * id String 
 * returns inline_response_200_1
 **/
exports.viewApplicationsForJob = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "items": [{
        "user_id": "user_id",
        "job_id": "job_id",
        "id": "id",
        "status": "status"
      }, {
        "user_id": "user_id",
        "job_id": "job_id",
        "id": "id",
        "status": "status"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Job
 *
 * id String 
 * returns Job
 **/
exports.viewJobWithId = async function (id) {

  const job = await JobModel.findById(id);

  return job.toResultFormat();

}

