export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  audio: string;
};
export const songs: Song[] = [
  {
    id: 1,
    title: "I Think They Call This Love",
    artist: "Sunil",
    album: "My Collection",
    duration: "0:24",
    cover: "/music/covers/IMG_20240515_143118.jpg",
    audio: "/music/audio/song3.mp3"
  },
  {
    id: 2,
    title: "Nepali Music",
    artist: "Sunil",
    album: "Nepali Hits",
    duration: "3:58",
    cover: "/music/covers/IMG_20240515_143118.jpg",
    audio: "/music/audio/song7.mp3"
  },
  {
    id: 3,
    title: "Budho Bhaiyo",
    artist: "Sunil",
    album: "Collection",
    duration: "4:05",
    cover: "/music/covers/IMG_20240515_143118.jpg",
    audio: "/music/audio/song9.mp3"
  },

  {
    id: 4,
    title: "Alex Warren",
    artist: "Alex Warren",
    album: "Album",
    duration: "3:30",
    cover: "/music/covers/IMG_20240515_143118.jpg",
    audio: "/music/audio/song8.mp3"
  },
  {
    id: 5,
    title: "Iktara",
    artist: "Bollywood",
    album: "Hits",
    duration: "4:15",
    cover: "/music/covers/IMG_20240515_143118.jpg",
    audio: "/music/audio/song7.mp3"
  },
];
