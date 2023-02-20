export let projects = [
  {
    name: "Physics Engine",
    description:
      "A simple physics engine built with python. It uses the “Verlet Integration” algorithm to achieve a result that is close to realistic physics",
    image: "verlet.png",
    stack: ["Python", "Pygame"],
    github: "https://www.github.com/AzracStudios/verlet-integration-simulation",
    external:
      "https://www.github.com/AzracStudios/verlet-integration-simulation",
  },

  {
    name: "Sudoku Solver",
    description:
      "An app that can run both in text and gui mode, that solves valid sudoku puzzles using the backtracking algorithm. ",
    image: "sudoku.png",
    stack: ["Python", "Pygame"],
    github: "https://www.github.com/AzracStudios/sudoku-solver",
    external: "https://www.github.com/AzracStudios/sudoku-solver",
  },

  {
    name: "A* Path Finder",
    description:
      "A path finder that visualizes the A* algorithm. It also includes a “maze” generator that uses a variation of the Prim's algorithm, to generate cave like structures.",
    image: "path.png",
    stack: ["Python", "Pygame"],
    github: "https://www.github.com/AzracStudios/a-star",
    external: "https://www.github.com/AzracStudios/a-star",
  },

  {
    name: "Tee Vista",
    description:
      "A mock e-commerce store, with a custom built database framework for the backend. It does not include a payment gateway, but has all the other basic features such as order tracking and a cart. Built as a 'no-js, no-sql' challenge",
    image: "tee-vista.png",
    stack: ["Python", "Flask", "HTML 5", "CSS", "Figma"],
    github: "https://www.github.com/AzracStudios/tee-vista",
    external: "https://www.github.com/AzracStudios/tee-vista",
  },

  {
    name: "Conway's Game Of Life",
    description:
      "A simulator that runs the game of life algorithm, proposed by British mathematician John Conway. Randomly generate worlds and watch them unfold",
    image: "conway.png",
    stack: ["HTML 5", "SCSS", "Javascript"],
    github: "https://www.github.com/AzracStudios/game-of-life",
    external: "https://simple-game-of-life.netlify.app/",
  },

  {
    name: "Sorto",
    description:
      "An algorithm visualizer, that sorts randomly generated numbers using various popular sorting algorithms",
    image: "sorto.png",
    stack: ["React", "SCSS", "Javascript"],
    github: "https://github.com/AzracStudios/sorting-visualizer",
    external: "https://sorto.netlify.app/",
  },

  {
    name: "My Portfolio",
    description:
      "The website that you currently are on! Designed with inspiration taken from the most elegant developer portfolios on the internet",
    image: "portfolio.png",
    stack: ["Svelte", "SCSS", "Typescript", "Figma"],
    github: "https://github.com/AzracStudios/portfolio-website/tree/new",
    external: "https://adarshravikumar.netlify.app",
  },
];
