export const site = {
  name: "Kylian",
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
] as const;

export type Project = {
  tag: string;
  title: string;
  description: string;
  chips: string[];
};

export const projects: Project[] = [
  {
    tag: "C · Système",
    title: "minishell",
    description:
      "Un shell UNIX fonctionnel avec parsing, pipes, redirections et gestion des variables d'environnement.",
    chips: ["C", "POSIX", "Parsing"],
  },
  {
    tag: "C · OS",
    title: "philosophers",
    description:
      "Simulation du problème des philosophes avec threads, mutexes et gestion de la synchronisation.",
    chips: ["C", "Threads", "Mutex"],
  },
  {
    tag: "C++ · Graphics",
    title: "cub3D",
    description:
      "Moteur de raycasting à la Wolfenstein 3D — rendu en temps réel, textures, minimap.",
    chips: ["C++", "MiniLibX", "Raycasting"],
  },
  {
    tag: "Python · IA",
    title: "ft_linear_regression",
    description:
      "Implémentation from scratch d'une régression linéaire avec gradient descent et visualisation.",
    chips: ["Python", "ML", "NumPy"],
  },
  {
    tag: "C++ · Réseau",
    title: "ft_irc",
    description:
      "Serveur IRC complet gérant connexions multiples, canaux, modes utilisateurs et opérateurs.",
    chips: ["C++", "Sockets", "IRC"],
  },
  {
    tag: "Python · Théorie",
    title: "ft_turing",
    description:
      "Machine de Turing universelle — exécution de programmes arbitraires sur un ruban infini.",
    chips: ["Python", "Théorie", "Automate"],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Langages", items: ["C", "C++", "Python", "Bash", "JavaScript"] },
  { label: "Systèmes", items: ["Linux", "POSIX", "Docker", "Make", "GDB"] },
  { label: "IA / Data", items: ["PyTorch", "NumPy", "Pandas", "Sklearn"] },
  { label: "Outils", items: ["Git", "VSCode", "Vim", "GitHub"] },
];
