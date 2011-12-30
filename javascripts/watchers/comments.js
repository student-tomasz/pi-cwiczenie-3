function CommentsWatcher() {
  var commentsInput = document.getElementById('comments_input');
  var counterInput  = document.getElementById('comments_char_counter');
  var counter = 0;
  var limit   = 500;

  this.updateCounter = function() {
    counter = commentsInput.value.length; 
    if (counter >= limit) {
      commentsInput.value = commentsInput.value.substring(0, limit-1);
    }
    counterInput.innerHTML = (limit - counter).toString();
  };

  this.init = function() {
    commentsInput.addEventListener('keydown', this.updateCounter, false);
    commentsInput.addEventListener('keyup', this.updateCounter, false);
  };
};
