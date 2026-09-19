# Kylian — Portfolio

Portfolio personnel construit avec **Next.js 16** (App Router), **Tailwind CSS 4**
et **TypeScript**. Le formulaire de contact envoie les messages par email via
**Resend**.

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseignez vos clés
npm run dev
```

Le site est servi sur http://localhost:3000.

## Configuration du formulaire de contact (Resend)

Le formulaire passe par une **Server Action** (`src/app/actions.ts`) : la clé API
reste côté serveur et n'est jamais exposée au navigateur.

Trois variables d'environnement, à placer dans `.env.local` :

| Variable             | Rôle                                                          |
| -------------------- | ------------------------------------------------------------- |
| `RESEND_API_KEY`     | Clé API créée sur https://resend.com/api-keys                  |
| `CONTACT_TO_EMAIL`   | Adresse qui reçoit les messages                                |
| `CONTACT_FROM_EMAIL` | Expéditeur — son domaine doit être vérifié dans Resend         |

Pour `CONTACT_FROM_EMAIL`, `onboarding@resend.dev` fonctionne sans vérification
de domaine et convient pour tester. En production, vérifiez votre domaine dans
Resend puis utilisez une adresse de ce domaine, par exemple
`Portfolio <contact@votre-domaine.fr>`.

Si `RESEND_API_KEY` ou `CONTACT_TO_EMAIL` est absente, le site fonctionne
normalement et le formulaire affiche un message invitant à écrire directement
par email — aucune erreur n'est renvoyée au visiteur.

Le champ `Reply-To` de l'email est celui du visiteur : répondre à l'email reçu
répond directement à la personne.

## Scripts

| Commande        | Effet                                    |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Serveur de développement                 |
| `npm run build` | Build de production                      |
| `npm start`     | Sert le build de production              |
| `npm run lint`  | ESLint                                   |

## Structure

```
src/
├── app/
│   ├── actions.ts       # Server Action : validation + envoi via Resend
│   ├── globals.css      # Thème Tailwind, animations, classes de composants
│   ├── layout.tsx       # Polices (Syne, Plus Jakarta Sans) et métadonnées
│   └── page.tsx         # Assemblage des sections
├── components/
│   ├── sections/        # Hero, About, Projects, Skills, Contact, Footer
│   ├── ContactForm.tsx  # Formulaire (client) avec états d'envoi
│   ├── HeroCanvas.tsx   # Constellation de particules du hero
│   ├── Navbar.tsx       # Pilule de navigation avec cadre glissant
│   ├── AmbientOrbs.tsx  # Halos d'arrière-plan
│   └── RevealObserver.tsx # Apparition des sections au défilement
└── lib/
    ├── content.ts       # Contenu du site (projets, compétences, stats)
    ├── contact.ts       # Règles de validation partagées
    └── email-template.ts # Rendu HTML + texte de l'email
```

Le contenu éditorial (projets, compétences, statistiques, liens) est centralisé
dans `src/lib/content.ts` : c'est le seul fichier à modifier pour mettre le
portfolio à jour.

## Anti-spam

Le formulaire inclut un champ piège (*honeypot*) invisible : s'il est rempli, la
requête est ignorée silencieusement et aucun email n'est envoyé.

## Accessibilité

La maquette utilise volontairement des textes très sombres sur fond noir
(`#303030` sur `#0a0a0a`) pour son rendu. Ces contrastes sont en dessous du
seuil WCAG AA. Les couleurs concernées sont regroupées dans `globals.css` et
dans les styles des sections, et peuvent être éclaircies sans toucher à la mise
en page. Les animations respectent `prefers-reduced-motion`.
