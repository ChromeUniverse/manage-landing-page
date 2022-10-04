import React from "react";
import Button from "./Button";

const testimonials = [
  {
    avatar: "anisha",
    name: "Anisha Li",
    text: `“Manage has supercharged our team’s workflow. The ability to maintain
    visibility on larger milestones at all times keeps everyone motivated.”`
  },
  {
    avatar: "ali",
    name: "Ali Bravo", 
    text: `“We have been able to cancel so many other subscriptions since
    using Manage. There is no more cross-channel confusion and
    everyone is much more focused.”`
  },
  {
    avatar: "richard",
    name: "Richard Watts",
    text: `“Manage allows us to provide structure and process. It keeps us
    organized and focused. I can’t stop recommending them to everyone
    I talk to!”`
  },
  {
    avatar: "shanai", 
    name: "Shanai Gough",
    text: `“Their software allows us to track, manage and collaborate on our
    projects from anywhere. It keeps the whole team in-sync without
    being intrusive.”`
  }
]

// Testimonial component
function Testimonial({avatar, name, text}) {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4">
      <img className="w-16 -mt-14" src={`/images/avatar-${avatar}.png`} alt="" />
      <h5 className="text-lg text-darkBlue font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{text}</p>
    </div>
  );
}

  
// Main Testimonials component
function Testimonials() {
  return (
    <section id="testimonials">
      {/* <!-- Conatainer to heading and testimonial blocks --> */}
      <div className="max-w-6-xl px-5 mx-auto mt-32 text-center">
        {/* <!-- Heading --> */}
        <h2 className="text-4xl font-bold text-center">What they’ve said</h2>
        {/* <!-- Testimonials container --> */}
        <div className="flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0">        
          {testimonials.map(t => (<Testimonial avatar={t.avatar} name={t.name} text={t.text} />))}          
        </div>
        <div className="my-16">
          <Button/>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
