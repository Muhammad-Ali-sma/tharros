import { navItems } from '@/lib/constants'
import { ChevronRight, LogOut, Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenu } from 'radix-ui'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Button } from './ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarTrigger } from './ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export const Navbar = () => {
    return (
        <header className="border-b border-white/20">
            <div className="flex items-center justify-between lg:justify-center py-6 max-w-7xl px-3 sm:px-6 lg:px-16 gap-2 sm:gap-4 xl:gap-16 mx-auto">
                <div className='flex items-center'>
                    <SidebarTrigger className='block lg:hidden' />
                    <Image src={'/logo.png'} alt='Logo' width={103} height={26} className='min-w-25.75 transition-transform duration-600 hover:scale-110' />
                </div>
                <NavigationMenu.Root className='hidden lg:block'>
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
                <div className='flex items-center gap-1 sm:gap-5'>
                    <Button variant={'ghost'} size={'xs'}>
                        <User />  Login
                    </Button>
                    <Button size={'xs'}>Dashboard</Button>
                </div>
            </div>
            <Sidebar>
                <SidebarHeader className='border-b border-white/20'>
                    <Image src={'/logo.png'} alt='Logo' width={103} height={26} className='min-w-25.75 transition-transform duration-600 hover:scale-110 mx-auto my-5' />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <Collapsible
                                    key={item.name}
                                    asChild
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton>
                                                <span>{item.name}</span>
                                                {item.submenu &&
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                }
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        {item.submenu &&
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.submenu.map((subitem =>
                                                        <SidebarMenuSubItem key={subitem.name}>
                                                            <SidebarMenuSubButton asChild>
                                                                <Link href={subitem.to}>
                                                                    {subitem.name}
                                                                </Link>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        }
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className='border-t border-white/20'>
                    <SidebarMenuButton>
                        <Settings /> <span className='mt-0.5'>Settings</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton>
                        <LogOut /> <span className='mt-0.5'>Logout</span>
                    </SidebarMenuButton>
                </SidebarFooter>
            </Sidebar>
        </header>
    )
}
