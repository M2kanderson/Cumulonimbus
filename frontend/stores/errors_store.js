const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(Dispatcher);

let _errors = {};
let _form = "";

ErrorStore.formErrors = function(form) {
  if (form === _form) {
    return _errors;
  } else {
    return {};
  }
};

const form = function() {
  return _form;
};

ErrorStore.setErrors = function(formName, errors) {
  _form = formName;
  errors.forEach((error) => {
    _errors[_form] = error;
  });
};

ErrorStore.clearErrors = function() {
  _form = "";
  _errors = {};
};

ErrorStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      this.setErrors(payload.form, payload.errors);
      this.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      this.clearErrors();
      this.__emitChange();
      break;

  }
};

module.exports = ErrorStore;
