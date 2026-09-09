import { atom } from "jotai";

export type TNetworks = {
  uri: string;
  image: string
}

const BASE = 'https://img.icons8.com/ios-filled/50'

const blueskyOGA     = 'https://api.iconify.design/simple-icons:bluesky.svg?color=%232D6A2D'
const linktreeOGA    = 'https://api.iconify.design/simple-icons:linktree.svg?color=%232D6A2D'

const blueskyJustice  = 'https://api.iconify.design/simple-icons:bluesky.svg?color=%232A9D8F'
const linktreeJustice = 'https://api.iconify.design/simple-icons:linktree.svg?color=%232A9D8F'

const blueskyRaizes  = 'https://api.iconify.design/simple-icons:bluesky.svg?color=%23E8A020'
const linktreeRaizes = 'https://api.iconify.design/simple-icons:linktree.svg?color=%23E8A020'

export const networksOGAAtom = atom<TNetworks[]>([
  { uri: 'https://www.instagram.com/oga.web',                      image: `${BASE}/2D6A2D/instagram-new.png` },
  { uri: 'https://www.youtube.com/@OGAWeb',                        image: `${BASE}/2D6A2D/youtube-play.png` },
  { uri: 'https://www.linkedin.com/company/theogaweb',             image: `${BASE}/2D6A2D/linkedin.png` },
  { uri: 'https://bsky.app/profile/ogaweb.bsky.social',            image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958138/GERAL/simple-icons_bluesky_uouoxx.png" },
  { uri: 'https://whatsapp.com/channel/0029Vb7WMl15q08gfkHmmv0s', image: `${BASE}/2D6A2D/whatsapp.png` },
  { uri: 'https://linktr.ee/ogaweb',                               image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958138/GERAL/simple-icons_linktree_yyt03o.png" },
])

export const networksJusticeAtom = atom<TNetworks[]>([
  { uri: 'https://www.instagram.com/oga.web',                      image: `${BASE}/2A9D8F/instagram-new.png` },
  { uri: 'https://www.youtube.com/@OGAWeb',                        image: `${BASE}/2A9D8F/youtube-play.png` },
  { uri: 'https://www.linkedin.com/company/language-for-justice',  image: `${BASE}/2A9D8F/linkedin.png` },
  { uri: 'https://bsky.app/profile/ogaweb.bsky.social',            image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958526/GERAL/simple-icons_bluesky_kvmsko.png" },
  { uri: 'https://whatsapp.com/channel/0029Vb7WMl15q08gfkHmmv0s', image: `${BASE}/2A9D8F/whatsapp.png` },
  { uri: 'https://linktr.ee/languageforjustice',                   image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958526/GERAL/simple-icons_linktree_fsyqw3.png" },
])

export const networksRaizesAtom = atom<TNetworks[]>([
  { uri: 'https://www.instagram.com/raizesds/',                    image: `${BASE}/E8A020/instagram-new.png` },
  { uri: 'https://www.youtube.com/@raizesturbr',                   image: `${BASE}/E8A020/youtube-play.png` },
  { uri: 'https://www.linkedin.com/company/raizesds/',             image: `${BASE}/E8A020/linkedin.png` },
  { uri: 'https://bsky.app/profile/raizesds.bsky.social',          image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958687/GERAL/simple-icons_bluesky_1_s5w0o6.png" },
  { uri: 'https://api.whatsapp.com/send?phone=5511950730928',      image: `${BASE}/E8A020/whatsapp.png` },
  { uri: 'https://linktr.ee/raizesds',                             image: "https://res.cloudinary.com/dia2yiu6k/image/upload/v1788958616/GERAL/simple-icons_linktree281_29_vdvhgg.png" },
])