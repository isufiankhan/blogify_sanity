import Link from 'next/link'
import Logo from './Logo'
import { FiMenu } from 'react-icons/fi'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const navigation = [
    { title: "Our Story", href: "/ourstory" },
    { title: "Features", href: "/features" },
    { title: "Privacy", href: "/privacy" },
    { title: "Write", href: "/studio" },
  ]
  return (
    <div className='w-full h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50 border-b border-black'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-3 h-full'>
        <Logo title="Blogify" className="text-gray-900 font-sans" />
        <div className='hidden md:inline-flex items-center gap-7 hover:text-black duration-200'>
          {navigation.map((item) => (
            <Link key={item?.title} href={item?.href} className='text-base relative group overflow-hidden text-gray-900 hover:font-semibold'>
              {item?.title}
            </Link>
          ))}
          <div>
            <Link href={"/studio"}>
              <button className='bg-specialgreen px-4 py-2 rounded-full font-semibold text-white'>
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger><FiMenu className='text-2xl' /></SheetTrigger>
            <SheetContent className='flex flex-col text-xl'>
              <SheetHeader className='text-2xl font-bold text-gray-900'>
                <h1>Blogify</h1>
              </SheetHeader>
              <Link href={"/ourstory"} className='hover:font-semibold'>Our Story</Link>
              <Link href={"/features"} className='hover:font-semibold'>Features</Link>
              <Link href={"/privacy"} className='hover:font-semibold'>Privacy</Link>
              <Link href={"/studio"} className='hover:font-semibold'>Get started</Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar