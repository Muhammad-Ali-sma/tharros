import { navItems } from '@/lib/constants'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenu } from 'radix-ui'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Button } from './ui/button'

export const Navbar = () => {
    return (
        <header className="border-b border-white/20">
            <div className="flex items-center justify-center py-6 max-w-7xl px-16 gap-16 mx-auto">
                <Image src={'/logo.png'} alt='Logo' width={103} height={26} className='min-w-24'/>
                <NavigationMenu.Root>
                    <NavigationMenuList>
                        {navItems.map((item =>
                            <NavigationMenuItem key={item.name}>
                                {item.submenu ?
                                    <>
                                        <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className='border p-1 rounded-md'>
                                            <ul>
                                                {item.submenu.map((subitem =>
                                                    <li key={subitem.name}>
                                                        <NavigationMenuLink asChild className='p-1.5 text-foreground hover:bg-accent-foreground hover:text-accent'>
                                                            <Link href={subitem.to}>{subitem.name}</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                    :
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={item.to}>{item.name}</Link>
                                    </NavigationMenuLink>
                                }
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu.Root>
                <div className='flex items-center gap-5'>
                    <Button variant={'ghost'} size={'xs'}>
                        <User />  Login
                    </Button>
                    <Button size={'xs'}>Dashboard</Button>
                </div>
            </div>
        </header>
    )
}
