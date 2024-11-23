
import { useNavigate } from 'react-router-dom';
export default function Logout() {
  const  navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");

   
    navigate("/loginSecurity");
  }

    return(
   <>
   <button onClick={logout}>Logout </button>
   </>
    );

}
