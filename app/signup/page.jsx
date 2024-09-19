"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa'; // Ensure react-icons is installed
import { getProviders, signIn } from 'next-auth/react'; // Import for provider management

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        message = 'Registered successfully';
        router.push('/signin');
      } else {
        const { message } = await res.json();
        setError(message || 'Registration failed');
      }
    } catch (err) {
      console.error('An error occurred during registration:', err);
      setError('An error occurred during registration');
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     const res = await fetch('/api/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       router.push('/login');
  //     } else {
  //       const { message } = await res.json();
  //       setError(message);
  //     }
  //   } catch (err) {
  //     console.error('An error occurred during registration:', err);
  //     setError('An error occurred during registration');
  //   }
  // };

  return (
    <section className="bg-blue-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-lg py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Create An Account
            </h2>
            
            {/* Google Sign Up */}
            {providers && providers.google && (
              <div className="mb-4">
                <button
                  onClick={() => signIn(providers.google.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                >
                  <FaGoogle className="text-white mr-2" /> Register with Google
                </button>
              </div>
            )}

            {/* Or Register with Email */}
            <div className="my-6 font-semibold text-center">
              Or register with your email address
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Email address"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Confirm Password"
                required
              />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default SignUp;
