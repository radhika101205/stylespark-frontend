
import React, { useState } from 'react';
import { User, ShoppingBag, Heart, Package, Settings, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-12 rounded-full border-2 border-primary/20 hover:border-primary/50">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Fashion Enthusiast</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@stylespark.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Package className="mr-2 h-4 w-4" />
          <span>Previous Orders</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>My Outfits</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Heart className="mr-2 h-4 w-4" />
          <span>Saved Items</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>My Cart</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
