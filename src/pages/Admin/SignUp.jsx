
import { Link } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../../public/firebase/firebase.config";
import { useState } from "react";
import { Helmet } from "react-helmet";

const SingUp = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [err, setErr] = useState("");

    let handleSubmit = () => {
        if (!name && !email && !password) {
            setErr("Fill the all details!");
        } else if (!name) {
            setErr("Enter your name!");
        } else if (!email) {
            setErr("Enter your email!");
        } else if (!password) {
            setErr("Enter your password!");
        } else if (password.length < 7) {
            setErr("Password need minimum 8 character!");
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: "https://www.w3schools.com/w3images/avatar2.png",
                    }).then(() => {
                        // Profile updated!
                        setErr("");
                        navigate("/products");
                    });
                })
                .catch((error) => {
                    console.log(error.code);
                    if (error.code == "auth/email-already-in-use") {
                        setErr("Email already in use!");
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

    return (
        <div id="singup">


            <div>
                <Helmet>
                    <title> Registration Page</title>
                </Helmet>
            </div>


            <div className="singup">
                <h2 className="text-center font-bold">Create an account!</h2>
                <div className="card-body">
                    <div className="form-control">
                        <input onChange={(e) => setName(e.target.value)} type="text" className="input input-bordered" required placeholder="Enter your name" />
                    </div>
                    <div className="form-control">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="input input-bordered" required placeholder="Enter your email" />
                    </div>
                    <div className="form-control">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="input input-bordered" required placeholder="Enter your password" />
                        <p>{err}</p>
                    </div>
                    <button onClick={handleSubmit} className="input input-bordered" required> Singup</button>
                </div>
                <Link className="text-center hover:cursor-pointer text-lime-500" to="/login">You have already account? Singin</Link>
            </div>
        </div>
    );
};

export default SingUp;