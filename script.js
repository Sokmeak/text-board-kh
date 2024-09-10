/**
 * @ type HTMLCavasElement
 */

function updateSpeedValue() {
  const speed = document.getElementById("speed").value;
  document.getElementById("speedValue").innerText = speed;
}

// Optionally, set an initial value on page load
document.addEventListener("DOMContentLoaded", () => {
  updateSpeedValue();
});

// declare variables

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.querySelector("button");
  const content = document.querySelector("#content");

  var canvas = document.createElement("canvas");
  canvas.id = "c";
  var body = document.getElementsByTagName("body");

  generateButton.addEventListener("click", function () {
    let myfont = document.getElementById("font-selector").value;

    if (myfont === "Jacquard") {
      myfont = "'Jacquard 12', system-ui";
    } else if (myfont === "Sevillana") {
      myfont = "'Sevillana', cursive";
    } else if (myfont === "danfo") {
      myfont = "'Danfo', cursive";
    } else if (myfont === "jersey25") {
      myfont = "'Jersey 25 Charted', cursive";
    } else if (myfont === "pacifico") {
      myfont = "'Pacifico', cursive";
    }
    if (myfont === "poetsen-one") {
      myfont = "'Poetsen One', sans-serif";
    } else if (myfont === "dancing-script") {
      myfont = "'Dancing Script', cursive";
    } else if (myfont === "lobster") {
      myfont = "'Lobster', cursive";
    } else if (myfont === "audiowide") {
      myfont = "'Audiowide', cursive";
    } else if (myfont === "jersey-15") {
      myfont = "'Jersey 15', cursive";
    } else if (myfont === "rubik-moonrocks") {
      myfont = "'Rubik Moonrocks', cursive";
    } else if (myfont === "workbench") {
      myfont = "'Workbench', cursive";
    }
    content.style.display = "none";
    const myText = document.getElementById("inputText").value;
    // var canvas = document.getElementById("c");
    document.body.appendChild(canvas);

    const textColor = document.getElementById("textColorPicker").value;
    const frame = document.getElementById("frame-selector").value;
    const frameColorSelected = document.getElementById(
      "frame-color-selector"
    ).value;
    const fontSize = document.getElementById("fontSize-selector").value;
    let backGround = document.getElementById("backgroundColorPicker").value;

    var myFramecolor = "";

    if (frameColorSelected == "Gold") {
      myFramecolor = "#fac123";
    } else if (frameColorSelected == "Silvar") {
      myFramecolor = "#C0C0C0";
    } else if (frameColorSelected == "Nature") {
      myFramecolor = "#2ECA52";
    }
    // const myFramecolor = "#edb005";
    canvas.style.border = `10px ${frame} ${myFramecolor}`;
    canvas.style.background = backGround;
    canvas.width = window.innerWidth - 20;
    console.log(canvas.width);
    canvas.height = window.innerHeight - 20;

    // for display

    var ctx = canvas.getContext("2d");

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    let w = canvas.width;
    let h = canvas.height;
    ctx.font = `bold ${fontSize}px ${myfont}`;

    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    // ctx.font = "bold 40px serif "
    // ctx.fillText(myText, w / 2, h / 2);

    let xPos = w; // Start position of the text (right edge of the canvas)
    var speed = parseInt(document.getElementById("speed").value, 10); // Get the speed value
    speed = speed * 2;

    function draw() {
      ctx.clearRect(0, 0, w, h); // Clear the canvas
      ctx.fillText(myText, xPos, h / 2); // Draw the text

      ctx.fillStyle = textColor;
      ctx.fillText(myText, xPos, h / 2); // Draw the text

      xPos -= speed;

      if (xPos + ctx.measureText(myText).width < 0) {
        xPos = w; // Reset position when the text goes off-screen
      }
      requestAnimationFrame(draw); // Request the next frame
    }

    draw(); // Start the animation
  });

  document.addEventListener("dblclick", function () {
    document.body.removeChild(canvas);
    content.style.display = "flex";
    canvas.style.background = ""; // clear color back ground
  });
});
