
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false
}: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="relative image-container">
        <img 
          src={image} 
          alt={name}
          className="image-zoom w-full aspect-[4/3] object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-truffle-gold text-white hover:bg-truffle-gold/90">Nuevo</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-black text-white hover:bg-black/90">Más Vendido</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs text-gray-500 bg-gray-100">
            {category}
          </Badge>
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="font-serif text-lg font-semibold">
            ${price.toFixed(2)} <span className="text-sm text-gray-500">MXN</span>
          </span>
          <Button size="sm" className="bg-truffle-dark hover:bg-truffle-dark/90 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Añadir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
