suite('Global Tests', function(){
	test('页面有title',function(){
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});
});