import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 onClick={handleHome}>Dash Board component</h1>
    </div>
  );
};

export default Dashboard;
