import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {

    const { user, userSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('User sign out');
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    const navLinks = <>
        <li><NavLink to='/' className={({isActive})=>isActive?'text-red-500':''}>Home</NavLink></li>
        <li><NavLink to='/signup' className={({isActive})=>isActive?'text-red-500':''}>Sign Up</NavLink></li>
        <li><NavLink to='/signin' className={({isActive})=>isActive?'text-red-500':''}>Sign In</NavLink></li>
        <li><NavLink to='/user' className={({isActive})=>isActive?'text-red-500':''}>User</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="gap-6 menu-horizontal px-1 text-lg font-semibold">
                    { navLinks }
                </ul>
                <div className="ms-6">
                    {
                        user ? 
                        <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button> :
                        <Link to="signin"><button className="btn btn-primary">Sign in</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;