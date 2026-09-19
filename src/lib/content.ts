export const site = {
  /** Short form used as the wordmark in the hero, nav and footer. */
  name: "Kylian",
  fullName: "Kylian Mathurin",
  role: "Développeur système & IA",
  location: "Nice, France",
  email: "kylian.mathurin@gmail.com",
  github: "https://github.com/kylianmthr",
  githubLabel: "github.com/kylianmthr",
} as const;

export const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "42", label: "Projets complétés", wide: false },
  { value: "3+", label: "Années de code", wide: false },
  { value: "École 42", label: "Formation en cours · Nice", wide: true },
  { value: "Licence de maths", label: "L1 en cours", wide: true },
] as const;

export type ProjectLink = { href: string; label: string };

export type Project = {
  /** Used as the dialog's DOM id and as a stable React key. */
  slug: string;
  tag: string;
  title: string;
  /** Short line shown on the card. */
  description: string;
  chips: string[];
  /** Opening line of the detail panel. */
  summary: string;
  /** Body paragraphs of the detail panel. */
  details: string[];
  /** Bullet points of the detail panel. */
  highlights: string[];
  /** Optional outbound link shown at the bottom of the detail panel. */
  link?: ProjectLink;
  /** Pulls the card visually to the front of the grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "websparks",
    tag: "Agence · Web",
    title: "WebSparks",
    description:
      "Mon agence web : des sites sur mesure pour les commerces et artisans de Nice.",
    chips: ["Agence web", "Nice", "TPE / PME"],
    featured: true,
    summary:
      "Une agence web de proximité, pensée pour les petites entreprises niçoises.",
    details: [
      "WebSparks est l'agence web que j'ai fondée. L'objectif est simple : donner aux petites entreprises de Nice (commerces, artisans, indépendants) une présence en ligne qui leur ressemble, sans les budgets ni les délais des grosses structures.",
      "Beaucoup de ces entreprises n'ont pas de site, ou un site qui ne leur apporte rien. Je travaille en local, en direct avec le dirigeant, pour livrer quelque chose qu'il comprend et dont il garde la main.",
    ],
    highlights: [
      "Sites sur mesure, pensés pour convertir un visiteur en client",
      "Accompagnement en direct, sans intermédiaire ni jargon",
      "Approche locale : rendez-vous sur place, à Nice et alentours",
    ],
    link: { href: "https://websparks.app", label: "websparks.app" },
  },
  {
    slug: "plateforme-cours",
    tag: "Web · Produit",
    title: "Plateforme de cours",
    description:
      "Ma plateforme de cours en ligne, que je conçois et fais évoluer moi-même.",
    summary:
      "Publier mes cours sur ma propre plateforme plutôt que sur un service existant.",
    details: [
      "Plutôt que de déposer mes cours sur une plateforme tierce, j'ai construit la mienne. J'en garde la maîtrise complète : la structure des contenus, leur mise en ligne et la manière dont ils sont présentés.",
    ],
    highlights: [],
    chips: ["Web", "Projet personnel"],
    link: {
      href: "https://cours.kylianmthr.me",
      label: "cours.kylianmthr.me",
    },
  },
  {
    slug: "agent-smith",
    tag: "Python · Agents",
    title: "Agent Smith",
    description:
      "Un framework d'agents qui résout des tâches Python en autonomie, du raisonnement à l'exécution en sandbox.",
    chips: ["Python", "Agents", "MCP", "Sandbox"],
    summary:
      "Une boucle Pensée, Code, Observation, écrite sans framework d'orchestration.",
    details: [
      "Agent Smith dépasse la génération de code en un seul coup. Le modèle raisonne sur une tâche et écrit du Python, ce code est exécuté dans un sandbox isolé, et le résultat de cette exécution devient le contexte de l'itération suivante. La boucle tourne jusqu'à ce que le modèle appelle lui-même final_answer.",
      "Le même cœur d'agent alimente deux applications en ligne de commande : l'une résout des problèmes algorithmiques courts (MBPP), l'autre explore un dépôt réel, modifie des fichiers, lance les tests et renvoie un patch Git (SWE-bench). Projet réalisé en binôme dans le cadre du cursus 42.",
    ],
    highlights: [
      "Boucle d'agent écrite de zéro, sans framework d'orchestration externe",
      "Code généré exécuté dans un sandbox isolé, jamais dans le processus principal",
      "Outils exposés via MCP, en stdio comme en HTTP",
      "Chaque run produit un rapport : tokens, latences, relances, sorties brutes",
    ],
    link: {
      href: "https://github.com/kylianmthr/AgentSmith",
      label: "Voir sur GitHub",
    },
  },
  {
    slug: "rag-42",
    tag: "Python · RAG",
    title: "rag-42",
    description:
      "Un moteur de questions-réponses sur le dépôt vLLM : recherche hybride, reranking et réponses sourcées.",
    chips: ["Python", "ChromaDB", "BM25", "Qwen3"],
    summary:
      "Interroger en langage naturel le code et la documentation de vLLM, avec des réponses appuyées sur des sources.",
    details: [
      "Le système indexe le code Python et la documentation Markdown du dépôt vLLM, puis répond à des questions techniques en s'appuyant uniquement sur ce qu'il a retrouvé. Le découpage s'adapte à la nature du contenu : par blocs logiques pour le code, par titres et paragraphes pour la documentation.",
      "La recherche combine deux approches complémentaires. Le lexical (BM25) retrouve les noms de fonctions et les identifiants exacts, le vectoriel capte le sens d'une question même quand les mots ne correspondent pas. Un cross-encoder reclasse ensuite les résultats pour ne transmettre au modèle que le contexte le plus pertinent.",
    ],
    highlights: [
      "Double index : BM25 pour le lexical, ChromaDB pour le vectoriel",
      "Reranking par cross-encoder avant transmission du contexte au modèle",
      "Recall@5 de 83 % sur la documentation et 63 % sur le code",
      "Indexation complète du dépôt en 3 à 4 minutes 30",
    ],
    link: {
      href: "https://github.com/kylianmthr/rag-42",
      label: "Voir sur GitHub",
    },
  },
  {
    slug: "callmemaybe",
    tag: "Python · LLM",
    title: "Call Me Maybe",
    description:
      "Traduit une phrase en appel de fonction structuré, avec un JSON valide garanti par décodage contraint.",
    chips: ["Python", "Décodage contraint", "Pydantic"],
    summary:
      "Du langage naturel vers un appel de fonction exécutable, sans jamais produire de JSON invalide.",
    details: [
      "Un modèle de langage produit du texte libre, donc parfois du JSON cassé. Ici la structure n'est pas espérée, elle est imposée : un automate détermine à chaque étape quels caractères sont syntaxiquement admissibles, et les tokens qui violeraient cette structure voient leur probabilité ramenée à zéro avant le tirage.",
      "Le modèle ne peut donc littéralement pas sortir du format attendu. C'est ce qui permet d'obtenir une fiabilité de production avec un modèle de 0,6 milliard de paramètres, là où l'approche naïve demanderait un modèle bien plus lourd.",
    ],
    highlights: [
      "Automate qui restreint, à chaque étape, les tokens syntaxiquement valides",
      "Masquage des logits : les tokens invalides sont écartés avant le tirage",
      "100 % de sorties JSON valides, par construction",
      "Plus de 90 % de précision sur le choix de la fonction et de ses arguments",
    ],
    link: {
      href: "https://github.com/kylianmthr/callmemaybe",
      label: "Voir sur GitHub",
    },
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Langages", items: ["C", "Rust", "Python"] },
  {
    label: "Systèmes",
    items: ["Linux", "macOS", "POSIX", "Docker", "Make", "GDB"],
  },
  {
    label: "IA / Data",
    items: ["PyTorch", "NumPy", "Pandas", "Sklearn", "Pydantic"],
  },
  { label: "Outils", items: ["Git", "Vim / Neovim", "VSCode", "GitHub"] },
];
