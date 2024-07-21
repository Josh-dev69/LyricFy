import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../constants/index";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("/api/auth/signin", {
      email,
      password,
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/dashboard");
        } else {
          navigate("/sign-in");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="custom-bg min-h-screen">
      <div className="flex p-4 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 mt-20">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              LyricFy
            </span>
          </Link>

          <p className="text-sm mt-5">
            Unleash the power of lyrics and connect with your favorite songs
            like never before. Explore, save, and enjoy the lyrics that speak to
            you.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email Address" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=""
              />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign In
            </Button>
            <div className="flex flex-row gap-2 text-center justify-center mt-3">
              <p className="text-sm text-slate-900">Already Have An Account?</p>
              <Link to="/sign-up" className="text-sm text-blue-500 font-bold">
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
