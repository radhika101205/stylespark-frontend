
import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface OutfitCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  products: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
  }>;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ 
  image, 
  title, 
  description, 
  price, 
  products 
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:glow-effect">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="sm" 
              variant="secondary" 
              className="w-full"
              onClick={() => setShowModal(true)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Product
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gradient">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">${price}</span>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal for detailed view */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 z-10"
                onClick={() => setShowModal(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Main outfit image */}
                  <div className="space-y-4">
                    <img 
                      src={image} 
                      alt={title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gradient mb-2">{title}</h2>
                      <p className="text-muted-foreground mb-4">{description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-primary">${price}</span>
                        <Button className="bg-primary hover:bg-primary/90">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy Complete Outfit
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Individual products */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gradient mb-4">Individual Products</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                          <div className="flex items-center p-4 space-x-4">
                            <img 
                              src={product.image || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop'} 
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{product.name}</h4>
                              <p className="text-primary font-bold">${product.price}</p>
                            </div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OutfitCard;
