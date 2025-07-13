
import React from 'react';
import { User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gradient">StyleSpark</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 bg-muted rounded-full px-4 py-2 flex-1 max-w-md mx-8">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input 
            placeholder="Search for styles, products..." 
            className="bg-transparent border-none outline-none flex-1 text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
