function StayWatcher() {
  var mealsFullInput   = document.getElementById('stay_meals_standard_full_input');
  var mealsMediumInput = document.getElementById('stay_meals_standard_medium_input');
  var mealsSmallInput  = document.getElementById('stay_meals_standard_small_input');

  var initDatepickers = function() {
    $.datepicker.setDefaults({
      constrainInput: false,
      dateFormat: 'yy-mm-dd',
      buttonImage: 'images/cal.png',
      buttonImageOnly: true,
      showOn: 'button'
    });

    $('#stay_date_start_input').datepicker({
      buttonText: 'Wybierz datę przyjazdu',
      defaultDate: '2012-07-01'
    });

    $('#stay_date_end_input').datepicker({
      buttonText: 'Wybierz datę wyjazdu',
      defaultDate: '2012-07-04'
    });
  };

  this.restrict = function() {
    mealsFullInput.disabled   = true;
    mealsMediumInput.disabled = true;
    if (mealsFullInput.checked || mealsMediumInput.checked) {
      mealsSmallInput.checked = true;
    }
    calculator.calculate();
  };

  this.unrestrict = function() {
    mealsFullInput.disabled   = false;
    mealsMediumInput.disabled = false;
  };

  this.init = function() {
    initDatepickers();
    document.getElementById('stay_hotel_standard_hostel_input').addEventListener('change', this.restrict, false);
    for (var i = 3; i <= 5; i++) {
      document.getElementById('stay_hotel_standard_' + i + '_input').addEventListener('change', this.unrestrict, false);
    }
  };
};
