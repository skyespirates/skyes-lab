import { useRef, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'

const Observer = () => {
  const myRef = useRef<HTMLDivElement>(null)
  const yourRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) console.log('full visible')
      },
      { threshold: 1 },
    )
    observer.observe((myRef as any).current)
  }, [])

  const handleClick = () => {
    console.log(yourRef.current)
  }

  return (
    <div className='min-h-screen grid grid-cols-3 gap-2 place-items-center'>
      <Card
        ref={yourRef}
        onClick={handleClick}
        className='min-h-[240px] max-w-[220px]'
      >
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className='min-h-[240px] max-w-[220px]'>
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card
        ref={myRef}
        className='min-h-[240px] max-w-[220px]'
      >
        <CardHeader>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure eos. Ullam,
            aut! Maxime quae culpa ipsa inventore enim iusto!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Observer
