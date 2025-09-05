export default function Pricing() {
  const plans = [
    { name: "Starter", price: "Free", features: ["50 emails/day", "Basic support"] },
    { name: "Professional", price: "$19/mo", features: ["Unlimited emails", "Priority support"] },
    { name: "Company", price: "$99/mo", features: ["Team dashboard", "Advanced analytics"] },
  ];

  return (
    <section className="pricing">
      <h2 className="section-title">Pricing</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
