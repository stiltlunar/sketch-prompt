import chooseCategory from "./lib/chooseCategory"
import chooseSubject from "./lib/chooseSubject"
import chooseStyle from "./lib/chooseStyle"
import chooseMedium from "./lib/chooseMedium"
import chooseChallenge from "./lib/chooseChallenge"

const getPrompt = () => {
  const subject = chooseSubject()
  const category = chooseCategory()
  const style = chooseStyle()
  const medium = chooseMedium()
  const challenge = chooseChallenge()

  console.log(`Draw ${subject} from ${category} in ${style} style using ${medium}`)
  if (challenge) {
    console.log(`\n CHALLENGE:\n ${challenge}`)
  }
}

getPrompt()
