import React from 'react';
import PricingCard from './components/PricingCard';
import './App.css';

const App = () => {
  const pricingPlans = [
    {
      plan: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', enabled: true },
        { name: '50GB Storage', enabled: true },
        { name: 'Unlimited Public Projects', enabled: true },
        { name: 'Community Access', enabled: true },
        { name: 'Unlimited Private Projects', enabled: false },
        { name: 'Dedicated Phone Support', enabled: false },
        { name: 'Free Subdomain', enabled: true },
        { name: 'Monthly Status Reports', enabled: false },
      ],
      buttonLabel: 'BUTTON'
    },
    {
      plan: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', enabled: true },
        { name: '50GB Storage', enabled: true },
        { name: 'Unlimited Public Projects', enabled: true },
        { name: 'Community Access', enabled: true },
        { name: 'Unlimited Private Projects', enabled: true },
        { name: 'Dedicated Phone Support', enabled: true },
        { name: 'Free Subdomain', enabled: true },
        { name: 'Monthly Status Reports', enabled: false },
      ],
      buttonLabel: 'BUTTON'
    },
    {
      plan: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', enabled: true },
        { name: '50GB Storage', enabled: true },
        { name: 'Unlimited Public Projects', enabled: true },
        { name: 'Community Access', enabled: true },
        { name: 'Unlimited Private Projects', enabled: true },
        { name: 'Dedicated Phone Support', enabled: true },
        { name: 'Free Subdomain', enabled: true },
        { name: 'Monthly Status Reports', enabled: true },
      ],
      buttonLabel: 'BUTTON'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pricing Plans</h1>
      </header>
      <main>
        <div className="pricing-cards-container">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

