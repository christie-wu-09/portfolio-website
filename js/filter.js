//menu select
// const tags = {
//   fun: ["wagmi", "slyder-fest", "microbe-psychic"],
//   commercial: ["twitch", "wagmi"],
// };

const select = document.querySelector("#menuSelect");

select.addEventListener("change", (event) => {
  const userOption = event.target.value;
  const blocks = document.querySelectorAll(".menu-block");
  blocks.forEach((block) => {
    console.log(block.dataset.type);
    if (block.dataset.type !== userOption) {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });
});
