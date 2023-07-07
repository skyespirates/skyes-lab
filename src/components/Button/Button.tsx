import { evaluate } from 'mathjs'

type ButtonProps = {
  text: string
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  setAnswer: React.Dispatch<React.SetStateAction<string>>
}

const Button = ({ text, input, setInput, setAnswer }: ButtonProps) => {
  let hehe = ''
  if (text === '=') hehe += 'row-[4/6] col-[4/5] '
  if (text === '0') hehe += 'row-[5/6] col-[1/3] '
  switch (text) {
    case 'C':
    case '=':
    case '0':
      hehe += 'text-yellow-600'
      break
    case '%':
    case '/':
    case '*':
    case '-':
    case '+':
    case '.':
      hehe += 'text-green-500'
      break
    default:
    //   hehe += "text-red-600";?
  }
  const handleClick = (): void => {
    if (text === 'C') {
      setInput('')
      setAnswer('')
    } else if (text === '=') {
      setAnswer(evaluate(input))
    } else {
      setInput((prev) => prev + text)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${hehe} bg-gray-100 hover:bg-slate-200`}
    >
      {text}
    </button>
  )
}

export default Button
