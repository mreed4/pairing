import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { TextLoop } from "easy-react-text-loop";

import "../../assets/css/StartPage.css";

import Header from "../Header";

export default function StartPage() {
  return (
    <div id="start-page" className="app-page fade-in">
      <section id="hero">
        <div>
          <Header />
          <div>
            <p>
              We connect you to others to help you&nbsp;
              <TextLoop animation="tween">
                <span className="word">create.</span>
                <span className="word">develop.</span>
                <span className="word">build.</span>
                <span className="word">design.</span>
              </TextLoop>
            </p>
          </div>
        </div>
      </section>
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
      <section id="features">
        <div>
          <h2>Features</h2>
          <div className="features-list">
            <div className="feature">
              <h3>
                <span className="material-symbols-outlined">view_kanban</span>Kanban Board
              </h3>
              <p>Create a kanban board to keep track of your project.</p>
            </div>
            <div className="feature">
              <h3>
                <span className="material-symbols-outlined">speaker_notes</span>Chat
              </h3>
              <p>Create a chat for your project. Talk about your project, and ask questions.</p>
            </div>
            <div className="feature">
              <h3>
                <span className="material-symbols-outlined">calendar_month</span>Project calendar
              </h3>
              <p>Create a calendar for your project. Keep track of important dates, and deadlines.</p>
            </div>
            <div className="feature">
              <h3>
                <span className="material-symbols-outlined">stars</span>Project generator
              </h3>
              <p>Generate a project for you to work on with someone else.</p>
            </div>
            <div className="feature">
              <h3>
                <span className="material-symbols-outlined">code_blocks</span> Code review
              </h3>
              <p>Get your code reviewed by someone. You can also review someone else's code.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        {/* <div>
          <h2>Pricing</h2>
          <p>Pairings is free to use.</p>
        </div> */}
        <div>
          <h2>Pricing</h2>
          <div className="pricing-plans">
            <div className="pricing-plan-labels">
              <h3>Labels</h3>
              <ul>
                <li>Projects</li>
                <li>Kanban boards</li>
                <li>Chats</li>
                <li>Calendars</li>
                <li>Code reviews</li>
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
                <li>Free</li>
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
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
                <li>$10 a month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="sign-up">
        <h2>Sign Up</h2>
        <Link to="/sign-up">Sign Up</Link>
      </section>
    </div>
  );
}
