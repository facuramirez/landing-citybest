import { useState } from "react";

export default function FactItem({ icon, title, description }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`fact-item ${active ? "active" : ""}`}
      // onClick={() => setActive(!active)}
    >
      <div className="fact-item-icon">{icon}</div>

      <div className="fact-item-content">
        <h5 className="fact-item-title text-center">{title}</h5>
        <div className="description mt-1">{description}</div>
      </div>

      <div className="fact-item-line"></div>
    </div>
  );
}
