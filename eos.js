loadedInterfaceName = "EOS Remote Control";

interfaceOrientation = "portrait";

infoText = "My attempt to (re-)create the ETC a-RFR using Control, to control an Ion over OSC"

/******* Constants appear on all pages *******/

constants = [
  {
    "name": "page1Btn",
    "type": "Button",
    "bounds": [0,.9,.2,.1], 
    "label": "1",
    "mode": "contact",    
    "ontouchstart": "control.changePage(0);",
    "stroke": "#aaa",    
  },
  {
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.2,.9,.2,.1], 
    "label": "2",
    "mode": "contact",    
    "ontouchstart": "control.changePage(1);",
    "stroke": "#aaa",    
  },
  {
    "name": "page3Btn",
    "type": "Button",
    "bounds": [.4,.9,.2,.1], 
    "label": "3",
    "mode": "contact",
    "ontouchstart": "control.changePage(2);",
    "stroke": "#aaa",
  },
//****** You can also use previous / next buttons *******
/*
  {
    "name": "nextBtn",
    "type": "Button",
    "bounds": [0,.9,.2,.1], 
    "label": "<-",
    "mode": "contact",    
    "ontouchstart": "control.changePage('previous');",
    "stroke": "#aaa",    
  },
  {
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.2,.9,.2,.1], 
    "label": "->",
    "mode": "contact",    
    "ontouchstart": "control.changePage('next');",
    "stroke": "#aaa",    
  },
//********************************************************/
  {
    "name": "refresh",
    "type": "Button",
    "bounds": [.6, .9, .2, .1],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "refresh",
  },
  {
    "name": "tabButton",
    "type": "Button",
    "bounds": [.8, .9, .2, .1],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
  },
  {
    "name": "infoButton",
    "type": "Button",
    "bounds": [.4, .9, .2, .1],
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "isLocal": true,
    "ontouchstart": "control.changePage(1);",
  },
  {
    "name": "infoButtonLabel",
    "type": "Label",
    "bounds": [.4, .9, .2, .1],
    "color": "#fff",
    "value": "info",
  },
];

pages = [
/********** PAGE 1 *************/
[
  {
    "name":"page1Label",
    "type":"Label",
    "value":"PAGE 1",
    "size": "40",
    "bounds": [0,0,1,.5]
  }
],

/********** PAGE 2 *************/
[
  {
    "name":"page2Label",
    "type":"Label",
    "value":"PAGE 2",
    "size": "40",   
    "bounds": [0,0,1,.5]             
  }
],

/********** PAGE 3 *************/
[
  {
    "name":"page3Label",
    "type":"Label",
    "value":"PAGE 3",
    "size": "40",   
    "bounds": [0,0,1,.5]             
  }
],

/******** PAGE 4 - Info *********/
[
  {
    "name": "infoText",
    "type": "Label",
    "x": .1,
    "y": .1,
    "width": .8,
    "height": .7,
    "value": infoText,
    "verticalCenter": false,
    "align": "left",
  },
  {
    "name": "backButton",
    "type": "Button",
    "x": .8,
    "y": .9,
    "width": .19,
    "height": .09,
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "protocol": "local",
    "ontouchstart": "control.changePage(0);",
  },
  {
    "name": "infoButtonLabel",
    "type": "Label",
    "x": .8,
    "y": .9,
    "width": .19,
    "height": .09,
    "color": "#fff",
    "value": "back",
  },
],

];
