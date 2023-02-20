<script lang="ts">
  export let page: string;
  export let handleClick: Function;
</script>

<li class="hide__on--load">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={() => {
      handleClick(page);
    }}
  >
    .
    <span class="navlink__b">{page}</span>
    <span class="navlink__y">()</span>
  </div>
</li>
