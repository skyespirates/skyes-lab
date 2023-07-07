import { useGetTodo } from '../../hooks/useTodos'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const Query = () => {
  const { data, isLoading, error } = useGetTodo()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error occured: {(error as any).message}</p>
  return (
    <div className='h-screen bg-slate-200 flex justify-center items-center'>
      <div className='grid grid-cols-4 gap-2 px-24'>
        {(data as any).map((d: any) => (
          <Card key={d.id}>
            <CardHeader>
              <CardTitle className='text-base capitalize'>{d.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to={`/query/${d.id}`}>
                <Button>Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}

        {/*}
        <div className="flex">
          <input
            ref={inputRef}
            min="1"
            className="border-2 border-blue-500 outline-none px-2"
            type="number"
          />
          <button
            className="border-2 border-blue-500 bg-blue-500 text-white px-4 py-1"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        {*/}
      </div>
    </div>
  )
}

export default Query

// REACT -> process.env.REACT_SOMETHING
// VITE -> import.meta.env.VITE_SOMETHING
