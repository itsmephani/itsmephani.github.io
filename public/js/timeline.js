(function () {
  var BACKWARD = [37, 40];
  var FORWARD = [32, 38, 39]; // space, up, right arrows.

  var timelineIndex = 0;
  var currentPointIndicator = document.querySelector(
    ".timeline-overview__point-indicator"
  );
  var workComponent = document.querySelector("#work");
  var timeline = document.querySelector(".timeline");
  // We need to translate only from 2nd child. First child is 0%
  // 0, -100, -200, -300, -400, -500 etc.
  var timelinePoints = timeline.childElementCount - 1;
  var goToPoint = function () {
    timeline.style.transform = `translateX(-${timelineIndex * 100}%)`;
  };

  var setIndicator = function (currentPoint) {
    if (!currentPoint) {
      currentPoint = document.querySelectorAll(".timeline-overview__point")[
        timelineIndex
      ];
    }
    document
      .querySelector(".timeline-overview__point.selected")
      .classList.remove("selected");
    currentPoint.classList.add("selected");
    // - 8 to align element center
    var left = currentPoint.getBoundingClientRect().x - 8;
    currentPointIndicator.style.transform = `translateX(${left}px)`;
  };

  workComponent.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      timelineIndex >= timelinePoints ? timelinePoints : timelineIndex++;
    } else if (event.deltaY > 0) {
      timelineIndex <= 0 ? 0 : timelineIndex--;
    }

    goToPoint();
    setIndicator();
  });

  workComponent.addEventListener("keydown", function (event) {
    var code = event.which || event.keyCode;
    if (FORWARD.includes(code)) {
      timelineIndex >= timelinePoints ? timelinePoints : timelineIndex++;
    } else if (BACKWARD.includes(code)) {
      timelineIndex <= 0 ? 0 : timelineIndex--;
    }

    goToPoint();
    setIndicator();
  });

  document
    .querySelectorAll(".timeline-overview__point")
    .forEach(function (point) {
      point.addEventListener("click", function (event) {
        timelineIndex = event.target.dataset.index;
        goToPoint();
        setIndicator(event.target);
      });
    });
})();
