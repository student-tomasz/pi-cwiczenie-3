var Calculator = function () {
  var that = this;

  var checkout = document.getElementById('summary_checkout_input');
  checkout.update = function(total) {
    this.value = (total*that.currency.factor).toFixed(0) + ' ' + that.currency.name;
    // console.log(this.value);
  };

  this.currencies = {
    pln: { factor: 1,     name: 'PLN' },
    eur: { factor: 1/4.6, name: 'EUR' },
    usd: { factor: 1/3.5, name: 'USD' },
    update: function() {
      for (var i = 0; i < document.registration.currency.length; i++) {
        var chosen = document.registration.currency[i];
        if (chosen.checked) {
          that.currency = this[chosen.value];
          if (!that.currency) {
            that.currency = this['pln'];
          }
        }
      }
    }
  };
  this.currency = this.currencies['pln'];

  var prices = {
    'stay_hotel_standard': {
      '5':               { price: 600,  billed: 'daily' },
      '4':               { price: 500,  billed: 'daily' },
      '3':               { price: 400,  billed: 'daily' },
      'hostel':          { price: 150,  billed: 'daily' }
    },
    'stay_meals_standard': {
      'full':            { price: 100,  billed: 'daily' },
      'medium':          { price: 80,   billed: 'daily' },
      'small':           { price: 30,   billed: 'daily' },
      'none':            { price: 0,    billed: 'daily' }
    },
    'stay_meals_banquet': {
      'first_day':       { price: 200,  billed: 'once' },
      'last_day':        { price: 300,  billed: 'once' }
    },
    'stay_transport': {
      'airplane':        { price: 3000, billed: 'once' },
      'ferry':           { price: 1800, billed: 'once' },
      'self':            { price: 0,    billed: 'once' }
    },
    'trips': {
      'royal':           { price: 300,  billed: 'once' },
      'jewish':          { price: 150,  billed: 'once' },
      'second_day_none': { price: 0,    billed: 'once' },
      'condemned':       { price: 300,  billed: 'once' },
      'uni':             { price: 150,  billed: 'once' },
      'pope':            { price: 150,  billed: 'once' },
      'third_day_none':  { price: 0,    billed: 'once' }
    }
  };

  this.calculate = function() {
    that.currencies.update();

    var dateStart = document.getElementById('stay_date_start_input');
    var dateEnd   = document.getElementById('stay_date_end_input');
    if (isEmpty(dateStart) || isEmpty(dateEnd)) {
      checkout.update(0.0);
      return 0.0;
    }

    var days  = daysBetween(dateStart.value, dateEnd.value);
    if (days < 0) {
      checkout.update(0.0);
      return 0.0;
    }

    var total = 0.0;
    for (var fieldset in prices) {
      for (var item in prices[fieldset]) {
        var element = document.getElementById(fieldset+'_'+item+'_input');
        var price   = prices[fieldset][item].price;
        var daily   = prices[fieldset][item].billed == 'daily';
        if (element.checked) {
          if (daily) {
            total += days * price;
          } else {
            total += price;
          }
        }
      }
    }

    checkout.update(total);
    return total;
  };

  this.init = function() {
    var dateInputIds = ['stay_date_start_input', 'stay_date_end_input'];
    for (var i = 0; i < dateInputIds.length; i++) {
      var element = document.getElementById(dateInputIds[i]);
      element.addEventListener('change', that.calculate, false);
    }
    $.datepicker.setDefaults({ onClose: that.calculate });
    
    for (var fieldset in prices) {
      for (var item in prices[fieldset]) {
        var element = document.getElementById(fieldset+'_'+item+'_input');
        element.addEventListener('change', that.calculate, false);
      }
    }

    for (var name in this.currencies) {
      var element = document.getElementById('currency_'+name+'_input');
      if (element) {
        element.addEventListener('change', that.calculate, false);
      }
    }
  };
};
