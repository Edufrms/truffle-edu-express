
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Testimonial from '@/components/Testimonial';
import { ArrowRight, Leaf, Award, Info, DollarSign, Globe, ShoppingBag } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll animation for sections
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-on-scroll');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    {
      id: '1',
      name: 'Trufa Negra Fresca',
      description: 'Trufa negra de temporada, cultivada en regiones seleccionadas de Europa con los más altos estándares de calidad.',
      price: 1200.00,
      image: 'https://images.unsplash.com/photo-1651983410533-76bcc6ee1124',
      category: 'Trufas Frescas',
      isNew: true,
    },
    {
      id: '2',
      name: 'Aceite de Trufa Blanca',
      description: 'Nuestro aceite de oliva infusionado con trufa blanca, perfecto para dar un toque de lujo a cualquier plato.',
      price: 450.00,
      image: 'https://images.unsplash.com/photo-1598129218506-08460f344f30',
      category: 'Aceites',
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Salsa de Trufa Cremosa',
      description: 'Salsa cremosa con trozos de trufa negra, ideal para pastas, carnes o como aderezo gourmet.',
      price: 380.00,
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5',
      category: 'Salsas',
    },
    {
      id: '4',
      name: 'Mantequilla de Trufa',
      description: 'Mantequilla artesanal enriquecida con trozos de trufa negra, un acompañamiento perfecto para panes y platos calientes.',
      price: 320.00,
      image: 'https://images.unsplash.com/photo-1597030813281-36a41c4fb0e4',
      category: 'Gourmet',
    },
  ];

  const testimonials = [
    {
      text: "He probado muchos productos de trufa, pero la calidad de TrufexMX es incomparable. Su aceite de trufa es parte esencial de mi cocina.",
      author: "Chef Luis Martínez",
      role: "Chef Ejecutivo, Restaurante Alcalde",
      avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      rating: 5
    },
    {
      text: "Las trufas frescas llegaron en perfectas condiciones y con un aroma impresionante. El servicio y la calidad son excepcionales.",
      author: "María González",
      role: "Propietaria, Bistró La Table",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      text: "La salsa de trufa tiene un sabor auténtico y equilibrado. Mis clientes están encantados y siempre vuelven por más.",
      author: "Carlos Ruiz",
      role: "Chef Pastelero, Dulce & Salado",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      rating: 4
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 hero-content text-white">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-truffle-gold/20 text-truffle-gold rounded-full text-sm font-medium mb-6 animate-fade-in">
              Importador Oficial en México
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              La Exquisita Experiencia de la Trufa
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Descubre nuestra selección de trufas de la más alta calidad, aceites y salsas gourmet importados directamente de Europa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-truffle-gold hover:bg-truffle-gold/90 text-white text-lg px-8 py-6">
                Explorar Productos
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Aprende más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-truffle-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-truffle-dark">
              Por qué elegir nuestras trufas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos dedicamos a traer a México lo mejor de la gastronomía europea, seleccionando cuidadosamente cada producto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none bg-white shadow-md reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-truffle-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-truffle-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-truffle-dark">Calidad Premium</h3>
                <p className="text-gray-600">
                  Seleccionamos solamente trufas de la mejor calidad, cultivadas en las regiones más reconocidas de Europa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-white shadow-md reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-truffle-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-truffle-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-truffle-dark">Importación Directa</h3>
                <p className="text-gray-600">
                  Importamos directamente desde productores europeos para garantizar frescura y autenticidad en cada producto.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-white shadow-md reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-truffle-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-truffle-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-truffle-dark">Satisfacción Garantizada</h3>
                <p className="text-gray-600">
                  Nuestra prioridad es tu satisfacción. Garantizamos la calidad excepcional de cada uno de nuestros productos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-truffle-gold text-sm font-medium uppercase tracking-wider">Nuestros Productos</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-truffle-dark">
              Descubre Nuestra Selección
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde trufas frescas hasta productos derivados de la más alta calidad, tenemos todo lo que necesitas para elevar tu experiencia culinaria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center reveal-on-scroll">
            <Button className="bg-truffle-dark hover:bg-truffle-dark/90 text-white">
              Ver todos los productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Truffles Section */}
      <section className="py-20 bg-truffle-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal-on-scroll">
              <span className="text-truffle-gold text-sm font-medium uppercase tracking-wider">Educación Culinaria</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
                El Mundo de las Trufas
              </h2>
              <p className="mb-6 text-gray-300">
                Las trufas son hongos subterráneos considerados uno de los ingredientes más valorados en la alta cocina mundial. Su aroma intenso y sabor complejo los convierten en un tesoro gastronómico.
              </p>
              <p className="mb-6 text-gray-300">
                En TrufexMX nos especializamos en la importación de trufas negras y blancas de las regiones más prestigiosas de Europa, así como en la elaboración de productos derivados que capturan su esencia única.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="flex h-6 w-6 rounded-full bg-truffle-gold items-center justify-center text-white font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">Variedades Selectas</h4>
                    <p className="text-gray-300 text-sm">Ofrecemos las mejores variedades de trufas, incluyendo la prestigiosa Tuber melanosporum y Tuber magnatum.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="flex h-6 w-6 rounded-full bg-truffle-gold items-center justify-center text-white font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">Conservación Experta</h4>
                    <p className="text-gray-300 text-sm">Brindamos asesoría sobre el almacenamiento adecuado para preservar el aroma y sabor de tus trufas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="flex h-6 w-6 rounded-full bg-truffle-gold items-center justify-center text-white font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">Aplicaciones Culinarias</h4>
                    <p className="text-gray-300 text-sm">Descubre cómo incorporar nuestros productos en tus recetas para lograr resultados excepcionales.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-truffle-gold hover:bg-truffle-gold/90 text-white">
                <Info className="mr-2 h-4 w-4" />
                Aprende más sobre trufas
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1644947918633-4433f6f07fb6" 
                  alt="Trufas negras frescas" 
                  className="rounded-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-truffle-gold p-4 rounded-lg shadow-lg w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center">
                  <span className="text-3xl md:text-4xl font-serif font-bold">25+</span>
                  <span className="text-sm md:text-base text-center">Años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-truffle-gold text-sm font-medium uppercase tracking-wider">Ofertas Especiales</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-truffle-dark">
              Promociones del Momento
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas exclusivas y paquetes especiales para disfrutar de lo mejor de la gastronomía de trufa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-truffle-dark to-truffle-light p-8 rounded-xl text-white reveal-on-scroll">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1651458822899-1f7ec7f82213" 
                    alt="Pack Gourmet" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="mb-3">
                    <Badge className="bg-truffle-gold text-white hover:bg-truffle-gold/90">Oferta Limitada</Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Pack Gourmet Experience</h3>
                  <p className="mb-4 text-gray-100">
                    Incluye aceite de trufa blanca, salsa de trufa negra y sal de trufa. El regalo perfecto para los amantes de la gastronomía.
                  </p>
                  <div className="flex items-center mb-5">
                    <span className="text-gray-300 line-through mr-3">$1,200 MXN</span>
                    <span className="text-2xl font-serif font-bold">$950 MXN</span>
                  </div>
                  <Button className="bg-white text-truffle-dark hover:bg-white/90">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Aprovechar oferta
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-truffle-cream p-8 rounded-xl border border-gray-200 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1651983411587-3a4202bea716" 
                    alt="Suscripción Mensual" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="mb-3">
                    <Badge className="bg-truffle-dark text-white hover:bg-truffle-dark/90">Membresía</Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-truffle-dark">Club de Trufa Mensual</h3>
                  <p className="mb-4 text-gray-600">
                    Suscríbete y recibe una selección de productos de trufa cada mes con un 15% de descuento y envío gratuito.
                  </p>
                  <div className="flex items-center mb-5">
                    <span className="text-gray-500 mr-2">Desde</span>
                    <span className="text-2xl font-serif font-bold text-truffle-dark">$780 MXN/mes</span>
                  </div>
                  <Button className="bg-truffle-dark hover:bg-truffle-dark/90 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Unirse al club
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-truffle-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-truffle-gold text-sm font-medium uppercase tracking-wider">Testimonios</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Descubre por qué chefs profesionales y amantes de la gastronomía confían en nuestros productos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-truffle-gold">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto reveal-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para elevar tu experiencia culinaria?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Descubre el auténtico sabor de las trufas y productos derivados importados directamente de Europa. Calidad premium garantizada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-truffle-dark hover:bg-white/90 text-lg px-8 py-6">
                Explorar Productos
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Contactar con un asesor
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
