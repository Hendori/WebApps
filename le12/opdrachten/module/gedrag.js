const CLICK = "click",
      LI = "li",
      IMPORTANT = "important",
      DONE = "done";
$(document).ready(function() {
  $(LI).on(CLICK, makeDone);
});

function makeDone ()  {
  var item = $(this);
  removeClasses(item, [IMPORTANT]);
  addClasses(item, [DONE]);
  item.off(CLICK);
}

function removeClasses(item, verwijderen) {
  verwijderen.forEach(function(klasse) {
    if (item.hasClass(klasse)) {
      item.removeClass(klasse);
    }
  });
}

function addClasses(item, toevoegen) {
  toevoegen.forEach(function(klasse) {
    item.addClass(klasse);
  });
}