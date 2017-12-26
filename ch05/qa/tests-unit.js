var fortune = require('../lib/fortune');
var expect = require('chai').expect;

suite('Fortune cookie tests', function(){
	test('getFortune() 返回一个fortune', function(){
		expect(typeof fortune.getFortune() === 'string');
	});
});