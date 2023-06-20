import getRandomIndex from "../utils/getRandomIndex"

export default function chooseStyle() {
  const styles = ['Diagrammatic', 'Realistic', 'Chibi/Kawaii', 'Anime', 'Manga', 'Antique', 'Line Art', 'Comic Book', 'Caricature', 'Cross Contour', 'Minimalist', 'Cross Hatch', 'Block Print']

  return getRandomIndex(styles)
}