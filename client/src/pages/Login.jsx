import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'tvk@gmail.com' && password === 'tvk') {
            onLogin(); // Call the onLogin function to set isLoggedIn to true
            navigate('/home'); // Navigate to home page
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="Login p-6 bg-gray-500 w-[20vw] h-[40vh] rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <h1 className="text-amber-50 mb-4">Login</h1>
                    <div className="mb-4 w-full">
                        <label className="block mb-1 text-amber-50">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 bg-white border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block mb-1 text-amber-50">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 bg-white border border-gray-300 rounded"
                        />
                    </div>
                    <button className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500" type="submit">
                        Submit
                    </button>
                    <div className="mt-4">
                        <p>
                            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}