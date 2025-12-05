import { atom } from "jotai";

type TNetworks = {
    uri: string;
    image: string
}

export const networksAtom = atom<TNetworks[]>([
    {
      uri: 'https://www.instagram.com/oga.web',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278823/GERAL/Instagram--Streamline-Font-Awesome_xda25v.png',
    }, 
    {
      uri: 'https://www.youtube.com/@OGAWeb',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278823/GERAL/Youtube--Streamline-Font-Awesome_od16tm.png',
    }, 
    {
      uri: 'https://www.linkedin.com/company/theogaweb',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278821/GERAL/Linkedin-In--Streamline-Font-Awesome_1_fqn6oi.png',
    },
    {
      uri: 'https://bsky.app/profile/ogaweb.bsky.social',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278820/GERAL/Bluesky--Streamline-Font-Awesome_iafezl.png',
    }, 
    {
      uri: 'https://whatsapp.com/channel/0029Vb7WMl15q08gfkHmmv0s',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278820/GERAL/Whatsapp--Streamline-Font-Awesome_rxox9c.png',
    }, 
    {
      uri: 'https://linktr.ee/ogaweb',
      image: 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764278820/GERAL/linktree-white-icon_ebdcsv.png',
    }
])