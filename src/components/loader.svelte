<script lang="ts">
  // STYLES
  import "./styles/loader.scss";

  let canScroll = false;

  let load = () => {
    document.querySelector(".anchor").scrollIntoView();
    document.body.style.overflow = "hidden";

    let t = setTimeout(() => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
      document.querySelector("html").style.overflowX = "hidden";
      document.querySelector("html").style.overflowY = "scroll";

      document.querySelectorAll(".hide__on--load").forEach((el) => {
        el.classList.remove("hide__on--load");
        el.classList.add("show");
      });

      document.querySelector("nav").classList.remove("hide__on--load");
      document.querySelector("nav").classList.add("show");
    }, 3800);
  };
</script>

<svelte:window on:load={load} />

<main id="loader">
  <svg
    id="loader__logo"
    width="193"
    height="126"
    viewBox="0 0 193 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="loader__logo--path1"
      d="M47.5 2L2 124H21.5L30.5 102H82L90.5 124H112V75.5H147L170.5 123.5H191L166 71C170 68.5 183.5 63 181.5 32.5C179.929 8.53813 162 2 150 2H92.5V77.5L64 2H47.5Z"
      stroke="white"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <path
      id="loader__logo--path2"
      d="M77 86H35.5L56.5 27L77 86Z"
      stroke="white"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <path
      id="loader__logo--path3"
      d="M111 59.5V17.5L135.5 17.5C153.507 17.5 155.5 18 158.5 22.5C161.5 27 162.5 34 162 46.5C161.66 55 151 59.5 145.5 59.5H111Z"
      stroke="white"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
</main>
