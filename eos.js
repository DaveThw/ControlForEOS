loadedInterfaceName = "EOS Remote Control";

interfaceOrientation = "portrait";

pages = [
/********** PAGE 0 *************/
[
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
    "bounds": [.61, .86, .18, .08],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
  },
]

];
