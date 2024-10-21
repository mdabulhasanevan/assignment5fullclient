import { useContext, useState } from "react";
import { AuthContextLogin } from './../provider/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../public/firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    const navigate=useNavigate();
    const {loginWithGoogle} = useContext(AuthContextLogin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
  
    const handleSubmit = () => {
      if (!email && !password) {
        setErr("Fill the all details!");
      } else if (!email) {
        setErr("Enter your email!");
      } else if (!password) {
        setErr("Enter your password!");
      } else if (password.length < 7) {
        setErr("Password need minimum 8 character!");
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            setErr("");
            console.log(userCredential);
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error.code);
            if (error.code == "auth/wrong-password") {
              setErr("Wrong password!");
            } else if (error.code == "auth/user-not-found") {
              setErr("Wrong email!");
            } else {
              setErr("");
            }
          });
      }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/dashboard");
        }
      });


    const handelGoogleLogin = () => {

        loginWithGoogle()
        .then((res)=>{
            console.log(res);
            navigate("/dashboard");
        })
        .catch((error)=>{
            console.log(error);
        });
        // console.log("cssdsds")
    }

    return (
        <div>
      <div className="hero bg-base-200 ">
        <div className="">

          <div className="card bg-base-100   shadow-2xl">
          <div className="card-body w-auto"> 
            <h1 className="font-bold text-center">Login</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="input input-bordered" required />
                <p>{err}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                <Link  to="/singup" className="text-blue-700">You have don't account? Singup</Link>
              </div>
              <div className="form-control mt-6">
                <button onClick={handelGoogleLogin} className="btn btn-success">Login with Google</button>
<br></br>
              
                </div>

              </div> 
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;