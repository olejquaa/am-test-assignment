export const toggleContent = () => {
  console.log("run toggle");

  document.getElementById("toggle1").addEventListener("click", function () {
    document.getElementById("content1").classList.toggle("invisible");
  });

  document.getElementById("toggle2").addEventListener("click", function () {
    document.getElementById("content2").classList.toggle("invisible");
  });
  document.getElementById("toggle3").addEventListener("click", function () {
    document.getElementById("content3").classList.toggle("invisible");
  });
};
