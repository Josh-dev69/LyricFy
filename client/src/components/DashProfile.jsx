import { Button, Label, TextInput } from "flowbite-react";

const DashProfile = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full p-4">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">Profile</h3>
      </div>
      <form className="flex flex-col w-full max-w-md mx-auto space-y-4">
        <div>
          <Label
            htmlFor="firstName"
            value="First Name"
            className="mb-2 block"
          />
          <TextInput id="firstName" type="text" placeholder="John" required />
        </div>
        <div>
          <Label htmlFor="lastName" value="Last Name" className="mb-2 block" />
          <TextInput id="lastName" type="text" placeholder="Doe" required />
        </div>
        <div>
          <Label htmlFor="username" value="Username" className="mb-2 block" />
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            disabled
          />
        </div>
        <div>
          <Label htmlFor="email" value="Email Address" className="mb-2 block" />
          <TextInput
            id="email"
            type="email"
            placeholder="Enter your Email"
            disabled
          />
        </div>
        <div>
          <Label htmlFor="password" value="Password" className="mb-2 block" />
          <TextInput
            id="password"
            type="password"
            placeholder="******"
            required
          />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </section>
  );
};

export default DashProfile;
