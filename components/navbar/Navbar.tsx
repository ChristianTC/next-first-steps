import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
  { text: 'Pricing', path: '/pricing' },
]


export const Navbar = async () => {

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      {
        navItems.map((navItem) => {
          return (
            <ActiveLink key={navItem.path} {...navItem} />
          )
        })
      }
    </nav>
  )
}
