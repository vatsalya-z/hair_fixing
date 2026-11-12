import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ozzone Hair Fixing Thiruvananthapuram',
    short_name: 'ozzone Hair Studio',
    description: 'Premier Non-Surgical Hair Replacement Studio in Thiruvananthapuram, Kerala',
    start_url: '/',
    display: 'standalone',
    background_color: '#075078',
    theme_color: '#005675',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

