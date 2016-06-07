loadedInterfaceName = "EOS Remote Control";

interfaceOrientation = "portrait";

pages = [
/********** PAGE 0 *************/
[
  {
    "name":"userLabel",
    "type":"Label",
    "value":"User:",
    "bounds": [0,.1,.2,.1],
  },
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

/* *** Bottom buttons *** */
  {
    "name": "refresh",
    "type": "Button",
    "bounds": [.61, .86, .18, .08],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "refresh",
  },
  {
    "name": "menuButton",
    "type": "Button",
    "bounds": [.81, .86, .18, .08],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
  },
]

];
