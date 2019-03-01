var tekst,
    paragraphs;

$(document).ready(function () {
	tekst = $("#text").html();
	paragraphs = tekst.split("\n\n");
});

/**
 * @function labelParagraphs
 * @desc     Labelt de paragrafen als header of p
 *
 * @param    {array} pars - Een array met paragrafen; elke paragraaf is een string
 * @returns  {array} Een array met paragraafobjecten.
 *                 De mogelijke types van de paragraafobjecten zijn:
 *                 {type: p, content: string},
 *				  {type: h1, content: string},
 * 				  {type: h2, content: string}.
 */
function labelParagraphs(pars) {
   /**
   * @function label
   * @desc Labelt paragraaf par als header of p
   * @param {string} par - Een paragraaf als string
   * @returns {object} Een paragraafobject.
   * De mogelijke paragraafobject zijn:
   *              {tag: p, content: string},
   *              {tag: h1, content: string},
   *              {tag: h2, content: string}.
   */ 

	return pars.map(label);
  	function label(par) {
		const PERCENT = "%",
              H = "h",
		      P = "p";
		var index = 0,
         res;
		while (par.charAt(index) === PERCENT) {
			index = index + 1;
		}
		if (index > 0) {
			res = {
				tag : H + index,
				content : [par.slice(index + 1)]
			};
		} 
        else {
			res = {
				tag : P,
				content : par
        // Dit wordt later: labelContent(par.slice(index))
			}
	    }
		return res;
	}
}

/**
 * @function labelContent
 * @desc     Label de content van de p-elementen: emphasized en normal
 * @param    {array} text -  Een array met de minhoud van een paragraafobject
 * @returns  {array} Een array met paragraafobjecten. De mogelijke types van de paragraafobjecten zijn:
 *         {tag: normal, content: string} 
 *         {tag: emphazised, content: string}
 */
function labelContent(text) {
  const STAR = "*",
	      EMPHASIZED = "emphasized",
	      NORMAL = "normal",
	      PARAGRAPH = "p";

	function splitContent(par) {
		var pos = 0,
		    fragments = [],
		    max = par.length,
		    end;
		while (pos < max) {
			switch (par.charAt(pos)) {
			case STAR:
				end = findClosing(par, STAR, pos + 1);
        console.log("pushing: " + par.slice(pos + 1, end));
				fragments.push({
					tag : EMPHASIZED,
					content : par.slice(pos + 1, end)
				});
				pos = end + 1;
				break;
			default:
				end = findOpeningOrEnd(par, pos);
				fragments.push({
					tag : NORMAL,
					content : par.slice(pos, end)
				});
				pos = end;
			}
		}
		return fragments;
	}

	function findClosing(par, character, from) {
		var end = par.indexOf(character, from),
		    index;
		if (end === -1) {
			throw Error("Missing closing '" + character + "'!");
		} else {
			index = end;
		}
		return index;
	}

	function findOpeningOrEnd(par, from) {

		function indexOrEnd(character) {
			var index = par.indexOf(character, from);
			return index === -1 ? par.length : index;
		}

		return indexOrEnd(STAR);
	}
    return splitContent(text);
}

/**
 * @function prettyPrint2
 * @desc     Transformeert de verwerkte paragrafen na stap 2 weer naar normale vorm.
 *
 * @param    {array} Een array met paragraafobjecten. De mogelijke paragraafobjecten zijn:
 *         {tag: p, content: [ {tag: normal, content: string} | {tag: emphazised, content: string}]},
 *				  {tag: h1, content: string},
 *				  {tag: h2, content: string}.
 * @returns  {String} De tekstfile in leesbare vorm.
 */
function prettyPrint2(pars) {
	var arr = pars.map(prettyPart);

	function prettyPart(part) {
		var res = "",
		HEADER1 = "h1",
		HEADER2 = "h2",
		PARAGRAPH = "p";

		switch (part.tag) {
		case HEADER1:			
		case HEADER2:
			res = res + part.tag + ": " + part.content + "\n";
			break;
		case PARAGRAPH:
			res = res + part.tag + "\n";
			part.content.forEach(function (pc) {
				res = res + "- " + pc.tag + ": " + pc.content + "\n";
			});
			break;
		default:
			throw new Error("Something is wrong with " + part.tag + " - " + part.content);
		}
		return res;
	}

	return arr.join(" ");
}

/**
 * @function transformToHTML
 * @desc     Transformeer de interne representatie naar HTML.
 * @param    {array} pars - Een array met paragraafobjecten
 * @returns   {string} De tekstfile in HTML.
 */

function transformToHTML(pars) {
  const HEADER1 = "h1",
	      HEADER2 = "h2",
	      PARAGRAPH = "p";
	var res = "",
      pTag,
      emphTag,
      h1Tag,
      h2Tag;

	function createTagFunction(tagname) {
		return function(content) {
      return '<' + tagname + '>' + content + '</' + tagname + '>';
    }
	}
  pTag = createTagFunction("p");
  emphTag = createTagFunction("em");
  h1Tag = createTagFunction("h1");
  h2Tag = createTagFunction("h2");

	function innerHTML(content) {
    const NORMAL = "normal",
          EMPHASIZED = "emphasized";
		var res = "";
		content.forEach(function (c) {
			switch (c.tag) {
			case NORMAL:
				res = res + c.content;
				break;
			case EMPHASIZED:
				res = res + emphTag(c.content);
				break;
			default:
				throw new Error("Something is wrong with " + c.tag);
			}
		});
		return res;
	}

	function transformElement(el) {
		switch (el.tag) {
		case HEADER1:
			res = res + h1Tag(el.content);
			break;
		case HEADER2:
			res = res + h2Tag(el.content);
			break;
		case PARAGRAPH:
			res = res + pTag(innerHTML(el.content));
			break;
		default:
			throw new Error("Something is wrong with " + el.tag);
		}
	}

	pars.forEach(transformElement);

	return res;
}
