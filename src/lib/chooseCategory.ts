import getRandomIndex from "../utils/getRandomIndex"

export default function chooseCategory() {
  const categories: {[key: string]: string[]} = {
    videoGames: ['Final Fantasy', 'Legend of Zelda', 'Dragon Quest', 'Octopath Traveller', 'Stardew Valley', 'Pokemon', 'Mario', 'Kirby', 'Starfox', 'Garden Story', 'Animal Crossing'],
    television: ['Ghibli', 'Star Trek', 'Star Wars'],
    books: ['Wheel of Time', 'Middle Earth', 'Dune', 'Harry Potter'],
    anime: ['Naruto', 'Demon Slayer', 'Jujitsu Kaisen', 'One Piece', 'I Got Reincarnated as a Slime', 'Hunter x Hunter', 'Bleach']
  }

  const keys = Object.keys(categories)
  const topLevel = categories[getRandomIndex(keys)]
  const category = getRandomIndex(topLevel)

  return category
}