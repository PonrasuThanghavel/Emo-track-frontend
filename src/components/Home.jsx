import React from 'react';
import './css/Home.css';

const About = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Emo-Tracker</h1>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          At Emo-Tracker, we're dedicated to helping you make informed
          decisions about the products you love. Our platform offers a unique
          blend of product reviews and sentiment analysis, providing you with
          valuable insights into the products that matter to you.
        </p>
        <p>
          Our mission is to empower consumers like you by aggregating
          user-generated product reviews and utilizing state-of-the-art
          sentiment analysis technology.
        </p>
      </div>
      <div className="key-features">
        <h2>Key Features</h2>
        <p>
          <strong>Product Reviews:</strong> Browse a vast collection of
          product reviews, contributed by a community of users passionate
          about sharing their experiences.
        </p>
        <p>
          Our platform hosts a diverse range of product categories, ensuring
          you can find reviews on everything from tech gadgets to kitchen
          appliances.
        </p>
        <p>
          <strong>Sentiment Analysis:</strong> Our cutting-edge sentiment
          analysis technology analyzes reviews to give you an overall sense of
          how people feel about a product.
        </p>
        <p>
          Uncover hidden insights by exploring the sentiment analysis scores and
          identifying trends in user opinions.
        </p>
        <p>
          <strong>User-Friendly:</strong> Our website is designed with you in
          mind, ensuring a seamless and enjoyable user experience.
        </p>
        <p>
          Easily navigate through product listings, reviews, and sentiment
          analysis results with our intuitive user interface.
        </p>
        <p>
          <strong>User Registration:</strong> Create an account to personalize
          your experience, save favorite products, and contribute your own
          reviews.
        </p>
        <p>
          Join our growing community, share your thoughts, and help others make
          informed choices.
        </p>
      </div>
      <div className="tech-stack">
        <h2>Our Technology Stack</h2>
        <p>
          At Emo-Tracker, we employ a cutting-edge technology stack to provide
          you with the best possible experience:
        </p>
        <ul>
          <li>
            <strong>Frontend:</strong> We use React.js for our frontend, offering a
            responsive and interactive user interface.
          </li>
          <li>
            <strong>Backend:</strong> Our backend is powered by Node.js and Express.js,
            ensuring fast and reliable server performance.
          </li>
          <li>
            <strong>Database:</strong> We store our data in MongoDB, a NoSQL database
            known for its flexibility and scalability.
          </li>
          <li>
            <strong>Sentiment Analysis:</strong> We employ state-of-the-art Python
            libraries and machine learning models for sentiment analysis.
          </li>
          <li>
            <strong>Data Scraping:</strong> We use Python's Beautiful Soup for web
            scraping to gather product information and reviews.
          </li>
        </ul>
        <p>
          Our tech stack allows us to deliver accurate sentiment analysis, fast
          search results, and a seamless user experience.
        </p>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <p>
          <strong>Search:</strong> Use our powerful search functionality to find
          the products you're interested in quickly.
        </p>
        <p>
          <strong>Explore Reviews:</strong> Dive into detailed product reviews
          to see what others have to say. Read about real-world experiences and
          make confident decisions.
        </p>
        <p>
          <strong>Sentiment Analysis:</strong> Check out our sentiment analysis
          results to get a quick sense of the overall sentiment surrounding a
          product.
        </p>
        <p>
          <strong>Join the Community:</strong> Sign up to join our community of
          users. Share your opinions, write reviews, and contribute to the
          collective knowledge.
        </p>
      </div>
      <div className="get-started">
        <h2>Get Started</h2>
        <p>
          Ready to get started? Begin exploring our website now and discover
          the power of informed decision-making.
        </p>
        <a href="/explore" className="explore-button">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default About;
