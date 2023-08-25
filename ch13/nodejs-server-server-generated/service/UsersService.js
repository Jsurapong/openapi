'use strict';


/**
 * Delete User
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Jobs For User
 *
 * id String 
 * returns inline_response_200
 **/
exports.listJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : "creator_user_id",
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : "id",
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 0,
      "breed" : "breed"
    }
  }, {
    "creator_user_id" : "creator_user_id",
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : "id",
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 0,
      "breed" : "breed"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify User
 *
 * body User  (optional)
 * id String 
 * returns User
 **/
exports.modifyUserWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register User
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View User
 *
 * id String 
 * returns User
 **/
exports.viewUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

