import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const LoginPage = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const handlePasswordChange = (value: any) => {
    console.log(value.target.value);
    setPassword(value.target.value);
  };

  const handleLoginChange = (value: any) => {
    console.log(value.target.value);
    setLogin(value.target.value);
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="border mt-52 flex items-center justify-center flex-col w-80 rounded">
        <h1 className="font-bold mt-6 mb-4">Painel de login</h1>
        <Input
          type="text"
          className="w-60 mb-6"
          placeholder="Login"
          value={login}
          onChange={handleLoginChange}
        />
        <Input
          type="password"
          className="w-60 mb-10"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button className="w-40 mb-8">Login</Button>
      </div>
    </div>
  );
};
