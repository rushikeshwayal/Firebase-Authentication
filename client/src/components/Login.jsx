import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {
  const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const onSubmit = async (e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      .then((userCridential)=>{
        const user = userCridential.user;
        if (user.emailVerified) {
           alert("Login successful");
        navigate('/after')
        console.log(user)
          
        }
        else{
          alert("Please Verify Your Email")
        }
        
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode,errorMsg)
      })


}
const onGoogleSubmit = ()=>{
  const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
.then((result)=>{
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // const info = getAdditionalUserInfo(result)
  // console.log()
  const user = result.user;
  navigate('/after')
  console.log(user)
})
.catch((error)=>{
const errorCode = error.code;
const errorMsg = error.message
console.log(errorCode,errorMsg)

})

}


    return(
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
     
        <div className="flex flex-col gap-10 justify-center items-center " >
         <input
        className="px-5 py-3 border-2 w-80 border-black rounded-lg"
        placeholder="Email"
        type="email"    
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)} // Fix state update
      />
      <input
        className="px-5 py-3 border-2 w-80 border-black rounded-lg"
        placeholder="Password"
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)} // Fix state update
      />
         </div>
    <div>       
     <a className="ml-44 text-blue-500" href="/reset-password">Forgot Password</a>
     </div>

      <div className="flex flex-col gap-2 justify-center items-center">
           <button  className="bg-black text-center text-white text-bold text-lg px-5 py-2 w-80 " onClick={onSubmit} >Login</button>
           <div className="bg-black flex items-center justify-center gap-5 text-white  text-lg px-5 py-2 w-80 cursor-pointer " onClick={onGoogleSubmit}>
  <img className="w-8  bg-cover object-cover" src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google" />
  <span className="text-white">Login using Google</span>
</div>
           </div>
           <a href="/register" className="text-blue-500">Go to Register</a>
     
        </div>
      
    );
}

export default Login;