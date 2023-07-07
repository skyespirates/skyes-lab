import { Button } from '../ui/button'
import { Link, useParams } from 'react-router-dom'
import useTodo from '@/hooks/useTodo'
import { Card, CardHeader, CardTitle } from '../ui/card'

const QueryDetails = () => {
  const { id } = useParams()
  const { isLoading, error, data } = useTodo(id!)
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error occured: {(error as any).message}</p>
  return (
    <div className='h-screen bg-slate-200 flex flex-col justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-base capitalize'>{data.title}</CardTitle>
        </CardHeader>
      </Card>
      <Link to='/query'>
        <Button>Back</Button>
      </Link>
    </div>
  )
}

export default QueryDetails
