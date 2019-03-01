var assert = chai.assert;

describe("Tests voor validate.js", function () {

	var testValidator = validator,
	Message = function (satisfy, feedback) {
		this.satisfy = satisfy;
		this.feedback = feedback;
	};

	// Let op dubbele \ in regex voor digits en spaties!
	const 
	PATTERN1 = '^[1-9]\\d{3}\\s*[a-zA-Z]{2}$',
	NIETOK = 'Niet ok',
	OK = "&#10003;",
	TEKLEIN = "Alleen hele positieve getallen",
	TEGROOT = "Alleen getallen kleiner dan 100",

	testRegex1 = $('<input/>').attr({
			pattern : PATTERN1,
			value : "1234aa",
			title : OK
		}),
	testRegex2 = $('<input/>').attr({
			pattern : PATTERN1,
			value : '1234AA',
			title : OK
		}),
	testRegex3 = $('<input/>').attr({
			pattern : PATTERN1,
			value : '1234 AA',
			title : OK
		}),
	testRegex4 = $('<input/>').attr({
			pattern : PATTERN1,
			value : '1234a',
			title : NIETOK
		}),
	testRegex5 = $('<input/>').attr({
			pattern : PATTERN1,
			value : '123AA',
			title : NIETOK
		}),
	testMin1 = $('<input/>').attr({
			min : '0',
			value : '-1'
		}),
	testMin2 = $('<input/>').attr({
			min : '0',
			value : '0'
		}),
	testMin3 = $('<input/>').attr({
			min : '0',
			value : '1'
		}),

	testMax1 = $('<input/>').attr({
			max : '10',
			value : '9'
		}),
	testMax2 = $('<input/>').attr({
			max : '10',
			value : '10'
		}),
	testMax3 = $('<input/>').attr({
			max : '10',
			value : '11'
		});

	describe("isValidAgainstRegex (regex = ^[1-9]\d{3}\s*[a-zA-Z]{2}$)", function () {
		it("isValidAgainstRegex(1234aa)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstRegex(testRegex1), "testRegex1");
		});
		it("isValidAgainstRegex(1234AA)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstRegex(testRegex2), "testRegex2");
		});
		it("isValidAgainstRegex(1234 AA)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstRegex(testRegex3), "testRegex3");
		});
		it("isValidAgainstRegex(1234a)", function () {
			assert.deepEqual(new Message(false, NIETOK), testValidator.isValidAgainstRegex(testRegex4), "testRegex4");
		});
		it("isValidAgainstRegex(123AA)", function () {
			assert.deepEqual(new Message(false, NIETOK), testValidator.isValidAgainstRegex(testRegex5), "testRegex5");
		});
	});

	describe("isValidAgainstMin (min value = 0)", function () {
		it("isValidAgainstMin(-1)", function () {
			assert.deepEqual(new Message(false, TEKLEIN), testValidator.isValidAgainstMin(testMin1), "testMin1");
		});
		it("isValidAgainstMin(0)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstMin(testMin2), "testMin2");
		});
		it("isValidAgainstMin(1)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstMin(testMin3), "testMin3");
		});
	});

	describe("isValidAgainstMax (max value = 10)", function () {
		it("isValidAgainstMax(9)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstMax(testMax1), "testMax1");
		});
		it("isValidAgainstMax(10)", function () {
			assert.deepEqual(new Message(true, OK), testValidator.isValidAgainstMax(testMax2), "testMax2");
		});
		it("isValidAgainstMax(11)", function () {
			assert.deepEqual(new Message(false, TEGROOT), testValidator.isValidAgainstMax(testMax3), "testMax3");
		});
	});
});
