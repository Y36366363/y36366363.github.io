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
    description: "Independent methodological research on robust-reference divergence profiles and statistical sensitivity analysis. The experimental framework and manuscript are under development. (<a href=\"https://github.com/Y36366363/c_delta_simulation\" target=\"_blank\" rel=\"noopener\">GitHub repository</a>)",
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
    description: "An auditable framework for evaluating strategic AI agents in games with asymmetric information. (<a href=\"https://github.com/Y36366363/Asymmetric_Information_Puzzles\" target=\"_blank\" rel=\"noopener\">GitHub repository</a>)",
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
    description: "An agent-based demographic simulation environment for studying focused and testable population questions. (<a href=\"https://github.com/Y36366363/Population_simu\" target=\"_blank\" rel=\"noopener\">GitHub repository</a>)",
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
    description: "An exploratory prototype for psychologically informed agent interaction, intended for future interdisciplinary collaboration and systematic validation. (<a href=\"https://github.com/Y36366363/Psycho_Agent\" target=\"_blank\" rel=\"noopener\">GitHub repository</a>)",
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
    description: "An end-to-end multilingual Mahjong card-recognition application designed for browser and desktop use. (<a href=\"https://github.com/Y36366363/Mahjong_card_reader\" target=\"_blank\" rel=\"noopener\">GitHub repository</a>)",
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
