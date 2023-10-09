export const toggleTableRow = () => {
  console.log("run toggle table row");

  document.getElementById("row1").addEventListener("click", function () {
    document.getElementById("hidden-row1").classList.toggle("invisible");
  });
  document.getElementById("row2").addEventListener("click", function () {
    document.getElementById("hidden-row2").classList.toggle("invisible");
  });
  document.getElementById("row3").addEventListener("click", function () {
    document.getElementById("hidden-row3").classList.toggle("invisible");
  });
  document.getElementById("row4").addEventListener("click", function () {
    document.getElementById("hidden-row4").classList.toggle("invisible");
  });
  document.getElementById("row5").addEventListener("click", function () {
    document.getElementById("hidden-row5").classList.toggle("invisible");
  });
  document.getElementById("row6").addEventListener("click", function () {
    document.getElementById("hidden-row6").classList.toggle("invisible");
  });
};
