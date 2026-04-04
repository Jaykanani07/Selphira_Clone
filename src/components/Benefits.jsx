import React from 'react';
import './Benefits.css';

import organicSymbol from '../assets/images/organic.jpg';
import parabenFreeSymbol from '../assets/images/paraben free.jpg';
import crueltyFreeSymbol from '../assets/images/cruelty_free.jpg';

const benefits = [
  {
    icon: organicSymbol,
    title: '100% Organic',
    desc: 'Sourced strictly from nature, free from synthetics and harsh chemicals.'
  },
  {
    icon: parabenFreeSymbol,
    title: 'Paraben Free',
    desc: 'Gentle on your skin, safe for daily nourishment and lasting health.'
  },
  {
    icon: crueltyFreeSymbol,
    title: 'Cruelty Free',
    desc: 'Absolutely no animal testing, crafted with pure compassion.'
  }
];

const Benefits = () => {
  return (
    <section className="benefits section-padding" id="about">
      <div className="container position-relative">
        <div className="benefits-header reveal-on-scroll">
          <span className="section-eyebrow">Why Selphira</span>
          <h2 className="section-title">Our Promise to You</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className={`benefit-card reveal-on-scroll delay-${(index + 1) * 100}`} key={index}>
              <div className="benefit-icon-wrapper">
                <img src={benefit.icon} alt={benefit.title} className="benefit-icon-img" />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
