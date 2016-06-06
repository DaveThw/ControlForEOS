loadedInterfaceName = "TIME";

interfaceOrientation = "portrait";

control.timer = null;

control.getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

	if (minutes < 10)
		minutes = "0" + minutes;
	
	if (seconds < 10)
		seconds = "0" + seconds;
		
	timeLabel.setValue(hours + ":" + minutes + ":" + seconds);
	
	control.timer = setTimeout(control.getCurrentTime, 1000);
}

pages = [[
{
    "name": "refresh",
    "type": "Button",
    "x": .6, "y": .9,
    "width": .2, "height": .1,
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
},
{
    "name": "refreshLabel",
    "type": "Label",
    "x": .6, "y": .9,
    "width": .2, "height": .1,
    "isLocal": true,
    "value": "refresh",
},
{
    "name": "tabButton",
    "type": "Button",
    "x": .8, "y": .9,
    "width": .2, "height": .1,
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
},
{
    "name": "tabButtonLabel",
    "type": "Label",
    "x": .8, "y": .9,
    "width": .2, "height": .1,
    "mode": "contact",
    "isLocal": true,
    "value": "menu",
},
{
	"name": "timeLabel",
	"type": "Label",
	"x": 0, "y":0,
	"width":.5, "height": .5,
	"value":"time",
	"size":24,
	"oninit": "control.getCurrentTime()",
},

]

];
