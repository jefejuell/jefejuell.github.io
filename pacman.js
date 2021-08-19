var pos = 0;              // pos is the PacMan image position variable- it is set to 0 initially
let pageWidth = window.innerWidth;              //pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
const pacArray = [                              //This array contains all the PacMan movement images
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

var direction = 0;  // this variable defines what direction should PacMan go into:    0 = left to right;  1 = right to left (reverse)
var focus = 0;          // This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
setInterval(Run, 200);   // This function will call the Run() function above every 200 milliseconds. 

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  
    if (direction == 0 && pos >= pageWidth - imgWidth) {
        direction = 1;
    }
    
    if (direction == 1 && pos < 0) {
        direction = 0;
    }
  return direction;
}

//Please do not change
module.exports = checkPageBounds;
