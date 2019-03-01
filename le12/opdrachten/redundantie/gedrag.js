const CLICK = "click",
      LI = "li",
      IMPORTANT = "important",
      DONE = "done";
$(document).ready(function() {
  $(LI).on(CLICK, makeDone);
});

function makeDone() {
  if ($(this).hasClass(IMPORTANT)) {
    $(this).removeClass(IMPORTANT);
  }
  $(this).addClass(DONE);
  $(this).off(CLICK);
}