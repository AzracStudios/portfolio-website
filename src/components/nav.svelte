<script lang="ts">
  // STYLES
  import "./styles/nav.scss";

  // COMPONENTS
  import NavLink from "./navLink.svelte";

  // MOBILE NAVBAR
  $: navOpen = false;

  const handleClick: Function = (page: string) => {
    navOpen = false;

    let container: HTMLElement = document.querySelector(
      `#${page}`
    ) as HTMLElement;
    let topPos = container.offsetTop - nav.getBoundingClientRect().height;

    window.scrollTo({ top: topPos, behavior: "smooth" });
  };

  // STICKY NAVBAR
  let nav: HTMLElement;
  let lastScroll = 0;

  const handleScroll: Function = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove("nav__scroll-up");
    }

    if (
      currentScroll < lastScroll &&
      nav.classList.contains("nav__scroll-down")
    ) {
      nav.classList.remove("nav__scroll-down");
      nav.classList.add("nav__scroll-up");
    }

    if (
      currentScroll > lastScroll &&
      !nav.classList.contains("nav__scroll-down")
    ) {
      nav.classList.remove("nav__scroll-up");
      nav.classList.add("nav__scroll-down");
    }

    lastScroll = currentScroll;
  };
</script>

<svelte:window on:scroll={() => handleScroll()} />


<nav bind:this={nav}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    src="assets/icons/logo_filled.svg"
    alt="logo"
    class="nav__logo hide__on--load"
    on:click={() => handleClick("home")}
  />

  <div class="nav__wrapper">
    <ul class={navOpen ? "nav--open" : ""}>
      <NavLink page="about" {handleClick} />
      <NavLink page="skills" {handleClick} />
      <NavLink page="projects" {handleClick} />
      <NavLink page="contact" {handleClick} />
    </ul>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="nav__hamburger"
      on:click={() => {
        navOpen = !navOpen;
      }}
    >
      <div class="nav__hamburger--line" />
      <div class="nav__hamburger--line" />
      <div class="nav__hamburger--line" />
    </div>
  </div>
</nav>
