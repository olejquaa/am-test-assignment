export const changeTextOnClick = () => {
  const btn = document.getElementById("button__more-info");
  btn.addEventListener("click", function () {
    btn.innerHTML =
      btn.innerHTML === "Hide info"
        ? (btn.innerHTML = "More info")
        : (btn.innerHTML = "Hide info");
  });
};
