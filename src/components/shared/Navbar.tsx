import { useState } from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="border-b w-full flex items-center justify-between px-4 py-3 relative">
        {/* Left side - Brand/Logo (optional) */}
        <div className="flex items-center">
          <Link to="/" className="font-bold">
            BookHub
          </Link>
        </div>

        {/* Centered Navigation Menu - Desktop */}
        <NavigationMenu className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/books"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  All Books
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/create-book"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Add Book
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/borrow-summary"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Borrow Summary
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Right side - Mode Toggle */}
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-background/90 z-50 flex flex-col items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </Button>
          <Link
            to="/"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Books
          </Link>
          <Link
            to="/create-book"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Borrow Summary
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
