const CLICK = "click",
      LI = "li",
      IMPORTANT = "important",
      DONE = "done";
$(document).ready(function() {
  $(LI).on(CLICK, makeDone);
});

function makeDone() {
  var item = $(this);
  if (item.hasClass(IMPORTANT)) {
    item.removeClass(IMPORTANT);
  }
  item.addClass(DONE);
  item.off(CLICK);
}