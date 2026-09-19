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
    slug: "philosophers",
    tag: "C · OS",
    title: "philosophers",
    description:
      "Simulation du problème des philosophes avec threads, mutexes et gestion de la synchronisation.",
    chips: ["C", "Threads", "Mutex"],
    summary:
      "Le problème du dîner des philosophes, résolu sans interblocage ni famine.",
    details: [
      "Plusieurs philosophes partagent une table et doivent alterner entre penser, manger et dormir. Chacun a besoin de deux fourchettes pour manger, et chaque fourchette est partagée avec un voisin : c'est le cas d'école de l'accès concurrent à une ressource limitée.",
      "Chaque philosophe tourne dans son propre thread, les fourchettes sont protégées par des mutexes, et un moniteur surveille en continu les temps de repas pour détecter une mort par inanition au bon moment.",
    ],
    highlights: [
      "Un thread par philosophe, fourchettes protégées par mutex",
      "Ordre de prise des fourchettes choisi pour éviter l'interblocage",
      "Surveillance des délais pour détecter la famine sans course critique",
    ],
  },
  {
    slug: "cub3d",
    tag: "C++ · Graphics",
    title: "cub3D",
    description:
      "Moteur de raycasting à la Wolfenstein 3D : rendu en temps réel, textures, minimap.",
    chips: ["C++", "MiniLibX", "Raycasting"],
    summary:
      "Un moteur de rendu 3D temps réel construit à partir d'une grille 2D.",
    details: [
      "Le principe du raycasting : pour chaque colonne de pixels à l'écran, on lance un rayon depuis la caméra et on calcule où il rencontre un mur. La distance obtenue donne la hauteur du mur à dessiner, ce qui suffit à reconstruire une scène en relief à partir d'un plan.",
      "La scène est décrite dans un fichier de configuration : disposition de la carte, textures des quatre orientations de murs, couleurs du sol et du plafond, position et direction de départ du joueur.",
    ],
    highlights: [
      "Rendu colonne par colonne, avec correction de la distorsion en bord d'écran",
      "Textures appliquées selon l'orientation du mur touché",
      "Déplacement et rotation fluides, avec détection des collisions",
    ],
  },
  {
    slug: "ft-linear-regression",
    tag: "Python · IA",
    title: "ft_linear_regression",
    description:
      "Implémentation from scratch d'une régression linéaire avec gradient descent et visualisation.",
    chips: ["Python", "ML", "NumPy"],
    summary:
      "Une régression linéaire écrite à la main, sans bibliothèque de machine learning.",
    details: [
      "Premier contact avec l'apprentissage automatique : prédire le prix d'une voiture à partir de son kilométrage. Le modèle est volontairement écrit de zéro, sans scikit-learn, pour que chaque étape du calcul reste visible.",
      "L'entraînement se fait par descente de gradient : on mesure l'erreur du modèle, on calcule dans quelle direction ajuster chaque paramètre, et on répète jusqu'à convergence. La visualisation de la droite et de la courbe d'erreur rend le processus concret.",
    ],
    highlights: [
      "Descente de gradient implémentée à la main, sans bibliothèque de ML",
      "Normalisation des données pour stabiliser la convergence",
      "Visualisation de la droite obtenue et de l'évolution de l'erreur",
    ],
  },
  {
    slug: "ft-irc",
    tag: "C++ · Réseau",
    title: "ft_irc",
    description:
      "Serveur IRC complet gérant connexions multiples, canaux, modes utilisateurs et opérateurs.",
    chips: ["C++", "Sockets", "IRC"],
    summary:
      "Un serveur IRC conforme au protocole, capable de tenir plusieurs clients à la fois.",
    details: [
      "Le serveur suit le protocole IRC et se connecte avec de vrais clients du commerce. Il gère l'authentification, les pseudos, les canaux, les messages privés, ainsi que les droits d'opérateur : invitation, expulsion, changement de sujet, modes de canal.",
      "Tout tourne sur un seul thread, autour d'un multiplexage d'entrées-sorties non bloquantes : une seule boucle surveille toutes les connexions et ne traite que celles qui ont quelque chose à dire. Un client lent ne bloque jamais les autres.",
    ],
    highlights: [
      "Boucle d'événements non bloquante, sans un thread par client",
      "Découpage des commandes reçues par morceaux, indépendant des limites TCP",
      "Canaux, modes, droits d'opérateur et messages privés",
    ],
  },
  {
    slug: "ft-turing",
    tag: "Python · Théorie",
    title: "ft_turing",
    description:
      "Machine de Turing universelle : exécution de programmes arbitraires sur un ruban infini.",
    chips: ["Python", "Théorie", "Automate"],
    summary:
      "Une machine de Turing qui exécute n'importe quelle machine décrite en entrée.",
    details: [
      "Une machine de Turing lit et écrit sur un ruban infini en se déplaçant case par case, en suivant une table de transitions. Aussi rudimentaire que cela paraisse, ce modèle définit ce qu'un ordinateur peut calculer.",
      "Le programme prend en entrée la description d'une machine (alphabet, états, transitions) et une bande initiale, puis l'exécute pas à pas. La machine simulée n'est donc pas codée en dur : elle est une donnée parmi d'autres.",
    ],
    highlights: [
      "Machines décrites en données, jamais codées en dur",
      "Validation de la description avant exécution, avec erreurs explicites",
      "Affichage du ruban à chaque étape pour suivre le calcul",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Langages", items: ["C", "C++", "Python", "Bash", "JavaScript"] },
  { label: "Systèmes", items: ["Linux", "POSIX", "Docker", "Make", "GDB"] },
  { label: "IA / Data", items: ["PyTorch", "NumPy", "Pandas", "Sklearn"] },
  { label: "Outils", items: ["Git", "VSCode", "Vim", "GitHub"] },
];
