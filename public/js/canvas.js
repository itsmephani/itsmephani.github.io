(function () {
  var canvasElement = document.getElementById("canvas");
  canvasElement.width = innerWidth;
  canvasElement.height = innerHeight;
  var ctx = canvasElement.getContext("2d");
  var i = 1;
  // setInterval(function () {
  // ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  // ctx.beginPath();
  // ctx.moveTo(
  //   Math.random() * canvasElement.width,
  //   Math.random() * canvasElement.height
  // );
  // ctx.lineTo(
  //   Math.random() * canvasElement.width,
  //   Math.random() * canvasElement.height
  // );
  ctx.strokeStyle = settings.theme === "dark" ? "#fdfffc" : "#011627";
  ctx.strokeRect(20, 20, 10 * i, 5 * i);
  i++;
  // }, 100);
})();
