import React, { useState, useCallback } from 'react';
import { Upload, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [colorWeight, setColorWeight] = useState([7]);
  const [patternWeight, setPatternWeight] = useState([6]);
  const [styleWeight, setStyleWeight] = useState([8]);
  const [isDragging, setIsDragging] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setShowResults(false);
  };

  const handleFindOutfits = () => {
    console.log('Finding outfits...', { colorWeight, patternWeight, styleWeight });
    setShowResults(true);
  };

  // Mock data for outfit results
  const mockOutfits = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      title: 'Urban Chic Ensemble',
      description: 'A perfect blend of street style and sophistication with earthy tones and clean lines.',
      price: 89.99
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop',
      title: 'Elegant Evening Look',
      description: 'Sophisticated and timeless with a modern twist, featuring rich textures and classic silhouettes.',
      price: 124.99
    }
  ];

  const mockProducts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      title: 'Denim Jacket',
      price: 35.99
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=300&fit=crop',
      title: 'White T-Shirt',
      price: 12.99
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
      title: 'Black Jeans',
      price: 41.01
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gradient text-center mb-8">
        Find Your Perfect Style
      </h2>
      
      {!uploadedImage ? (
        <Card 
          className={`border-2 border-dashed transition-all duration-300 ${
            isDragging 
              ? 'border-primary bg-primary/10 glow-effect' 
              : 'border-border hover:border-primary/50'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-6 bg-muted rounded-full">
                <Upload className="h-12 w-12 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Style Inspiration</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop an image or click to browse
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Choose Image
                  </label>
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="relative">
              <img 
                src={uploadedImage} 
                alt="Uploaded style inspiration"
                className="w-full h-64 object-cover"
              />
              <Button
                size="icon"
                variant="destructive"
                className="absolute top-4 right-4"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {!showResults && (
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-center mb-4">
                  Customize Your Style Preferences
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">
                      Color Influence: {colorWeight[0]}/10
                    </Label>
                    <Slider
                      value={colorWeight}
                      onValueChange={setColorWeight}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      How much should the colors in your image influence the recommendations?
                    </p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">
                      Pattern Influence: {patternWeight[0]}/10
                    </Label>
                    <Slider
                      value={patternWeight}
                      onValueChange={setPatternWeight}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      How important are patterns and textures from your image?
                    </p>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">
                      Style Influence: {styleWeight[0]}/10
                    </Label>
                    <Slider
                      value={styleWeight}
                      onValueChange={setStyleWeight}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      How closely should the overall style match your image?
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-effect"
                  onClick={handleFindOutfits}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Find My Perfect Outfits
                </Button>
              </CardContent>
            </Card>
          )}

          {showResults && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-6">Generated Outfits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockOutfits.map((outfit) => (
                    <Card key={outfit.id} className="group overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:glow-effect">
                      <div className="relative overflow-hidden">
                        <img 
                          src={outfit.image} 
                          alt={outfit.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-semibold mb-2 text-gradient">{outfit.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{outfit.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">${outfit.price}</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            View Outfit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gradient mb-6">Individual Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-base font-semibold mb-2">{product.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">${product.price}</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
