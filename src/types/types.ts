export interface Episode {
  number: number;
  title: string;
  date: string;
  description: string;
  transcript: string;
  showNotes: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl: string;
}

export interface Host {
  name: string;
  bio: string;
  emoji: string;
}
