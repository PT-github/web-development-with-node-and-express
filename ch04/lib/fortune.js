var fortuneCookies = [
	"幸运饼干1",
	"幸运饼干2",
	"幸运饼干3",
	"幸运饼干4",
	"幸运饼干5"
];

exports.getFortune = function(){
	return fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
}