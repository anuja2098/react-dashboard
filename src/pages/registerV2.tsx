// import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/LogoIcon.png";
import imageBackground from "../assets/image.png";
import googleImage from "../assets/google.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram 1.png";
import linkedInImage from "../assets/linkedin 1.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { LineInput } from "@/components/lineInput";
import {
  BriefcaseBusiness,
  EyeIcon,
  EyeOffIcon,
  Mail,
  UserRound,
  UserSearch,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/services/user.service";
import { useToast } from "@/hooks/use-toast";

const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: "firstName must be at least 1 characters.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "firstName must contain only alphabets.",
    }),
  lastName: z
    .string()
    .min(1, {
      message: "lastName must be at least 1 characters.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "lastName must contain only alphabets.",
    }),
  email: z
    .string()
    .min(5, {
      message: "email must be at least 5 characters.",
    })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "email format invalid",
    }),

  jobTitle: z
    .string()
    .min(2, {
      message: "jobtitle must be at least 2 characters.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "jobtitle must contain only alphabets.",
    }),

  gender: z
    .string()
    .min(1, {
      message: "gender must be at least 1 characters.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "gender must contain only alphabets.",
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

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const RegisterV2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  // const [showSignIn, setShowSign] = useState(true);
  const navigate = useNavigate();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      jobTitle: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterSchemaType) {
    try {
      if (data) {
        const response = await registerUser(data);
        toast({
          description: response?.message || "Success",
        });
        navigate("/login");
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

  // function toggleSignUp() {
  //   setShowSign(!showSignIn);
  // }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <div className="text-black  h-screen flex flex-col md:flex-row w-full bg-blue-100">
      <div className="md:w-1/2 bg-blue-100 flex flex-col items-center justify-center md:items-start p-2 md:p-6">
        <div className="flex items-center justify center gap-3">
          <img src={logoIcon} />
          <p className="text-pink-700 text-base flex flex-col items-center justify-center md:text-2xl font-extrabold">
            {" "}
            3DM
          </p>
        </div>

        <p className="text-center md:text-left text-base md:text-xl w-full md:w-2/3 py:3 md:py-6">
          Explore 3D icons,Mockups and Illustration here!{" "}
        </p>

        <div>
          <img src={imageBackground} />
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 justify center items-center bg-white md:rounded-tl-[200px] p-4 md:p-0 ">
        <div className="text-xl font-bold text-left pb-4 text-pink-700 md:pl-20 md:pt-32 flex flex-row">
          Create Account
        </div>

        <div className="flex justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-[70%] md:max-w-full"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LineInput
                        className="flex w-full md:w-[400px] p-0.5 focus:outline-none"
                        placeholder=" First Name"
                        icon={<UserRound />}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LineInput
                        className="flex w-full md:w-[400px] p-0.5 focus:outline-none"
                        placeholder=" Last Name"
                        icon={<UserRound />}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LineInput
                        className="flex w-full md:w-[400px] p-0.5 focus:outline-none"
                        placeholder="Email Id "
                        icon={<Mail />}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LineInput
                        className=" w-[400px] p-0.5 focus:outline-none"
                        placeholder=" Job Title"
                        icon={<BriefcaseBusiness />}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LineInput
                        className=" w-[400px] p-0.5 focus:outline-none"
                        placeholder=" Gender"
                        icon={<UserSearch />}
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
                  <FormItem>
                    <FormControl>
                      <>
                        <LineInput
                          className="p-0.5  w-[400px] focus:outline-none"
                          placeholder=" Password"
                          {...field}
                          icon={
                            <div
                              className="bg-white border-none pr-2"
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {" "}
                              {showPassword ? (
                                <EyeIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              ) : (
                                <EyeOffIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              )}
                              <span className="sr-only">
                                {showPassword
                                  ? "Hide password"
                                  : "Show password"}
                              </span>
                            </div>
                          }
                          type={showPassword ? "text" : "password"}
                        />
                      </>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full text-gray-500 ">
                I accept the
                <span className="text-pink-700"> terms of use </span> and
                <span className="text-pink-700"> privacy policy</span>
              </div>
              <Button
                className="w-full text-white p-6 rounded-full bg-pink-700"
                type="submit"
                // onClick={toggleSignUp}
                // onClick={goToLogin}
              >
                {/* {showSignIn ? "Sign In" : "Sign up"} */}
                Register
              </Button>
              <div className="flex items-center justify-center text-gray-400">
                <hr className="w-[80px] " />
                <p className="p-0.5 text-md"> Or Sign Up with</p>

                <hr className="w-[80px]" />
              </div>
              <div className="flex justify-around items-center rounded-xl">
                <img
                  src={googleImage}
                  h-4
                  w-4
                  className="ring-2 ring-gray-400 rounded-full p-4  h-14
                  w-14"
                />
                <img
                  src={facebookImage}
                  className="ring-2 ring-gray-400 rounded-full p-4 h-14
                  w-14"
                />
                <img
                  src={instagramImage}
                  className="ring-2 ring-gray-400 rounded-full p-4 h-14
                  w-14"
                />
                <img
                  src={linkedInImage}
                  className="ring-2 ring-gray-400 rounded-full p-4 h-14
                  w-14"
                />
              </div>

              <div className="text-gray-400 text-center md:text-left">
                Already have an account?{" "}
                <span
                  onClick={goToLogin}
                  className="text-pink-700 font-bold cursor-pointer"
                >
                  Log In{" "}
                </span>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterV2;
