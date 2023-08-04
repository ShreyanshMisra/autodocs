"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "../Toast";
import { Button } from "./Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error singing out",
        message: "Please try again",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};
export default SignOutButton;