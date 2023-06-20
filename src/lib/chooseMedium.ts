import getRandomIndex from "../utils/getRandomIndex"

export default function chooseMedium() {
  const mediums = ['Ink and Wash', 'Copic Markers', 'Colored Pencil', 'Graphite', 'Fine Liners', 'Charcoal', 'Toned Paper']

  return getRandomIndex(mediums)
}