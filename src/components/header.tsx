import { Logo } from "./logo"

export const Header = () => {
  return(
    <header className='w-full flex items-center justify-center bg-secondary p-4'>
      <Logo />
    </header>
  )
}