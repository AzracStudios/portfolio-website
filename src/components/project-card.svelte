<script lang="ts">
  // STYLES
  import "./styles/project-card.scss";

  export let props: {
    name: string;
    description: string;
    image: string;
    stack: string[];
    github: string;
    external: string;
    index: number;
  };
</script>

<main
  id="project__card"
  class={`hide ${
    props.index % 2 == 0 ? "project__appear-left" : "project__appear-right"
  }`}
>
  <div class="project__head">
    <p class="project__sub">Featured</p>
    <p class="project__title">{props.name}</p>
  </div>

  <div class="project__wrapper">
    <img
      class="project__image"
      src={`assets/projects/${props.image}`}
      alt={props.name}
    />

    <div class="project__wrapper--right">
      <div class="project__desc">
        <p>{props.description}</p>
      </div>
      <div class="project__stack">
        {#each props.stack as stack, i}
          <p>{stack}</p>
          {#if i < props.stack.length - 1}
            <span class="project__i">.</span>
          {/if}
        {/each}
      </div>
      <div class="project__links">
        <a href={props.github}>
          <img
            class="project__links--img"
            src="assets/icons/github.svg"
            alt="github"
          />
        </a>
        <a href={props.external}>
          <img
            class="project__links--img"
            src="assets/icons/link.svg"
            alt="link"
          />
        </a>
      </div>
    </div>
  </div>
</main>
