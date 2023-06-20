export default function getRandomIndex(list: Array<string>) {
  let index = Math.floor(Math.random() * list.length)
  return list[index]
}