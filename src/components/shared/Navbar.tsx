import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/books">All Books</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/create-book">Add Book</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/borrow-summery">Borrow Summery</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
