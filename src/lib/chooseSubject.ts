import getRandomIndex from "../utils/getRandomIndex"

export default function chooseSubject() {
  const subjects = ['a Creature', 'an Object', 'a Character', 'a Location']

  return getRandomIndex(subjects)
}