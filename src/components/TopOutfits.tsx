
import React from 'react';
import OutfitCard from './OutfitCard';

interface TopOutfitsProps {
  showAll?: boolean;
}

const TopOutfits: React.FC<TopOutfitsProps> = ({ showAll = false }) => {
  const aiGeneratedOutfits = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      title: 'Urban Chic Ensemble',
      description: 'AI-curated blend of street style and sophistication with earthy tones and clean lines.',
      price: 89.99,
      products: [
        { id: '1a', name: 'Denim Jacket', price: 35.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop' },
        { id: '1b', name: 'White T-Shirt', price: 12.99, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=300&fit=crop' },
        { id: '1c', name: 'Black Jeans', price: 41.01, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop' }
      ]
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop',
      title: 'Elegant Evening Look',
      description: 'AI-powered sophisticated ensemble with rich textures and timeless silhouettes.',
      price: 124.99,
      products: [
        { id: '2a', name: 'Blazer', price: 65.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
        { id: '2b', name: 'Dress Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop' },
        { id: '2c', name: 'Dress Pants', price: 29.01, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' }
      ]
    }
  ];

  const customerFavorites = [
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop',
      title: 'Casual Weekend Vibes',
      description: 'Customer favorite: Relaxed comfort with style, perfect for weekend adventures.',
      price: 67.99,
      products: [
        { id: '3a', name: 'Sweater', price: 32.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop' },
        { id: '3b', name: 'Casual Pants', price: 24.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop' },
        { id: '3c', name: 'Sneakers', price: 10.01, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop' }
      ]
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?w=400&h=600&fit=crop',
      title: 'Boho Dream Outfit',
      description: 'Top-rated: Free-spirited artistic style with flowing fabrics and earthy colors.',
      price: 95.99,
      products: [
        { id: '4a', name: 'Flowy Top', price: 28.99, image: 'https://images.unsplash.com/photo-1564257577315-366c0c2e5ca1?w=300&h=300&fit=crop' },
        { id: '4b', name: 'Maxi Skirt', price: 42.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
        { id: '4c', name: 'Accessories Set', price: 24.01, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop' }
      ]
    }
  ];

  const additionalOutfits = [
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop',
      title: 'Minimalist Professional',
      description: 'AI-generated clean lines and neutral tones for the modern professional.',
      price: 145.99,
      products: [
        { id: '5a', name: 'Structured Blazer', price: 75.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
        { id: '5b', name: 'Silk Blouse', price: 45.99, image: 'https://images.unsplash.com/photo-1564257577315-366c0c2e5ca1?w=300&h=300&fit=crop' },
        { id: '5c', name: 'Tailored Trousers', price: 24.01, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop' }
      ]
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
      title: 'Vintage Revival',
      description: 'Customer choice: Nostalgic charm meets contemporary style with retro palettes.',
      price: 112.99,
      products: [
        { id: '6a', name: 'Vintage Cardigan', price: 48.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop' },
        { id: '6b', name: 'High-waisted Jeans', price: 39.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop' },
        { id: '6c', name: 'Canvas Sneakers', price: 24.01, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop' }
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {!showAll && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Trending Outfit Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our AI-curated outfit combinations that are making waves in fashion
            </p>
          </div>
        )}
        
        {showAll ? (
          <div className="space-y-16">
            {/* AI Generated Section */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-8 text-center">AI-Generated Outfits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...aiGeneratedOutfits, ...additionalOutfits.slice(0, 1)].map((outfit) => (
                  <OutfitCard key={outfit.id} {...outfit} />
                ))}
              </div>
            </div>
            
            {/* Customer Favorites Section */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Top-Rated Customer Favorites</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...customerFavorites, ...additionalOutfits.slice(1)].map((outfit) => (
                  <OutfitCard key={outfit.id} {...outfit} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...aiGeneratedOutfits, ...customerFavorites].map((outfit) => (
              <OutfitCard key={outfit.id} {...outfit} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopOutfits;
