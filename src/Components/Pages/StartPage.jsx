import { Link } from "react-router-dom";
import { useEffect, useState, useContext, useMemo } from "react";
import { AppContext } from "../Contexts/AppContext";
import ScrollToTop from "react-scroll-to-top";

import "../../assets/css/StartPage.css";
import "../../assets/css/StartPage/HeroSection.css";
import "../../assets/css/StartPage/AboutSection.css";
import "../../assets/css/StartPage/FeaturesSection.css";
import "../../assets/css/StartPage/PricingSection.css";
import "../../assets/css/StartPage/TestimonialsSection.css";

import Header from "../Header";

function HeroSection() {
  return (
    <section id="hero">
      <div>
        <Header />
        <div>
          <p>
            We connect you with others to help you <span className="word">build</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div>
        <h2>About</h2>
        <p>
          Pairings is a platform that <span className="highlight">pairs new designers with new developers</span>. If you need to pad your
          portfolio, or just want to work on a project with someone else, then this is the place for you.
        </p>
        <p>It can also be used to pair new developers with more experienced developers.</p>
        <p>We believe that the best way to learn is to work with others, and we want to help you find the right people to work with.</p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      name: "Kanban Board",
      icon: "view_kanban",
      description: "Create a kanban board to keep track of your project.",
    },
    {
      name: "Chat",
      icon: "speaker_notes",
      description: "Create a chat for your project. Talk about your project, and ask questions.",
    },
    {
      name: "Project calendar",
      icon: "calendar_month",
      description: "Create a calendar for your project. Keep track of important dates, and deadlines.",
    },
    {
      name: "Project generator",
      icon: "stars",
      description: "Generate a project for you to work on with someone else.",
    },
    {
      name: "Code review",
      icon: "code_blocks",
      description: "Get your code reviewed by someone. You can also review someone else's code.",
    },
    {
      name: "Project finder",
      icon: "manage_search",
      description: "Find a project to work on with someone else.",
    },
    {
      name: "Project manager",
      icon: "engineering",
      description: "Manage your projects. Keep track of your projects, and the people you are working with.",
    },
  ];

  return (
    <section id="features">
      <div>
        <h2>Features</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h3>
                <span className="material-symbols-outlined">{feature.icon}</span>
                {feature.name}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  function PricingTable() {
    return (
      <div className="pricing-plans">
        <div className="pricing-plan-labels">
          <h3>Labels</h3>
          <ul>
            <li>
              <span className="material-symbols-outlined">stars</span>Projects
            </li>
            <li>
              <span className="material-symbols-outlined">view_kanban</span>Kanban boards
            </li>
            <li>
              <span className="material-symbols-outlined">speaker_notes</span>Chats
            </li>
            <li>
              <span className="material-symbols-outlined">calendar_month</span>Calendars
            </li>
            <li>
              <span className="material-symbols-outlined">code_blocks</span>Code reviews
            </li>
            <li>Price</li>
          </ul>
        </div>
        <div className="pricing-plan">
          <h3>Free</h3>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>5</li>
            <li>$0 a month</li>
          </ul>
        </div>
        <div className="pricing-plan">
          <h3>Plus</h3>
          <ul>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>15</li>
            <li>$5 a month</li>
          </ul>
        </div>
        <div className="pricing-plan">
          <h3>Pro</h3>
          <ul>
            <li>
              <span className="material-symbols-outlined">all_inclusive</span>
            </li>
            <li>
              <span className="material-symbols-outlined">all_inclusive</span>
            </li>
            <li>
              <span className="material-symbols-outlined">all_inclusive</span>
            </li>
            <li>
              <span className="material-symbols-outlined">all_inclusive</span>
            </li>
            <li>
              <span className="material-symbols-outlined">all_inclusive</span>
            </li>
            <li>$10 a month</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section id="pricing">
      <div>
        <h2>Pricing</h2>
        <p>
          <span className="highlight">Pairings is free to use!</span>
        </p>
        <p>We may add a paid tier in the future, but we will always have a free tier.</p>
        {false && <PricingTable />}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { users } = useContext(AppContext);
  const [testimonials, setTestimonials] = useState([]);

  const testimonialText = [
    "I was able to find someone to work with on my project. I'm so glad I found this site!",
    "Pairings is exactly what I've been looking for!",
    "I can't understand how I've been living without Pairings.",
    "I have been using Pairings for over a year now and I love it! I can't imagine life without it",
    "YES! This is what I've been looking for!",
    "Finally! A place where I can find someone to work with!",
    "Being a new developer, I was having trouble finding someone to work with. Pairings helped me find someone to work with.",
  ];

  function getTestimonials() {
    const dummyTestimonials = [];

    for (let i = 0; i < testimonialText.length; i++) {
      function getAvatar(gender) {
        gender = gender?.toLowerCase();
        const random = Math.floor(Math.random() * 75);
        if (gender === "male" || gender === "female") {
          return `https://xsgames.co/randomusers/assets/avatars/${gender}/${random}.jpg`;
        } else {
          return `https://xsgames.co/randomusers/avatar.php?g=female`;
        }
      }

      const index = Math.floor(Math.random() * users.length);
      const user = users[index];
      dummyTestimonials.push({
        avatar: getAvatar(user?.gender),
        name: user?.first_name,
        // gender: user?.gender,
        role: user?.role,
        text: testimonialText[i],
      });
    }
    setTestimonials([testimonials, ...dummyTestimonials]);
  }

  useMemo(() => {
    getTestimonials();
  }, [users]);

  return (
    <section id="testimonials">
      <div>
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.slice(1).map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <p className="testimonial-text">{testimonial.text}</p>
                <hr />
                <span className="name">
                  {testimonial.name}, {testimonial.role} {testimonial.gender}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StartPage() {
  const { getUsers } = useContext(AppContext);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="start-page" className="app-page fade-in">
      <ScrollToTop smooth className="fade-in" component={<span className="material-symbols-outlined">vertical_align_top</span>} />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection />
      <section id="sign-up">
        <h2>Sign Up</h2>
        <Link to="/sign-up">Sign Up</Link>
      </section>
    </div>
  );
}
