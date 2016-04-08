var scores = [90, 98, 89, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

function average(num){
	var sum = 0;
	num.forEach(function(item){
		sum += item;
	})
	var average = Math.round(sum / num.length);
	console.log(average);
};