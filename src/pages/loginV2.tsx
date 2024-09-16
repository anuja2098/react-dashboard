// type Props = {}
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import facebookImage from "@/assets/facebook.png";
import googleImage from "@/assets/google.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { loginUser } from "@/services/user.service";

const LoginSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "email must be at least 5 characters.",
    })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "email format invalid",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long.",
    })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginV2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchemaType) {
    try {
      if (data) {
        const response = await loginUser(data);
        toast({
          description: response?.message || "Success",
        });
        localStorage.setItem("accessToken", response?.accessToken);
        localStorage.setItem("refreshToken", response?.refreshToken);
        navigate("/dashboard");
      } else {
        console.log("Forms value are missing");
      }
    } catch (error) {
      toast({
        description: (error as { message: string }).message as string,
        variant: "destructive",
      });
    }
  }

  function goToRegister() {
    navigate("/register");
  }

  return (
    <div className=" bg-white  w-10/12 md:w-[750px] text-black p-4 md:p-8 md:h-[750px]  rounded-3xl flex flex-col justify-center text-center items center ">
      <h1 className=" text-xl md:text-3xl space-y-4 p-2 ">Log in</h1>
      <h3 className="mb-4  text-sm md:text-base  cursor-pointer">
        Don't have an account?
        <span onClick={goToRegister} className="text-pink-700 text-bold">
          {" "}
          Register Now
        </span>{" "}
      </h3>
      <div className="p-4 flex flex-col align-center justify-center items-center gap-4">
        <div className="border border-black md:p-4 p-1 flex justify-center items-center gap-3 rounded-full w-full md:w-2/3 text-sm  md:text-xl cursor-pointer">
          <img src={facebookImage} className="h-10" />
          Log in with Facebook
        </div>
        <div className="border border-black  md:p-4 p-1  flex justify-center items-center gap-3 rounded-full w-full md:w-2/3 text-sm md:text-xl cursor-pointer">
          <img src={googleImage} className="h-10" />
          Log in with Google
        </div>
      </div>
      <div className="flex items-center px-6">
        <div className="bg-gray-300 h-[1px] flex-1 " />
        <p className="p-3 text-base md:text-xl text-gray-500">OR</p>
        <div className="bg-gray-300 h-[1px]  flex-1" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full md:w-3/4 mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <div className="w-full text-left">
                  <FormLabel className="flex text-gray-500">Email</FormLabel>
                </div>
                <FormControl>
                  <Input
                    className="p-6 bg-white border border-gray-300  rounded-xl focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <div className="w-full text-left">
                  <FormLabel className="flex text-gray-500">
                    <div className="flex flex-row  w-full justify-between">
                      Password
                      <div
                        className="bg-white border-none pr-2"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {" "}
                        {showPassword ? (
                          <EyeIcon className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </div>
                    </div>
                  </FormLabel>
                </div>
                <FormControl className="flex flex-row  items-center">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="p-6 bg-white border border-gray-300 rounded-xl focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
                <div className="w-full text-sm md:text-base text-right">
                  <p className="text-pink-700 text-extrabold">
                    Forgot your password
                  </p>
                </div>
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-pink-700 text-white p-3 md:p-6 rounded-full "
            type="submit"
          >
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginV2;
