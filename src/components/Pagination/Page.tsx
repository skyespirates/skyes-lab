import { usePagination, DOTS } from './usePagination'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

type PropTypes = {
  onPageChange: (arg: number | string) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Page = (props: PropTypes) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null
  }

  const onNext = () => {
    if (currentPage === lastPage) return
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    if (currentPage === 1) return
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange![paginationRange!.length - 1]
  return (
    <ul className='flex items-center gap-2 bg-slate-500'>
      <li
        role='button'
        className='cursor-pointer'
        onClick={onPrevious}
      >
        <div>
          <HiChevronLeft className='w-6 h-6 bg-slate-100  rounded-full flex justify-center items-center' />
        </div>
      </li>
      {paginationRange!.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={i}
              className='cursor-pointer w-6 h-6 bg-slate-400 hover:bg-slate-500 rounded-full flex justify-center items-center'
            >
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={`${
              currentPage == pageNumber ? 'bg-purple-400' : ''
            } cursor-pointer w-6 h-6 bg-slate-400 hover:bg-slate-500 rounded-full flex justify-center items-center`}
            key={i}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        role='button'
        onClick={onNext}
        className={`cursor-pointer ${currentPage === lastPage ? 'cursor-not-allowed' : ''}`}
      >
        <div>
          <HiChevronRight className='w-6 h-6 bg-slate-100 rounded-full flex justify-center items-center' />
        </div>
      </li>
    </ul>
  )
}

export default Page
