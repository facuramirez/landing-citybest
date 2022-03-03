export default function HighwaySteps(props) {
  return (
    <div className={`highway ${props.primary ? "primary" : ""}`}>
      <div className="highway-item"></div>
      <div className="highway-item"></div>
      <div className="highway-item"></div>
    </div>
  );
}
