import type { Episode, Host } from '../types/types'

export const episodes: Episode[] = [
  {
    id: 'tmm-3',
    epNumber: 3,
    title: "Maybe It's Not Just the Algorithm",
    date: '2026-04-08',
    description:
      'We blame the algorithm for everything — what we watch, what we think, even how we feel. But what if it\'s not that simple? We talk about how algorithms shape our feeds, reinforce our opinions, and keep us scrolling — but also how much of that is actually on us.',
    showNotes: `## Timestamps\n\n- 00:00 Intro\n- 05:00 What even is an algorithm?\n- 12:00 The scroll trap\n- 24:00 Opinion bubbles\n- 38:00 So what do we do about it?`,
    transcript: '',
    status: 'published',
    links: {
      spotify: 'https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr',
      apple: 'https://podcasts.apple.com/podcast/id1888385475',
      youtube: 'https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK',
    },
    createdAt: '2026-04-08T00:00:00Z',
    updatedAt: '2026-04-08T00:00:00Z',
  },
  {
    id: 'tmm-2',
    epNumber: 2,
    title: 'Was This Your Childhood Too?',
    date: '2026-04-02',
    description:
      'Remember when life was scheduled around cartoons? When 7 PM meant rushing home for your favourite show… and weekends were incomplete without a stack of books? We take a nostalgic trip back to the content that quietly shaped our childhood.',
    showNotes: `## Timestamps\n\n- 00:00 Intro\n- 04:00 7 PM cartoons\n- 15:00 Harry Potter, Tintin, Tinkle\n- 26:00 CID, Sharaarat, Pokémon\n- 40:00 Did this content shape who we are?`,
    transcript: '',
    status: 'published',
    links: {
      spotify: 'https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr',
      apple: 'https://podcasts.apple.com/podcast/id1888385475',
      youtube: 'https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK',
    },
    createdAt: '2026-04-02T00:00:00Z',
    updatedAt: '2026-04-02T00:00:00Z',
  },
  {
    id: 'tmm-1',
    epNumber: 1,
    title: 'Is Making Friends as Adults Supposed to Be This Hard?',
    date: '2026-03-26',
    description:
      'Making friends as an adult feels… unnecessarily difficult. We spiral (a little) about late 20s friendships — from not fitting into bar culture, to overthinking every interaction, to wondering how guys somehow make friends overnight.',
    showNotes: `## Timestamps\n\n- 00:00 Intro\n- 03:00 Bar culture and why it doesn't work for everyone\n- 14:00 The overthinking spiral\n- 27:00 How do guys do it??\n- 39:00 What actually helps`,
    transcript: '',
    status: 'published',
    links: {
      spotify: 'https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr',
      apple: 'https://podcasts.apple.com/podcast/id1888385475',
      youtube: 'https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK',
    },
    createdAt: '2026-03-26T00:00:00Z',
    updatedAt: '2026-03-26T00:00:00Z',
  },
]

export const hosts: Host[] = [
  {
    name: 'Divya',
    emoji: '🪴',
    bio: 'Placeholder — software engineer, overthinker, South Indian food enthusiast. Probably the one spiralling.',
  },
  {
    name: 'Anjali',
    emoji: '🎬',
    bio: 'Placeholder — movie buff, storyteller, the one who has already watched everything you\'re about to recommend.',
  },
]

export const showLinks = {
  spotify: 'https://open.spotify.com/show/21LLDfvzRzW2BH392gZMJr',
  apple: 'https://podcasts.apple.com/podcast/id1888385475',
  youtube: 'https://www.youtube.com/playlist?list=PLt10RAma0oLCsGldRZlHhgXCI1rRBU9GK',
}