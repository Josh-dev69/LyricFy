import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

const DashProfile = () => {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    };
    await updateUser(updatedData);
  };

  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full p-4 dark:bg-gray-900">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Profile
        </h3>
      </div>
      <form
        className="flex flex-col w-full max-w-md mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <Label
            htmlFor="firstName"
            value="First Name"
            className="mb-2 block text-gray-900 dark:text-gray-100"
          />
          <TextInput
            id="firstName"
            type="text"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <Label
            htmlFor="lastName"
            value="Last Name"
            className="mb-2 block text-gray-900 dark:text-gray-100"
          />
          <TextInput
            id="lastName"
            type="text"
            placeholder="Doe"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <Label
            htmlFor="username"
            value="Username"
            className="mb-2 block text-gray-900 dark:text-gray-100"
          />
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            disabled
            value={formData.username}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <Label
            htmlFor="email"
            value="Email Address"
            className="mb-2 block text-gray-900 dark:text-gray-100"
          />
          <TextInput
            id="email"
            type="email"
            placeholder="Enter your Email"
            disabled
            value={formData.email}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <Label
            htmlFor="password"
            value="Password"
            className="mb-2 block text-gray-900 dark:text-gray-100"
          />
          <TextInput
            id="password"
            type="password"
            placeholder="******"
            required
            value={formData.password}
            onChange={handleChange}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>
        <Button
          type="submit"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
        >
          Update
        </Button>
      </form>
    </section>
  );
};

export default DashProfile;
