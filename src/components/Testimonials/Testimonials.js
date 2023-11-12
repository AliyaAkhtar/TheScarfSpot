import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      text: 'The Scarf Spot has the best scarves I have ever seen! Quality and style are exceptional.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'I love shopping at The Scarf Spot. The variety of scarves is amazing, and the prices are reasonable.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
