var Translator = function() {
  var that = this;

  var dictionaries = [
    PersonDictionary,
    AccountDictionary,
    StayDictionary,
    CommentsDictionary,
    PaymentDictionary,
    SummaryDictionary
  ];

  var languages = document.registration.language;
  var language = 'pl';

  this.update = function() {
    for (var i = 0; i < languages.length; i++) {
      if (languages[i].checked) {
        language = languages[i].value;
      }
      if (!language) {
        language = 'pl';
      }
    }
  };

  this.translate = function() {
    that.update();
    for (var i = 0; i < dictionaries.length; i++) {
      var dictionary = dictionaries[i];
      for (var id in dictionary) {
        var element = document.getElementById(id+'_label');
        if (element) {
          element.innerHTML = dictionary[id][language];
        }
      }
    }
    if (validator.wasValidated) {
      validator.validate();
    }
  };

  this.getErrorMessage = function(inputName, validationName) {
    var dictionary;
    for (var i = 0; i < dictionaries.length; i++) {
      if (dictionaries[i][inputName]) {
        dictionary = dictionaries[i];
      }
    }
    var errorMessage = '';
    errorMessage += dictionary[inputName][language];
    errorMessage += ErrorsDictionary[validationName][language];
    return errorMessage;
  };

  this.init = function() {
    for (var i = 0; i < languages.length; i++) {
      languages[i].addEventListener('change', this.translate, false);
    }
  };
};
