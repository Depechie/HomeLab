const MOD = ['ctrl', 'alt', 'cmd'];
const MOD_S = [...MOD, 'shift'];
let VERBOSE = false;
const HALF_CORRECTION = 6; // Fix padding issues for half screen windows

var scr = Screen.main().flippedVisibleFrame();

// Padding Values
var paddingTop = 28;
var paddingLeft = 8;
var paddingRight = 12;
var paddingBottom = 8;
var paddingCenter = 4;
var paddingMiddle = 15;

// Computed sizes
var halfWidth = ((scr.width - paddingLeft) - paddingRight) / 2;
var halfHeight = (((scr.height - paddingTop) - paddingBottom) / 2) + HALF_CORRECTION;
var thirdWidth = ((scr.width - paddingLeft) - paddingRight) / 3;

var halfWidthNoPadding = scr.width / 2;

var windowLocations = {
    full: {
        y: paddingTop,
        x: paddingLeft,
        width: scr.width - paddingRight,
        height: scr.height - paddingBottom
    },
    left: {
        y: paddingTop,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: scr.height - paddingBottom
    },
    right: {
        y: paddingTop,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: scr.height - paddingBottom
    },
    //Corners
    topRight: {
        y: paddingTop,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: halfHeight
    },
    bottomRight: {
        y: (halfHeight + paddingTop) + paddingMiddle,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: halfHeight
    },
    topLeft: {
        y: paddingTop,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: halfHeight
    },
    bottomLeft: {
        y: (halfHeight + paddingTop) + paddingMiddle,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: halfHeight
    },
    // Extra sizes
    rightTwoThirds: {
        y: paddingTop,
        x: (thirdWidth + paddingLeft) + paddingCenter,
        width: thirdWidth * 2,
        height: scr.height - paddingBottom
    },
    leftTwoThirds: {
        y: paddingTop,
        x: paddingLeft,
        width: (thirdWidth * 2) - paddingCenter,
        height: scr.height - paddingBottom
    },
    leftThird: {
        y: paddingTop,
        x: paddingLeft,
        width: thirdWidth - paddingCenter,
        height: scr.height - paddingBottom
    },
    rightThird: {
        y: paddingTop,
        x: ((thirdWidth * 2) + paddingLeft) + paddingCenter,
        width: thirdWidth,
        height: scr.height - paddingBottom
    },
    centerHalf: {
        y: paddingTop,
        x: thirdWidth / 2,
        width: thirdWidth * 2,
        height: scr.height - paddingBottom
    }
}