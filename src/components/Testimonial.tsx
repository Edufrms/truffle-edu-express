
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const Testimonial = ({ text, author, role, avatar, rating }: TestimonialProps) => {
  return (
    <Card className="border border-gray-200 overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="mr-4">
              <img 
                src={avatar} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover border-2 border-truffle-gold"
              />
            </div>
            <div>
              <h4 className="font-serif font-semibold">{author}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-truffle-gold fill-truffle-gold' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 italic">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
