const CLICK = "click",
      LI = "li",
      IMPORTANT = "important",
      DONE = "done";
$(document).ready(function() {
  $(LI).on(CLICK, makeDone);
});

function makeDone ()  {
  var item = $(this);
  removeAndAddClasses(item, [IMPORTANT], [DONE]);
  item.off(CLICK);
}

function removeAndAddClasses(item, verwijderen, toevoegen) {
  verwijderen.forEach(function(klasse) {
    if (item.hasClass(klasse)) {
      item.removeClass(klasse);
    }
  });
  toevoegen.forEach(function(klasse) {
    item.addClass(klasse);
  });
}