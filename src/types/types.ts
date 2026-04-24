export interface Episode {
  id: string
  epNumber: number
  title: string
  date: string
  description: string
  showNotes?: string
  transcript?: string
  status: 'published' | 'draft'
  links: {
    spotify: string
    apple: string
    youtube: string
  }
  createdAt: string
  updatedAt: string
}

export interface Host {
  name: string
  bio: string
  emoji: string
}

export interface HomePageProps {
  episodes: Episode[]
  loading?: boolean
}

