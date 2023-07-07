import { useEffect } from 'react'

type ChildrenProps = {
  getData: () => number[]
}
const Children = ({ getData }: ChildrenProps) => {
  useEffect(() => {
    console.log('change data')
  }, [getData])
  const data = getData()
  return (
    <ul>
      {data.map((dt, i) => (
        <li key={i}>{dt}</li>
      ))}
    </ul>
  )
}

export default Children
