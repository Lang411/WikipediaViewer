$(document).ready(function() {
console.log('you loaded the page and JQuery Loaded');
	$("input[name=submitButton]").click(function (){
	console.log('you clicked the button');
	var a = $("input[name=searchString]").val();
		console.log('This is your search string: '+a);

		var WikiAPI ='https://en.wikipedia.org/w/api.php?action=query&titles='+a+'&prop=revisions&rvprop=content&format=json';
		console.log(WikiAPI);
		//https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=&prop=revisions&titles=Main+Page&rvprop=content'
		//var WikiAPI ='https://en.wikipedia.org/w/api.php?action=query&titles='+a+'prop=revisions&rvprop=content&format=jsonfm';
		$.getJSON( WikiAPI, function(json) {
		console.log(json)
		});
	});
});
