function mark(elem, text) {
  if (!text) text = 'invalid';
  if (!elem.className.match(new RegExp('\b'+text+'\b'))) {
    elem.className += ' '+text;
  }
}

function unmark(elem, text) {
  if (!text) text = 'invalid';
  elem.className = elem.className.replace(new RegExp('\b?'+text+'\b?'), ' ');
}

function isEmpty(elem) {
  if (elem && elem.value) {
    return elem.value.replace(/^\s+|\s+$/g, '') == '';
  } 
  return true;
}

function isChecked(elem) {
  if (elem && elem.choices) {
    for (var i = 0; i < elem.choices.length; i++) {
      if (elem.choices[i].checked) {
        return true;
      }
    }
  }
  return false;
}

function daysBetween(start, end) {
  function parse(str) {
    var arr = str.split('-');
    return new Date(arr[0], arr[1], arr[2]);
  }
  var one_day = 1000 * 60 * 60 * 24;

  start = parse(start);
  end   = parse(end);
  return (end - start) / one_day;
}
