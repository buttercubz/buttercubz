<script>
  import Home from "@/components/Home.svelte";
</script>

<Home name="Erick Sosa" nickname="(buttercubz)" />

<style>
  :global(::selection) {
    color: #ca9787;
    background-color: #8a817c;
  }

  :global(.text-highlight::selection) {
    color: #757474;
    background-color: #ca9787;
  }
</style>
