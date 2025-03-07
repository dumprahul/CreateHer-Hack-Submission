import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        " It’s time we move beyond the sidelines and take center stage in innovation. Because when women lead in tech, the world doesn’t just change, it evolves.",
      name: "Ooviya Manickam",
      designation: "Founder, Frontend developer",
      src: "/images/ooviya.jpg" ,
    },
    {
        quote:
          "I thrive on turning ideas into reality. I believe in the power of Web3 to create a more transparent, fair, and trustless future, and I'm here to build it, one block at a time.",
        name: "Rahul Shanmugam",
        designation: "Co-founder, Blockchain developer",
        src: "/images/rahulz.jpg",
      },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}