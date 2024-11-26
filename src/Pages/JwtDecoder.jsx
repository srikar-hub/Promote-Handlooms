
import { jwtDecode } from 'jwt-decode'
export default function JwtDecoder() {


const token = localStorage.getItem("token");
if(token){
    const decoder = jwtDecode(token);
    const userId = decoder.id;
    console.log(userId);
}
else{
    console.log("No token found with user id");
}
}
