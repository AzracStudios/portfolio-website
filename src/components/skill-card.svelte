<script lang="ts">
  // STYLES
  import "./styles/skill-card.scss";
  
  // COMPONENTS

  export let title: string;
  export let skills: string[];
  export let logo: string;
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<section id="skill-card" class="hide">
  <div class="skill-card__border" />
  <div class="skill-card__content">
    <img class="skill-card__logo" src={`assets/icons/${logo}`} alt={title} />
    <p class="skill-card__title">{title}</p>
    <div class="skill-card__skills">
      {#each skills as skill, i}
        <p class="skill-card__sub">{skill}</p>
        {#if i < skills.length - 1}
          <span class="i">.</span>
        {/if}
      {/each}
    </div>
  </div>
</section>
