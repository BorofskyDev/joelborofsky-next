import {
  Playfair_Display,
  Inter,
  Inconsolata,
  Permanent_Marker,
} from 'next/font/google'


export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-display'
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-body'
})

export const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-link'
})

export const permanentMarker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-handwriting'
})