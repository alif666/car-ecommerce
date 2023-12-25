
'use client'
import Link from "next/link"
import {FormEvent, useState} from 'react';
  
const CarLoginForm = () =>{
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    function HandleLogin(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault;
        const formData = new FormData(event.currentTarget);
        formData.forEach((e)=>console.log(e));
    };
    return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">   
        {/* Top Form Content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <form onSubmit={HandleLogin}>
                <div className="bg-blue-200 shadow-lg shadow-cyan-500/20 p-5">
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className = "h3">Login form</div>        
                    </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input name = "email" id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                                    <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                            </div>
                                    <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                </form>
    </div>
        

    </div>
        );
};

export default CarLoginForm;