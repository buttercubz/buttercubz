<script>
  import { fade } from "svelte/transition";

  export let name;
  export let nickname;

  const data = {
    Socials: [
      { name: "Github", url: "https://github.com/buttercubz" },
      { name: "Instagram", url: "https://www.instagram.com/buttercubz" },
      { name: "Twitter", url: "https://twitter.com/buttercubz" },
      { name: "Team", url: "https://crewdevio.mod.land/team" },
    ],
    Langs: ["Javascript", "Typescript", "Golang", "Python", "Dart"],
    Frameworks: ["Express", "Oak", "React", "Vue", "Svelte", "Firebase"],
  };
</script>

<div class="header" transition:fade>
  <h1 class="title">Hi.</h1>
  <h3 class="name line anim-typewriter">
    My name is {name} <span class="nick-name">{nickname}.</span>
  </h3>

  <div class="description-div">
    <p class="description">
      I am a software developer with an interest in web development and with
      knowledge in

      {#each data.Langs as lang}
        <span class="text-highlight">
          {`${lang} `}
        </span>
      {/each}
      experience in frameworks

      {#each data.Frameworks as framework}
        <span class="text-highlight">
          {`${framework} `}
        </span>
      {/each}
      and enthusiastic and collaborative in the
      <span class="text-highlight">Deno Js</span> environment.
    </p>
  </div>

  <div class="contact-me">
    <div class="logo-card">
      {#each data.Socials as { name, url }}
        <a class="social" target="_blank" href={url} rel="noopener">
          {name}
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");

  .header {
    display: flex;
    margin: 5rem;
    flex-direction: column;
  }

  .title {
    color: #bcb8b1;
    font-size: 5rem;
  }

  .name {
    color: #bcb8b1;
    font-size: 2rem;
  }

  .nick-name {
    color: #8a817c;
  }

  .description-div {
    max-width: 900px;
  }

  .description {
    color: #8a817c;
    font-size: 1.5rem;
  }

  .text-highlight {
    color: #bcb8b1;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .contact-me {
    margin-top: 30px;
  }

  .social {
    color: #8a817c;
    text-decoration: none;
    font-weight: 500;
  }

  .social:hover {
    color: #ca9787;
    animation: ease-in 1s linear;
  }

  * {
    font-family: "Maven Pro", sans-serif;
    overflow-x: hidden;
  }

  .line {
    position: relative;
    top: 50%;
    width: 16em;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 180%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
  }

  .anim-typewriter {
    animation: typewriter 4s steps(43) 1s 1 normal both,
      blinkTextCursor 700ms steps(43) infinite normal;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 16.3em;
    }
  }

  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
</style>
