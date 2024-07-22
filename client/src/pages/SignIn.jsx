import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../constants/index";
import { useUser } from "../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser(); // Use the setUser function from context

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error
    try {
      const response = await Axios.post("/api/auth/signin", {
        email,
        password,
      });
      if (response.status === 200) {
        setUser(response.data.user); // Set the user data in context
        localStorage.setItem("token", response.data.token); // Store the token if needed
        navigate("/dashboard");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.msg || "Failed to sign in. Please try again."
      );
    }
  };

  return (
    <div className="custom-bg min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex p-4 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 mt-20">
        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              LyricFy
            </span>
          </Link>
          <p className="text-sm mt-5 text-gray-700 dark:text-gray-300">
            Unleash the power of lyrics and connect with your favorite songs
            like never before. Explore, save, and enjoy the lyrics that speak to
            you.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Email Address"
                  className="dark:text-gray-300"
                />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Password"
                  className="dark:text-gray-300"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=""
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign In
            </Button>
            <div className="flex flex-row gap-2 text-center justify-center mt-3">
              <p className="text-sm text-gray-900 dark:text-gray-100">
                Don't Have An Account?
              </p>
              <Link
                to="/sign-up"
                className="text-sm text-blue-500 font-bold dark:text-blue-400"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
