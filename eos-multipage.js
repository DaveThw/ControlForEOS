loadedInterfaceName = "EOS Remote Control";

interfaceOrientation = "portrait";

infoText = "My attempt to (re-)create the ETC a-RFR using Control, to control an Ion over OSC";

/******* Constants appear on all pages *******/

constants = [
  {
    "name": "page1Btn",
    "type": "Button",
    "bounds": [0,.75,.2,.1],
    "label": "1",
    "mode": "contact",
    "ontouchstart": "control.changePage(0);",
    "stroke": "#aaa",
  },
  {
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.2,.75,.2,.1],
    "label": "2",
    "mode": "contact",
    "ontouchstart": "control.changePage(1);",
    "stroke": "#aaa",
  },
{
    "name": "page3Btn",
    "type": "Button",
    "bounds": [.4,.75,.2,.1],
    "label": "3",
    "mode": "contact",
    "ontouchstart": "control.changePage(2);",
    "stroke": "#aaa",
  },
//****** You can also use previous / next buttons *******
  {
    "name": "nextBtn",
    "type": "Button",
    "bounds": [.6,.75,.2,.1], 
    "label": "<-",
    "mode": "contact",    
    "ontouchstart": "control.changePage('previous');",
    "stroke": "#aaa",    
  },
  {
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.8,.75,.2,.1], 
    "label": "->",
    "mode": "contact",    
    "ontouchstart": "control.changePage('next');",
    "stroke": "#aaa",    
  },
//********************************************************/
  {
    "name": "refresh",
    "type": "Button",
    "bounds": [.6, .85, .2, .1],
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
    "bounds": [.8, .85, .2, .1],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
  },
  {
    "name": "infoButton",
    "type": "Button",
    "bounds": [.4, .85, .2, .1],
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "isLocal": true,
    "ontouchstart": "control.changePage(3);",
  },
  {
    "name": "infoButtonLabel",
    "type": "Label",
    "bounds": [.4, .85, .2, .1],
    "color": "#fff",
    "value": "info",
  },
];

/*
oscManager.delegate = {
  processOSC : function(oscAddress, typetags, args) {
    switch(oscAddress) {
/*
      case "/nextPage":
        control.changePage('next');
        break;
      case "/previousPage":
        control.changePage('previous');
        break;
      case "/changeToPage":
        control.changePage(args[0]);
        break;
*
      case "/eos/out/cmd":
        cmdText.changeValue(args[0]);
        break;
      case "/eos/out/user":
        userText.changeValue(args[0]);
        break;
/*
      case "/eos/out/active/chan":
        activeChanText.changeValue(args[0]);
        break;
      case "/eos/out/active/cue/text":
        activeCueText.changeValue(args[0]);
        break;
      case "/eos/out/pending/cue/text":
        pendingCueText.changeValue(args[0]);
        break;
/* **** *
      default:
        oscManager.processOSC(oscAddress, typetags, args);
        break;
    }
  }
}
*/

pages = [
/********** PAGE 1 *************/
[
  {
    "name":"page1Label",
    "type":"Label",
    "value":"PAGE 1",
    "size": "40",
    "bounds": [0,0,1,.1],
  },
  {
    "name":"userLabel",
    "type":"Label",
    "value":"User:",
    "bounds": [0,.1,.2,.1],
  },
/*
  {
    "name":"userText",
    "type":"Label",
    "value":"<User>",
    "bounds": [0.2,.105,.8,.09],
    "color": "#333333",
    "stroke": "#aaaaaa",
  },
  {
    "name":"cmdLabel",
    "type":"Label",
    "value":"Cmd:",
    "bounds": [0,.1,.2,.1],
  },
  {
    "name":"cmdText",
    "type":"Label",
    "value":"<cmd>",
    "bounds": [0.2,.105,.8,.09],
    "color": "#333333",
    "stroke": "#aaaaaa",
  },
*/
],

/********** PAGE 2 *************/
[
  {
    "name":"page2Label",
    "type":"Label",
    "value":"PAGE 2",
    "size": "40",
    "bounds": [0,0,1,.5],
  }
],

/********** PAGE 3 *************/
[
  {
    "name":"page3Label",
    "type":"Label",
    "value":"PAGE 3",
    "size": "40",
    "bounds": [0,0,1,.5],
  }
],

/******** PAGE 4 - Info *********/
[
  {
    "name": "bg",
    "type": "Label",
    "x": .0,
    "y": .0,
    "width": 1,
    "height": 1,
    "value": "",
    "backgroundColor": "rgba(0,0,0,1)",
  },
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
    "oninit": "infoText.fillDiv.style.zIndex = 10000",
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
    "oninit": "backButton.fillDiv.style.zIndex = 10000",
  },
  {
    "name": "backButtonLabel",
    "type": "Label",
    "x": .8,
    "y": .9,
    "width": .19,
    "height": .09,
    "color": "#fff",
    "value": "back",
    "oninit": "backButtonLabel.label.style.zIndex = 11001",
  },
],

];
