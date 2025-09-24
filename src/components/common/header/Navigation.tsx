"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, Gavel } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/auction/1", label: "Auctions" },
    { href: "/categories", label: "Categories" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/90 dark:border-border">
      {/* Yeh wala div center mein layega with 80% width */}
      <div className="mx-auto max-w-[80%] w-full flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Gavel className="h-6 w-6 text-primary dark:text-primary" />
          <span className="text-xl font-bold text-foreground dark:text-foreground">
            BidMaster
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" asChild className="dark:hover:bg-muted/50">
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button - Yeh right side pe hi rahega */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="dark:hover:bg-muted/50"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 bg-background dark:bg-background border-border dark:border-border"
          >
            <div className="flex flex-col space-y-4 mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                <Input
                  placeholder="Search auctions..."
                  className="pl-10 bg-muted/50 dark:bg-muted/30 border-border dark:border-border"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 dark:hover:bg-muted/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border dark:border-border">
                <div className="flex items-center justify-between py-2 px-2">
                  <span className="text-sm font-medium text-foreground dark:text-foreground">
                    Theme
                  </span>
                </div>
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start dark:hover:bg-muted/50"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                >
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
