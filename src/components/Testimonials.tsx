
import React from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Monetaris Consultech is truly a one-stop solution for all our financial needs. From meticulous accounting and audits to strategic tax planning and insightful business consulting, they handle everything seamlessly.",
    author: "Anil Pethani",
    title: "Co-Founder of Cara Jewellers",
    rating: 5
  },
  {
    quote: "Monetaris Consultech has been instrumental in optimizing our financial processes. The seamless integration of their accounting, auditing, tax, and consulting services has not only saved our time but also provided us with a holistic view of our financial health.",
    author: "Lalit Israni",
    title: "Co-Founder at Al Rama Foods",
    rating: 4
  },
  {
    quote: "We were struggling with managing multiple financial service providers. Monetaris Consultech has consolidated everything – accounting, auditing, VAT, corporate tax, and consulting – and it's been a game-changer for us.",
    author: "Kamal Israni",
    title: "Director at Al Rama Foods",
    rating: 4.5
  },
  {
    quote: "Monetaris Consultech has become an integral part of our business. They handle everything from day-to-day accounting to complex tax strategies and business consulting.",
    author: "Rohit Jasani",
    title: "Co-Founder of Diamond City & Hiya Jewellers",
    rating: 5
  },
  {
    quote: "What impressed us most about Monetaris Consultech is the seamless integration of their services. We no longer have to deal with multiple contacts or conflicting advice.",
    author: "Tom Michael",
    title: "Cara Passenger Transport LLC",
    rating: 3.5
  }
];

const Testimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          size={16} 
          className="fill-monetaris-secondary text-monetaris-secondary" 
        />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          size={16}
          className="fill-monetaris-secondary text-monetaris-secondary"
        />
      );
    }
    
    // Add empty stars
    for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-200" />
      );
    }
    
    return stars;
  };
  
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-monetaris-secondary/10 px-4 py-1 rounded-full mb-4">
            <span className="text-monetaris-primary font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-monetaris-primary">
            Our Happy Customers
          </h2>
          <p className="text-lg text-gray-600">
            Don't take our word for it. See what our clients have to say about their experience with Monetaris Consultech.
          </p>
        </div>

        {/* Testimonial Carousel for Mobile */}
        <div className="block md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all h-full">
                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {renderStars(item.rating)}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{item.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="mt-4 border-t pt-4">
                      <div className="font-medium text-monetaris-primary">{item.author}</div>
                      <div className="text-sm text-gray-500">{item.title}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative position-static transform-none translate-y-0 left-0" />
              <CarouselNext className="relative position-static transform-none translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>

        {/* Testimonials Grid for larger screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {renderStars(item.rating)}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 flex-grow italic">
                "{item.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 bg-monetaris-primary mr-3">
                    <AvatarFallback className="bg-monetaris-secondary text-white">
                      {item.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-monetaris-primary">{item.author}</div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
