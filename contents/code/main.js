var locationsArray = {
  upLeft:[
    [3, 2, 0, 0, 1, 1],
    [2, 2, 0, 0, 1, 1],
    [4, 2, 0, 0, 1, 1],
    [3, 2, 0, 0, 2, 1],
    [6, 2, 0, 0, 1, 1]
  ],
  upRight:[
    [3, 2, 2, 0, 1, 1],
    [2, 2, 1, 0, 1, 1],
    [4, 2, 3, 0, 1, 1],
    [3, 2, 1, 0, 2, 1],
    [6, 2, 5, 0, 1, 1],
  ],
  downLeft:[
    [3, 2, 2, 0, 1, 1],
    [2, 2, 1, 0, 1, 1],
    [4, 2, 3, 0, 1, 1],
    [3, 2, 1, 0, 2, 1],
    [6, 2, 5, 0, 1, 1]
  ],
  downRight:[
    [3, 2, 2, 1, 1, 1],
    [2, 2, 1, 1, 1, 1],
    [4, 2, 3, 1, 1, 1],
    [3, 2, 1, 1, 2, 1],
    [6, 2, 5, 1, 1, 1]
  ],
  leftHeight:[
    [3, 1, 0, 0, 1, 1],
    [2, 1, 0, 0, 1, 1],
    [4, 1, 0, 0, 1, 1],
    [3, 1, 0, 0, 2, 1],
    [6, 1, 0, 0, 1, 1]
  ],
  rightHeight:[
    [3, 1, 2, 0, 1, 1],
    [2, 1, 1, 0, 1, 1],
    [4, 1, 3, 0, 1, 1],
    [3, 1, 1, 0, 2, 1],
    [6, 1, 5, 0, 1, 1]
  ],
  upCenter:[
    [3, 2, 1, 0, 1, 1],
    [1, 2, 0, 0, 1, 1],
    [4, 2, 1, 0, 2, 1],
    [1, 2, 0, 0, 1, 1],
    [6, 2, 1, 0, 4, 1],
  ],
  downCenter:[
    [3, 2, 1, 1, 1, 1],
    [1, 2, 0, 1, 1, 1],
    [4, 2, 1, 1, 2, 1],
    [1, 2, 0, 1, 1, 1],
    [6, 2, 1, 1, 4, 1]
  ],
  centerHeight:[
    [3, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 1],
    [4, 1, 1, 0, 2, 1],
    [1, 1, 0, 0, 1, 1],
    [6, 1, 1, 0, 4, 1],
  ]
};

function newSlotPosition(workspace, client, action) {
  numberXslots = action[0];
  numberYslots = action[1];
  x = action[2];
  y = action[3];
  xSlotToFill = action[4];
  ySlotToFill = action[5];

  var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
  var width;
  if (x == numberXslots) {
    width = Math.floor(maxArea.width / numberXslots);
  } else {
    width = Math.ceil(maxArea.width / numberXslots);
  }

  var height;
  if (y == numberYslots) {
    height = Math.floor(maxArea.height / numberYslots);
  } else {
    height = Math.ceil(maxArea.height / numberYslots);
  }

  var newX = maxArea.x + width * x;
  var newY = maxArea.y + height * y;
  // print(x)
  // print(y)
  // print(width)
  // print(height)
  return {
    x: newX,
    y: newY,
    width: width * xSlotToFill,
    height: height * ySlotToFill
  };
}

var previousClient;
var previousAction;
var previousStep = 0;
function move(workspace, action){
  var client = workspace.activeClient;
  if (client.moveable) {
    if (client !== previousClient || previousAction !== action) {
      previousStep = 0;
    } else {
      previousStep++;
    }
    tmp = figureNewAction(workspace, client, action);
    newGeometry = newSlotPosition(workspace, client,  tmp);

    client.geometry = newGeometry;
  }
  previousClient = client;
  previousAction = action;
}


function figureNewAction(workspace, client, action) {
  if ( locationsArray["upLeft"].length == previousStep) {
    previousStep = 0;
  }
  newAction = locationsArray[action][previousStep];
  return newAction;
}

function center(workspace) {
  var client = workspace.activeClient;
  if (client.moveable) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var newX = maxArea.x + ((maxArea.width - client.width) / 2);
    var newY = maxArea.y + ((maxArea.height - client.height) / 2);
    client.geometry = {
      x: newX,
      y: newY,
      width: client.width,
      height: client.width
    };
  }
}




// GRID 3x2
registerShortcut("MoveWindowToUpLeft3x2", "UltrawideWindows: Move Window to up-left (3x2)", "Meta+Num+7", function () {
    print(7)
    move(workspace, "upLeft")
});

registerShortcut("MoveWindowToUpCenter3x2", "UltrawideWindows: Move Window to up-center (3x2)", "Meta+Num+8", function () {
    move(workspace, "upCenter")
});

registerShortcut("MoveWindowToUpRight3x2", "UltrawideWindows: Move Window to up-right (3x2)", "Meta+Num+9", function () {
    move(workspace, "upRight")
});

registerShortcut("MoveWindowToDownLeft3x2", "UltrawideWindows: Move Window to down-left (3x2)", "Meta+Num+1", function () {
    move(workspace, "downLeft")
});

registerShortcut("MoveWindowToDownCenter3x2", "UltrawideWindows: Move Window to down-center (3x2)", "Meta+Num+2", function () {
    move(workspace, "downCenter")
});

registerShortcut("MoveWindowToDownRight3x2", "UltrawideWindows: Move Window to down-right (3x2)", "Meta+Num+3", function () {
    move(workspace, "downRight")
});

registerShortcut("MoveWindowToLeftHeight3x2", "UltrawideWindows: Move Window to left-height (3x2)", "Meta+Num+4", function () {
    move(workspace, "leftHeight")
});

registerShortcut("MoveWindowToCenterHeight3x2", "UltrawideWindows: Move Window to center-height (3x2)", "Meta+Num+5", function () {
    move(workspace, "centerHeight")
});

registerShortcut("MoveWindowToRightHeight3x2", "UltrawideWindows: Move Window to right-height (3x2)", "Meta+Num+6", function () {
    move(workspace, "rightHeight")
});
