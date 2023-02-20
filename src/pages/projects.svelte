<script lang="ts">
  // STYLES
  import "./styles/projects.scss";

  // COMPONENTS
  import ProjectCard from "../components/project-card.svelte";

  // UTILS
  import { projects } from "../utils/projects";
</script>

<main id="projects">
  <p class="projects__title hide">Projects</p>
  <div class="projects__grid">
    {#each projects as project, i}
      <ProjectCard props={{ ...project, index: i }} />
    {/each}
  </div>
</main>
