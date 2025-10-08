import { AiOutlineMenu } from 'react-icons/ai';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import useMobile from '@/hooks/useMobile';

const Header = () => {
	const isMobile = useMobile();

	return !isMobile ? (
		// Desktop Header
		<NavigationMenu className="mx-auto my-4 px-4 py-4 sticky top-2 outline-1 shadow-md rounded-md bg-white dark:bg-black hidden md:block">
			<NavigationMenuList className="gap-10">
				<NavigationMenuItem>
					<h3 className="text-2xl font-semibold text-primary">
						<a href="/">Minh Vương</a>
					</h3>
				</NavigationMenuItem>
				<div className="flex gap-2">
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<a href="#work-experience">Work Experience</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<a href="#skills">Skills</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<a href="#projects">Projects</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<a href="https://blog.hardingadonis.top" target="_blank">
								Blog
							</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</div>
				<ModeToggle />
			</NavigationMenuList>
		</NavigationMenu>
	) : (
		// Mobile Header
		<div className="md:hidden mx-auto my-4 px-4 py-4 sticky top-2 shadow-md rounded-md bg-white dark:bg-black">
			<div className="flex justify-between items-center">
				<h3 className="text-2xl font-semibold text-primary">
					<a href="/">Minh Vương</a>
				</h3>
				<div className="flex items-center space-x-2">
					<ModeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="default">
								<AiOutlineMenu className="h-[1.2rem] w-[1.2rem] scale-100" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<a href="#work-experience">Work Experience</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a href="#skills">Skills</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a href="#projects">Projects</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a href="https://blog.hardingadonis.top" target="_blank">
										Blog
									</a>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};

export default Header;
