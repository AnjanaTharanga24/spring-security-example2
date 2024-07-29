import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


export default function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">Your Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {user ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.username}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    {user.roles && Array.isArray(user.roles) && (
                                        <>
                                            {user.roles.includes('ROLE_ADMIN') && (
                                                <li><Link className="dropdown-item" to="/admin/dashboard">Admin Dashboard</Link></li>
                                            )}
                                            {user.roles.includes('ROLE_SELLER') && (
                                                <li><Link className="dropdown-item" to="/seller/dashboard">Seller Dashboard</Link></li>
                                            )}
                                            {user.roles.includes('ROLE_BUYER') && (
                                                <li><Link className="dropdown-item" to="/buyer/profile">Buyer Profile</Link></li>
                                            )}
                                        </>
                                    )}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                </ul>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/register ">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}