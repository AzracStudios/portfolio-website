<script lang="ts">
  import Home from "./pages/home.svelte";
  import About from "./pages/about.svelte";
  import Projects from "./pages/projects.svelte";
  import Contact from "./pages/contact.svelte";
  import Footer from "./pages/footer.svelte";
  import Loader from "./components/loader.svelte";
  import Skills from "./pages/skills.svelte";
  import Blob from "./components/blob.svelte";
  import Nav from "./components/nav.svelte";

  // UTILS
  import { DetectIntersection } from "./utils/aos";
</script>

<svelte:window on:load={() => DetectIntersection()} />

<main>
  <div class="anchor" />
  <Loader />
  <Nav />
  <Blob />
  <Home />
  <Skills />
  <Projects />
  <About />
  <Contact />
  <Footer />
</main>
