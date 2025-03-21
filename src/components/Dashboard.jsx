import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinancialData } from "../redux/actions/financialActions";
import { logoutUser } from "../redux/actions/authActions";
import Transactions from "./Transactions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { balance, transactions, notifications } = useSelector(
    (state) => state.financial
  );
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchFinancialData());
  }, [dispatch]);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Account Balance: ${balance}</p>

      <button onClick={() => navigate("/profile")}>Edit Profile</button>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>

      <Transactions transactions={transactions} />

      <h3>Notifications</h3>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((note, index) => <li key={index}>{note}</li>)
        ) : (
          <li>No Notifications</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
