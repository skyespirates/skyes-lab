interface IContainer {
  children: React.ReactNode
}
const Container = ({ children }: IContainer) => {
  return <div className='absolute top-[60px] left-0 w-full z-[-1]'>{children}</div>
}

export default Container
