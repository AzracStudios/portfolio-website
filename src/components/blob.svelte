<script lang="ts">
  // STYLES
  import "./styles/blob.scss";


  const handlePosChange = (e: MouseEvent) => {
    let blob: HTMLDivElement = document.querySelector(".blob__blob");

    blob.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 1000, fill: "forwards" }
    );
  };

  const setPosOnLoad: Function = () => {
    let blob: HTMLDivElement = document.querySelector(".blob__blob");
    blob.style.setProperty("--mouse-x", `50%`);
    blob.style.setProperty("--mouse-y", `50%`);
  };
</script>

<svelte:window
  on:load={() => setPosOnLoad()}
  on:mousemove={(e) => handlePosChange(e)}
/>

<section id="blob">
  <div class="blob__blob" />
  <div class="blob__blur" />
</section>
