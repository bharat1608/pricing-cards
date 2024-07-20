import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan, price, features, buttonLabel }) => {
  return (
    <div className="pricing-card">
      <h3>{plan}</h3>
      <h2>{price}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.enabled ? 'enabled' : 'disabled'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default PricingCard;

