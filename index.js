//pupils 

let pupils = document.getElementsByClassName("pupil");
console.log(pupils);

let pupilsArr = Array.from(pupils);


let pupilStartPoint = -100;
let pupilRange = 200;

  // mouse X position
      let mouseXStartPoint = 300;
      let mouseXEndPoint = window.innerWidth - 300;
      let currentXPosition = 0;
      let fracXValue = 0;

      // mouse Y position
      let mouseYEndPoint = window.innerHeight;
      let currentYPosition = 0;
      let fracYValue = 0;

      let mouseXRange = mouseXEndPoint - mouseXStartPoint;

      const mouseMove = (event) => {
        // ` x value = ${event.clientX} & Y value = ${event.clientY} `
        currentXPosition = event.clientX - mouseXStartPoint;
        fracXValue = currentXPosition / mouseXRange;
        console.log("X = " + fracXValue);

        currentYPosition = event.clientY;
        fracYValue = currentYPosition / mouseYEndPoint;
        console.log("Y = " + fracYValue);
      };

      window.addEventListener("mousemove", mouseMove);
