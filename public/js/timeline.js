(function () {
  var timelineIndex = 0;
  var workComponent = document.querySelector("#work");
  var timeline = document.querySelector(".timeline");

  workComponent.addEventListener("wheel", function () {
    console.log("here");
    timelineIndex++;
    timeline.style.transform = `translateX(-${timelineIndex * 100}%)`;
  });
})();
