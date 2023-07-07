import usePosts from '@/hooks/usePosts'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import Spinner from '../Spinner/Spinner'

const InfiniteScroll = () => {
  const { isLoading, data, fetchNextPage, isFetching } = usePosts()

  const handleClick = () => {
    fetchNextPage()
  }
  if (isLoading) return <Spinner />

  return (
    <div className='min-h-screen bg-blue-200 px-24 py-16 space-y-4'>
      <div className='grid grid-cols-3 gap-2'>
        {data?.pages.map((group) =>
          group.data.map((post: any) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle className='text-lg'>
                  {post.id} - {post.title.slice(0, 20)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.body.slice(0, 20)}</p>
              </CardContent>
            </Card>
          )),
        )}
      </div>
      {isFetching && <Spinner />}
      <div className='text-center'>
        <Button
          disabled={isFetching}
          onClick={handleClick}
          className=''
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default InfiniteScroll
