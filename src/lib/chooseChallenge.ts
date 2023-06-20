import getRandomIndex from "../utils/getRandomIndex"
import chooseCategory from "./chooseCategory"
import chooseSubject from "./chooseSubject"

export default function chooseChallenge() {
  const challenges = ['Timed', 'Scene', 'Mashup', 'Crossover', 'Description Only', 'Limited Color Palette']
  const random = Math.floor(Math.random() * 10)

  let challenge: undefined | string

  if (random > 8) {
    challenge = getRandomIndex(challenges)
  }

  if (challenge === 'Mashup' || challenge === 'Crossover') {
    let category = chooseCategory()
    let subject = chooseSubject()

    challenge += ` with ${subject} from ${category}`
  }

  return challenge
}