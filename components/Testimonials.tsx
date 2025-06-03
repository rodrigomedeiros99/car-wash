import Image from 'next/image';

export default function Testimonial (){
    return (
        <section className="py-20 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {" Customers Say"}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their PureGleam experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Tesla Model 3 Owner",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
                quote: "I've never seen my car this clean! The Premium Detail service is absolutely worth it, and the staff is so professional."
              },
              {
                name: "Michael Rodriguez",
                role: "BMW X5 Owner",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
                quote: "The membership is a game-changer. I love being able to get my car washed whenever I need without thinking about the cost."
              },
              {
                name: "Jennifer Liu",
                role: "Audi Q5 Owner",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
                quote: "As someone who cares about the environment, I appreciate their eco-friendly approach and water recycling system."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">&#34;{testimonial.quote}&#34;</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="h-5 w-5 text-amber-400 fill-amber-400" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 h-64 w-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/3 left-0 h-64 w-64 bg-teal-400/10 rounded-full blur-3xl -z-10" />
      </section>
    )
    
}