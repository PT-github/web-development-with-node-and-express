var Browser = require('zombie'),
assert = require('chai').assert;

var browser;
suite('跨页测试', function(){
	setup(function(){
		browser = new Browser();
	});

	test('从hood-river界面访问request-group-rate界面需要填充referrer隐藏域', function(done){
		var refferrer = 'http://localhost:3000/tours/hood-river';
		browser.visit(refferrer, function(){
			browser.clickLink('.requestGroupRate',function(){
				assert(browser.field('referrer').value === refferrer);
				done();
			});
		});
	});
	test('从oregon-coast界面访问request-group-rate界面需要填充referrer隐藏域', function(done){
		var refferrer = 'http://localhost:3000/tours/oregon-coast';
		browser.visit(refferrer, function(){
			browser.clickLink('.requestGroupRate',function(){
				assert(browser.field('referrer').value === refferrer);
				done();
			});
		});
	});
	test('直接访问request-group-rate界面referrer隐藏域必须为空', function(done){
		var refferrer = 'http://localhost:3000/tours/request-group-rate';
		browser.visit(refferrer, function(){
			assert(browser.field('referrer').value === '');
			done();
		});
	});
});