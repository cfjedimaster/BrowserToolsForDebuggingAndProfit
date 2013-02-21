describe("It can formate numbers nicely", function() {
 
	it("takes a number less than ten thousand and returns it as is", function() {
		var inputs = [1,100,999,1000,6321];
		for(var i=0; i<inputs.length; i++) {
			expect(inputs[i]).toBe(fnum(inputs[i]));
		}
		expect(11000).not.toBe(fnum(11000));
	});
 
	it("takes a number between 10,000 and 1 million and returns it as NK", function() {
		var inputs = [12019,32901,64091,201912,199102,581091,789109,320980];
		var outputs = ["12K","33K","64K","202K","199K","581K","789K","321K"];
		for(var i=0; i<inputs.length; i++) {
			expect(fnum(inputs[i])).toBe(outputs[i]);
		}
	});
 
	it("takes a number between 1 million and 10 million and returns it as N.XXM", function() {
		var inputs = [1210901,5312091,8901451];
		var outputs = ["1.21M","5.31M","8.90M"];
		for(var i=0; i<inputs.length; i++) {
			expect(fnum(inputs[i])).toBe(outputs[i]);
		}
	});
 
	it("takes a number between 1 billion and 1 trillion and returns it as NB", function() {
		var inputs = [9286109901,32286109901,129286109901];
		var outputs = ["9B","32B","129B"];
		for(var i=0; i<inputs.length; i++) {
			expect(fnum(inputs[i])).toBe(outputs[i]);
		}
	});
 
	it("takes a number 1 trillion and over and returns it as 1T+", function() {
		expect(fnum(1000000000000)).toBe("1T+");
		expect(fnum(1000000000001)).toBe("1T+");
	});
 
	it("takes an invalid number and returns it as is", function() {
		expect(fnum("moo")).toBe("moo");
	});

	it("handles the case of 9999 correctly", function() {
		expect(fnum("9999")).toBe("9999");
	});
 
});