import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviewsData = [
  {
    name: "Samrat Das",
    initial: "S",
    role: "Client",
    review: "Prakash has been very good editor for me. He understood my requirements and learnt what exactly i needed. His editing is also good and he is quick to adapt when I give new instructions. He completes his tasks on time and also asks if any improvements are needed. Above all he is good at heart and a good human being which makes the experience even better. I look forward to working with him on future projects.",
  },
  {
    name: "Vedant",
    initial: "V",
    role: "Client",
    review: "Thanks Prakash, To complete our Team project. Your collaboration is best for our team and make easy to communicate with in good manner. Thanks",
  },
  {
    name: "Alok",
    initial: "A",
    role: "Client",
    review: "Great Work, Good person and with Accurate work. Fulfill all requirements What I want in my project",
  },
  {
    name: "Kevin",
    initial: "K",
    role: "Client",
    review: "Great work. On time delivery. Overall satisfied with the work done",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Client Reviews</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">What clients say about my work</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviewsData.map((review, index) => (
            <Card 
              key={index} 
              className="p-6 space-y-4 border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="bg-transparent text-background font-semibold">
                    {review.initial}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{review.review}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
