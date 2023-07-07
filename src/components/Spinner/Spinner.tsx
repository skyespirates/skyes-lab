import { CSSProperties } from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#3b82f6',
}

function Spinner() {
  return (
    <PuffLoader
      color='#3b82f6'
      loading={true}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  )
}

export default Spinner
