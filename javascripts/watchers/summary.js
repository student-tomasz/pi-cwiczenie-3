var SummaryWatcher = function() {
  var that = this;

  var language = new Object();
  var currency = new Object();

  language.change = function() {
    var options = document.registration.language;
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      unmark(option.parentNode, 'active');
      if (option.checked) {
        mark(option.parentNode, 'active');
        // console.log('language == ' + option.value);
      }
    }
  };

  currency.change = function() {
    var options = document.registration.currency;
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      unmark(option.parentNode, 'active');
      if (option.checked) {
        mark(option.parentNode, 'active');
        // console.log('currency == ' + option.value);
      }
    }
  };

  this.init = function() {
    var options = document.registration.language;
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('change', language.change, false);
    }
    options = document.registration.currency;
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('change', currency.change, false);
    }
  };
};
