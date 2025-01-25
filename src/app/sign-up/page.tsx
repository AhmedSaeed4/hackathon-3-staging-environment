"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const route = useRouter();

  const [createUserWithEmailAndPassword, userCredential, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    if(userCredential){route.push("../sign-in")};

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      console.log("Google Sign In successful:", user);
      route.push("/"); // Redirect to home page after successful login
    } catch (err) {
      console.error("Error with Google Sign In:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        const userCredentialResult = await createUserWithEmailAndPassword(email, password);
        if (userCredentialResult && userCredentialResult.user) {
          const user = userCredentialResult.user;

          // Update profile with full name
          await updateProfile(user, {
            displayName: fullName,
          });

          // Sign out the user after successful signup
           auth.signOut();

          alert("Signup successful! Please log in to continue.");
          route.push("/sign-in"); // Redirect to login page
        }
      } catch (err) {
        console.error("Error creating user:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex font-clash items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 mb-4"
        >
          Sign Up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {error && <p className="text-sm text-red-500 mt-2 text-center">{error.message}</p>}

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <a href="../sign-in" className="text-indigo-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
