import { PieChart } from "./PieChart";

export const Footer = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    
  return (
    <div className="footer">
      <div>
        <PieChart/>
      </div>
      <div>
        <h1>{name}</h1>
        <h3>Email: {email}</h3>
      </div>
    </div>
  );
}
