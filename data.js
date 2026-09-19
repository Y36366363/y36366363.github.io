// Publications
const publications = [
  {
    title: "Evolving dynamics of tuberculosis and emerging HIV co-infection in China: Age-period-cohort analysis and projections to 2035",
    authors: "Yang Zhu, Wenxi Wang, Tinglong Chen, Ruiwen Liu, <b>Jialiang Yao</b>, Yuqi Cai, Vivian Y. Guo, Jing Gu, Yuantao Hao, Stuart Gilmour, Chun Hao, Jinghua Li",
    venue: "Journal of Infection and Public Health, 19(6), 103236, 2026",
    links: [
      {
        text: "Paper",
        url: "https://doi.org/10.1016/j.jiph.2026.103236"
      },
      {
        text: "PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/42092213/"
      }
    ],
    abstract: "This study applies age-period-cohort and Bayesian age-period-cohort models to analyze and project the burden of tuberculosis, drug-resistant tuberculosis, and HIV/TB co-infection in China.",
    citation: `<pre><code>@article{zhu2026evolving,
  title   = {Evolving dynamics of tuberculosis and emerging HIV co-infection in China: Age-period-cohort analysis and projections to 2035},
  author  = {Zhu, Yang and Wang, Wenxi and Chen, Tinglong and Liu, Ruiwen and Yao, Jialiang and Cai, Yuqi and Guo, Vivian Y. and Gu, Jing and Hao, Yuantao and Gilmour, Stuart and Hao, Chun and Li, Jinghua},
  journal = {Journal of Infection and Public Health},
  volume  = {19},
  number  = {6},
  pages   = {103236},
  year    = {2026},
  doi     = {10.1016/j.jiph.2026.103236}
}</code></pre>`,
    isNew: true,
    isPreprint: false,
    isSelected: true
  }
];

// Publication filters used by the website
const getPreprints = () =>
  publications.filter(publication => publication.isPreprint);

const getSelectedPreprints = () =>
  publications.filter(
    publication => publication.isPreprint && publication.isSelected
  );

const getPublications = () =>
  publications.filter(publication => !publication.isPreprint);

const getSelectedPublications = () =>
  publications.filter(
    publication => !publication.isPreprint && publication.isSelected
  );

const getAllPublications = () =>
  publications.filter(publication => !publication.isPreprint);

// Backward-compatible variables used by the template
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();


// Selected research and engineering projects
const projects = [
  {
    title: "C-Delta Simulation",
    category: "research",
    type: "Independent Methodological Research",
    status: "Manuscript development",
    role: "Independent researcher and developer",
    description: "A methodological research project studying robust-reference divergence profiles and statistical sensitivity analysis. The current work focuses on strengthening the experimental design, validating the methodology, and developing a reproducible manuscript pipeline.",
    github: "https://github.com/Y36366363/c_delta_simulation",
    homepage: "",
    badges: [
      {
        url: "https://github.com/Y36366363/c_delta_simulation/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/c_delta_simulation"
      }
    ],
    isSelected: true
  },

  {
    title: "Asymmetric Information Puzzles",
    category: "research",
    type: "Strategic AI Evaluation Platform",
    status: "Active research",
    role: "Independent researcher and developer",
    description: "An auditable research platform for evaluating strategic AI agents across heterogeneous imperfect-information games. The current work emphasizes decision quality, belief calibration, exploitability, robustness, and reproducible cross-game transfer experiments.",
    github: "https://github.com/Y36366363/Asymmetric_Information_Puzzles",
    homepage: "https://y36366363.github.io/Asymmetric_Information_Puzzles/",
    badges: [
      {
        url: "https://github.com/Y36366363/Asymmetric_Information_Puzzles/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Asymmetric_Information_Puzzles"
      }
    ],
    isSelected: true
  },

  {
    title: "Population Sandbox",
    category: "research",
    type: "Household and Demographic Simulation",
    status: "Research scoping",
    role: "Independent researcher and developer",
    description: "A household-level simulation project studying how housing conditions and childcare constraints may shape fertility-related decisions. The current phase focuses on narrowing assumptions, defining measurable outcomes, and building reproducible experiments rather than modeling an entire population system.",
    github: "https://github.com/Y36366363/Population_simu",
    homepage: "https://y36366363.github.io/Population_simu/",
    badges: [
      {
        url: "https://github.com/Y36366363/Population_simu/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Population_simu"
      }
    ],
    isSelected: true
  },

  {
    title: "Psycho Agent",
    category: "exploratory",
    type: "Safety-Bounded Human–AI Research Prototype",
    status: "Exploratory research",
    role: "Independent researcher and developer",
    description: "An exploratory system for studying safety-bounded human–AI support. The current evaluation uses a frozen synthetic dialogue study and explicitly separates engineering tests from evidence about human outcomes; professional review and interdisciplinary collaboration are still required.",
    github: "https://github.com/Y36366363/Psycho_Agent",
    homepage: "",
    badges: [
      {
        url: "https://github.com/Y36366363/Psycho_Agent/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Psycho_Agent"
      }
    ],
    isSelected: true
  },

  {
    title: "Mahjong Card Reader",
    category: "engineering",
    type: "Riichi Mahjong Engineering Project",
    status: "Engineering showcase",
    role: "Independent designer and developer",
    description: "A multilingual Riichi Mahjong engineering project combining formatted hand analysis, scoring, explainable heuristic opponents, seeded simulations, and desktop/browser interfaces. It demonstrates work in game logic, validation, reproducibility, interface design, and cross-platform development.",
    github: "https://github.com/Y36366363/Mahjong_card_reader",
    homepage: "https://y36366363.github.io/Mahjong_card_reader/",
    badges: [
      {
        url: "https://github.com/Y36366363/Mahjong_card_reader/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Mahjong_card_reader"
      }
    ],
    isSelected: true
  }，

    {
    title: "Shizhi Cooking Agent",
    category: "engineering",
    type: "Constraint-Aware Cooking Agent",
    status: "Engineering prototype",
    role: "Independent designer and developer",
    description: "A bilingual cooking assistant for induction-hob beginners that combines deterministic recipe retrieval and feasibility checks with optional language-model explanations. The public demo supports recipe browsing and pantry matching without exposing API keys or triggering external model costs.",
    github: "https://github.com/Y36366363/Cooking_Starter",
    homepage: "https://y36366363.github.io/Cooking_Starter/",
    badges: [
      {
        url: "https://github.com/Y36366363/Cooking_Starter/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Cooking_Starter"
      }
    ],
    isSelected: true
  }，
];

// Project filters used by the website
const getSelectedProjects = () =>
  projects.filter(project => project.isSelected);

const getAllProjects = () => projects;


// These sections will be completed after the core pages are stable.
const researchExperience = [];
const teaching = [];
const academicServices = [];
const talks = [];
const honors = [];
