import Image from 'next/image';
import Link from 'next/link';

import LOGO from '../../public/logo.jpeg';

const navItems = {
    '/': {
      name: 'Home',
    },
    '/program': {
      name: 'Program',
    },
    '/organisers': {
      name: 'Organisers',
    },
  }

  export function Navbar() {
    return (
      <aside className="mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20 ">
          <nav
            className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <Image src={LOGO} alt="Logo" width={100} height={100} className="mb-4" />
            <div className="flex flex-col space-y-2">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </aside>
    )
  }