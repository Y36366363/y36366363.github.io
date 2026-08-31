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
    type: "AI-Agent Evaluation Platform",
    status: "Active research",
    role: "Independent researcher and developer",
    description: "An auditable framework for evaluating strategic AI agents in games with asymmetric information. Rather than continually expanding the number of games, the current direction emphasizes stronger evaluation methodology, reproducibility, and analysis of agent behavior.",
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
    type: "Agent-Based Population Simulation",
    status: "Research scoping",
    role: "Independent researcher and developer",
    description: "An agent-based demographic simulation environment. The project is being narrowed from a broad population simulator toward specific, testable questions that can be evaluated with transparent assumptions and reproducible experiments.",
    github: "https://github.com/Y36366363/Population_simu",
    homepage: "",
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
    type: "Human–AI Interaction Research Prototype",
    status: "Exploratory prototype",
    role: "Independent researcher and developer",
    description: "A prototype for studying psychologically informed agent interaction. The project has long-term research potential but requires interdisciplinary collaboration, carefully designed evaluation, and domain-expert validation before stronger claims can be made.",
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
    type: "Computer Vision Engineering Project",
    status: "Engineering showcase",
    role: "Independent designer and developer",
    description: "An end-to-end multilingual Mahjong card-recognition application for browser and desktop use. The project demonstrates practical work across computer vision, interface design, deployment, and cross-platform application development.",
    github: "https://github.com/Y36366363/Mahjong_card_reader",
    homepage: "https://y36366363.github.io/Mahjong_card_reader/",
    badges: [
      {
        url: "https://github.com/Y36366363/Mahjong_card_reader/stargazers",
        img: "https://img.shields.io/github/stars/Y36366363/Mahjong_card_reader"
      }
    ],
    isSelected: true
  }
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
