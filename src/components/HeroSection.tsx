
import React, { useEffect, useState } from 'react';
import { Shirt, Gem, Sparkles, Crown, Star, Zap } from 'lucide-react';

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const fashionIcons = [
    { Icon: Shirt, delay: '0.5s', position: 'top-20 left-20' },
    { Icon: Gem, delay: '0.8s', position: 'top-32 right-24' },
    { Icon: Sparkles, delay: '1.1s', position: 'top-24 left-1/3' },
    { Icon: Crown, delay: '1.4s', position: 'top-40 right-1/3' },
    { Icon: Star, delay: '1.7s', position: 'top-16 right-16' },
    { Icon: Zap, delay: '2s', position: 'top-36 left-16' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 -z-10" />
      
      {/* Animated Fashion Icons */}
      {fashionIcons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className={`absolute h-8 w-8 text-primary/60 fashion-icon ${
            animationStarted ? 'icon-pop' : ''
          }`}
          style={{
            animationDelay: delay,
            left: position.includes('left') ? position.split(' ')[1] : 'auto',
            right: position.includes('right') ? position.split(' ')[1] : 'auto',
            top: position.split(' ')[0].replace('top-', '') + 'rem'
          }}
        />
      ))}

      {/* Main Title */}
      <div className="text-center z-10">
        <h1 
          className={`text-6xl md:text-8xl font-black text-gradient mb-6 ${
            animationStarted ? 'title-animation' : 'opacity-0'
          }`}
        >
          StyleSpark
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Upload your style inspiration and discover AI-curated outfits from Walmart's collection
        </p>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
