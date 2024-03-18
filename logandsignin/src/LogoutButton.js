import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const result = window.confirm("Are you sure want to logout....?")
    if(result){
      navigate('/')
    }
    else{
      alert("logout canceld....")
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
