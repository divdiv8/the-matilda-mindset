import type { Episode, Host } from './types';

export const episodes: Episode[] = [
  {
    number: 3,
    title: "Maybe It's Not Just the Algorithm",
    date: "Apr 8, 2026",
    description:
      "We blame the algorithm for everything — what we watch, what we think, even how we feel. But what if it's not that simple? We talk about how algorithms shape our feeds, reinforce our opinions, and keep us scrolling — but also how much of that is actually on us. From attention spans to content loops to opinion bubbles and the need to always be consuming something.",
    spotifyUrl: "https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr",
    appleUrl: "https://podcasts.apple.com/podcast/id1888385475",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK",
  },
  {
    number: 2,
    title: "Was This Your Childhood Too?",
    date: "Apr 2, 2026",
    description:
      "Remember when life was scheduled around cartoons? When 7 PM meant rushing home for your favourite show… and weekends were incomplete without a stack of books? We take a nostalgic trip back to the content that quietly shaped our childhood — from Harry Potter, Tintin, and Tinkle to CID, Sharaarat, Pokémon, Power Rangers, and Cartoon Network classics.",
    spotifyUrl: "https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr",
    appleUrl: "https://podcasts.apple.com/podcast/id1888385475",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK",
  },
  {
    number: 1,
    title: "Is Making Friends as Adults Supposed to Be This Hard?",
    date: "Mar 26, 2026",
    description:
      "Making friends as an adult feels… unnecessarily difficult. In this episode, we spiral (a little) about late 20s friendships — from not fitting into bar culture, to overthinking every interaction, to wondering how guys somehow make friends overnight. We talk about effort, expectations, safety, and that weird feeling of wanting deep connections but not knowing how to get there.",
    spotifyUrl: "https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr",
    appleUrl: "https://podcasts.apple.com/podcast/id1888385475",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK",
  },
];

export const hosts: Host[] = [
  {
    name: "Divya",
    emoji: "🪴",
    bio: "Placeholder — software engineer, overthinker, South Indian food enthusiast. Probably the one spiralling.",
  },
  {
    name: "Anjali",
    emoji: "🎬",
    bio: "Placeholder — movie buff, storyteller, the one who has already watched everything you're about to recommend.",
  },
];

export const showLinks = {
  spotify: "https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr",
  apple: "https://podcasts.apple.com/podcast/id1888385475",
  youtube: "https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK",
};
