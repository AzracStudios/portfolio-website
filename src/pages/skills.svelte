<script lang="ts">
  // STYLES
  import "./styles/skills.scss";

  // COMPONENTS
  import SkillCard from "../components/skill-card.svelte";

  // UTILS
  import { skills } from "../utils/skills";

  const handlePosChange = (e: MouseEvent) => {
    for (const _card of document.querySelectorAll("#skill-card")) {
      let card = _card as HTMLDivElement;

      const rect: DOMRect = card.getBoundingClientRect();
      const x: number = e.clientX - rect.left;
      const y: number = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
</script>

<main id="skills">
  <p class="skills__title hide">Skills</p>
  <div class="skills__grid" on:mousemove={(e) => handlePosChange(e)}>
    {#each skills as skill}
      <SkillCard title={skill.title} skills={skill.skills} logo={skill.logo} />
    {/each}
  </div>
</main>
