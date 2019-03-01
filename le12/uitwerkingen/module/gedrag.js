var todoLijst = (function() {
  const CLICK = "click",
        LI = "li",
        IMPORTANT = "important",
        DONE = "done";
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
  function makeDone ()  {
    var item = $(this);
    removeClasses(item, [IMPORTANT]);
    addClasses(item, [DONE]);
    item.off(CLICK);
  }
  return {
    makeDone: makeDone,
    CLICK: CLICK,
    LI: LI
  }
})();

$(document).ready(function() {
  $(todoLijst.LI).on(todoLijst.CLICK, todoLijst.makeDone);
});