var Validator = function() {
  var that = this;
  this.errors = [];
  this.validations = {
    'person[first_name]':        ['isPresent', 'isFirstNameAlpha', 'isCapital'],
    'person[last_name]':         ['isPresent', 'isLastNameAlpha'],
    'person[gender]':            ['isChecked'],
    'person[document_scan]':     ['isPresent', 'isImage'],
    'account[login]':            ['isPresent'],
    'account[password]':         ['isPresent'],
    'account[password_confirm]': ['isPresent', 'isConfirmed'],
    'payment[email]':            ['isPresent', 'isEmail'],
    'payment[credit_card]':      ['isPresent', 'isNumeric', 'isLong'],
    'stay[date_start]':          ['isPresent', 'isDate', 'isBefore'],
    'stay[date_end]':            ['isPresent', 'isDate', 'isAfter'],
    'stay[transport]':           ['isChecked'],
    'stay[hotel][standard]':     ['isChecked'],
    'stay[meals][standard]':     ['isChecked']
  };

  //
  // Initiates Validator instance
  //
  this.init = function() {
    // bind the event handler
    document.getElementById('registration').onsubmit = function() {
      return that.validate();
    };

    // set initial validator state
    this.wasValidated = false;
  };

  //
  // Runs the validations specified in this.init().
  //
  this.validate = function() {
    personDocumentScanInput.setName();
    this.errors.reset();
    var allPassed = true;

    for (var inputName in this.validations) {
      var input = document.registration[inputName];
      for (var i = 0; i < this.validations[inputName].length; i++) {
        var validationName = this.validations[inputName][i];
        var passed = this[validationName](input);
        if (!passed) {
          this.errors.add(inputName, validationName);
          allPassed = false;
          break;
        }
      }
    }

    this.wasValidated = true;
    personDocumentScanInput.removeName();
    this.errors.print();
    return allPassed;
  };

  //
  // Definitions of validations
  //
  this.isPresent = function(input) {
    if (input && input.value) {
      return input.value.replace(/^\s+|\s+$/g, '') != '';
    }
    return false;
  };
  this.isFirstNameAlpha = function(input) {
    return input.value.match(/^[A-Za-z ]*$/);
  };
  this.isLastNameAlpha = function(input) {
    return input.value.match(/^[A-Za-z-]*$/);
  };
  this.isCapital = function(input) {
    return input.value[0].match(/[A-Z]/);
  };
  this.isChecked = function(choices) {
    for (var i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        return true;
      }
    }
    return false;
  };
  this.isImage = function(input) {
    return input.value.match(/[\w.-]*\.(jpg|jpeg|gif)$/im);
  };
  this.isConfirmed = function(input) {
    return input.value == document.registration['account[password]'].value;
  };
  this.isEmail = function(input) {
    // source: http://www.w3schools.com/js/js_form_validation.asp
    var atpos  = input.value.indexOf("@");
    var dotpos = input.value.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= input.value.length);
  };
  this.isNumeric = function(input) {
    return input.value.match(/^[0-9]+[0-9 -]*[0-9]$/);
  };
  this.isLong = function(input) {
    return input.value.replace(/[^0-9]+/g, '').match(/^[0-9]{13,16}$/);
  };
  this.isDate = function(input) {
    return input.value.match(/^\d{4}-\d{2}-\d{2}$/);
  };
  this.isBefore = function(input) {
    return daysBetween(input.value, '2012-07-01') >= 0;
  };
  this.isAfter = function(input) {
    return daysBetween('2012-07-04', input.value) >= 0;
  };
  
  //
  // Helper methods for managing errors' messages
  //
  this.errors.add = function(inputName, validationName) {
    var fieldsetId = inputName.match(/^[a-z]+\[/)[0].replace(/\[/g, '');
    var inputId = inputName.replace(/\]/g, '').replace(/\[/g, '_');
    this.push({
      fieldsetId: fieldsetId,
      inputId: inputId + '_input',
      message: translator.getErrorMessage(inputId, validationName)
    });
  };

  this.errors.print = function() {
    for (var i = 0; i < this.length; i++) {
      var error = this[i];
      var errorsList = document.getElementById(error.fieldsetId + '_errors');

      if (!errorsList) {
        errorsList = document.createElement('ul');
        errorsList.id = error.fieldsetId + '_errors';
        errorsList.className = 'errors';
        document.getElementById(error.fieldsetId + '_aside').appendChild(errorsList);
      }

      var errorListItem = document.createElement('li');
      errorListItem.innerHTML = error.message;
      errorsList.appendChild(errorListItem);

      mark(document.getElementById(error.inputId));
    }
  };

  this.errors.reset = function() {
    for (var i = 0; i < this.length; i++) {
      var error = this[i];
      var errorsList = document.getElementById(error.fieldsetId + '_errors');
      var errorsListParent = document.getElementById(error.fieldsetId + '_aside');

      if (errorsListParent && errorsList) {
        errorsListParent.removeChild(errorsList);
      }

      unmark(document.getElementById(error.inputId));
    }
    this.splice(0);
  };

  //
  // Helpers for the file input
  //
  var personDocumentScanInput = document.getElementById('person_document_scan_input');

  personDocumentScanInput.setName = function() {
    this.setAttribute('name', 'person[document_scan]');
  };

  personDocumentScanInput.removeName = function() {
    this.removeAttribute('name');
  };
};
