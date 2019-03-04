function tagThis(tag, text) {
    return "<" + tag + ">" + text + "<" + tag + ">";
}


function createTagFunction(tag) {
    let beginTag = "<" + tag + ">";
    let endTag = "</" + tag + ">";
    return function(text) {
        return beginTag + text + endTag;
    };
}

let tagLi = createTagFunction("li");
print(tagLi("kwaak"));
