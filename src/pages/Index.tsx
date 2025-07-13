
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import TopOutfits from '@/components/TopOutfits';
import ImageUpload from '@/components/ImageUpload';
import ProfileMenu from '@/components/ProfileMenu';
import { Upload, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'upload' | 'trends'>('home');

  const handleViewChange = (view: 'home' | 'upload' | 'trends') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => handleViewChange('home')}>
            StyleSpark
          </h1>
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => handleViewChange('home')}
              variant={currentView === 'home' ? 'default' : 'outline'}
              size="sm"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button 
              onClick={() => handleViewChange('upload')}
              variant={currentView === 'upload' ? 'default' : 'outline'}
              className="bg-primary hover:bg-primary/90"
            >
              <Upload className="h-4 w-4 mr-2" />
              Find Your Style
            </Button>
            <ProfileMenu />
          </div>
        </div>
      </div>

      {/* Hero Section - Only show on home */}
      {currentView === 'home' && (
        <div className="h-96">
          <HeroSection />
        </div>
      )}
      
      {/* Navigation Buttons - Only show on home */}
      {currentView === 'home' && (
        <div className="flex justify-center space-x-4 py-8">
          <Button 
            size="lg" 
            onClick={() => handleViewChange('upload')}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-effect"
          >
            <Upload className="h-5 w-5 mr-2" />
            Find Your Style
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => handleViewChange('trends')}
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Explore Trends
          </Button>
        </div>
      )}

      {/* Content based on current view */}
      {currentView === 'upload' && (
        <section className="py-16 bg-muted/5">
          <div className="container mx-auto">
            <ImageUpload />
          </div>
        </section>
      )}

      {currentView === 'trends' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                AI-Generated Fashion Collections
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our AI-curated top outfits and customer favorites
              </p>
            </div>
            <TopOutfits showAll={true} />
          </div>
        </section>
      )}

      {/* Top Outfits Section - Only show on home */}
      {currentView === 'home' && <TopOutfits />}

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 StyleSpark. Powered by AI for Walmart Sparkathon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
