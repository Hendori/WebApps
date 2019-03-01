function createTagFunction(tagname) {
  var begintag = "<" + tagname + ">",
      eindtag = "</" + tagname + ">";
  return function(tekst) {
    return begintag + tekst + eindtag;
  }
}