import { ModeToggle } from '@/components/mode-toggle';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const Header = () => {
	return (
		<NavigationMenu className="mx-auto my-4 px-4 py-4 sticky top-2 outline-1 shadow-md rounded-md bg-white dark:bg-black">
			<NavigationMenuList className="space-x-10">
				<NavigationMenuItem>
					<h3 className="text-2xl font-semibold text-primary">
						<a href="/">Minh Vương</a>
					</h3>
				</NavigationMenuItem>
				<div className="flex space-x-2">
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
	);
};

export default Header;
