import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Pricing', path: '/pricing' },
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
        navItems.map((navItem, index) => {
          return (
            <Link key={navItem.path} href={navItem.path}>
              <span className="mr-2">{navItem.name}</span>
            </Link>
          )
        })
      }
    </nav>
  )
}
