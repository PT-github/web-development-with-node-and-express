suite('"About" Page Tests', function(){
	test('界面必须包含contact链接',function(){
		assert($('a[href="/contact"]').length);
	});
});