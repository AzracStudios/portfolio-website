<script lang="ts">
  // STYLES
  import "./styles/home.scss";

  const handleClick: Function = () => {
    let container = document.querySelector("#contact");
    let topPos = container.getBoundingClientRect().top;

    window.scrollTo({ top: topPos - 50, behavior: "smooth" });
  };
</script>

<main id="home">
  <section id="hero">
    <div class="hero__text">
      <p class="hero__sub hide__on--load">
        <span class="block" />
        Hello world! I am
      </p>
      <div class="hero__name">
        {#each "Adarsh Ravikumar" as letter}
          <span class="hero__name--letter hide__on--load">{letter}</span>
        {/each}
      </div>
      <p class="hero__sub--large hide__on--load">
        <span class="block" />
        Full-stack developer
      </p>
    </div>

    <button class="hide__on--load" on:click={() => handleClick()}>Say Hello!</button>
  </section>

  <div class="home__scroll-prompt">
    <img src="assets/icons/down_arrow.svg" alt="down" />
  </div>
</main>
