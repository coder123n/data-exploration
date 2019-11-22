$(document).ready(function(){
	$("#ans1").hide();
	$("#ans2").hide();
	$("#ans3").hide();
	$("#q1").click(function(){
		$("#ans1").toggle();
	});
	$("#q2").click(function(){
		$("#ans2").toggle();
	});
	$("#q3").click(function(){
		$("#ans3").toggle();
	});

});


window.onload = function () {

//Better to construct options first and then pass it as a parameter
var options = {
	animationEnabled: true,
	title: {
		text: "How well each candidate did in their hometown.",                
		fontColor: "Peru"
	},	
	axisY: {
		tickThickness: 0,
		lineThickness: 0,
		valueFormatString: " ",
		gridThickness: 0                    
	},
	axisX: {
		tickThickness: 0,
		lineThickness: 0,
		labelFontSize: 18,
		labelFontColor: "Peru"				
	},
	data: [{
		indexLabelFontSize: 26,
		toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
		indexLabelPlacement: "inside",
		indexLabelFontColor: "white",
		indexLabelFontWeight: 600,
		indexLabelFontFamily: "Verdana",
		color: "#62C9C3",
		type: "bar",
		dataPoints: [
			{ y: 21, label: "21%", indexLabel: "Wayne County" },
			{ y: 25, label: "25%", indexLabel: "Kings County" },
			{ y: 33, label: "33%", indexLabel: "Travis County" },
			{ y: 36, label: "36%", indexLabel: "Essex County" },
			{ y: 42, label: "42%", indexLabel: "Queens County" },
			{ y: 49, label: "49%", indexLabel: "Cook County" },
			{ y: 50, label: "50%", indexLabel: "Midland County" },
			{ y: 55, label: "55%", indexLabel: "Allegheny County" },
			{ y: 61, label: "61%", indexLabel: "1" },
			{ y: 50, label: "50%", indexLabel: "Miami-Dade County" },
			{ y: 55, label: "55%", indexLabel: "Hempstead County" },
			{ y: 61, label: "61%", indexLabel: "Allegheny County" },
			{ y: 50, label: "50%", indexLabel: "Frederick County" },
			{ y: 55, label: "55%", indexLabel: "Harris County" },
		]
	}]
};

$("#chartContainer").CanvasJSChart(options);
}
