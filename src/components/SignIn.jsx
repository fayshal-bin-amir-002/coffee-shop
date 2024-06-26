import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    const navigate = useNavigate();

    const { userSignIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then((result) => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoggedAt : result.user?.metadata?.lastSignInTime
                }
                fetch('https://coffee-store-server-theta-ten.vercel.app/user', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                navigate('/');
                toast.success('Sign In Successfully');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Something went wrong');
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;