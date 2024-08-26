import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const RegisterSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name must be at least 1 characters.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "Name must contain only alphabets.",
    }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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

const Register = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    if (data.name && data.username && data.password) {
      navigate("/login");
    } else {
      console.log("Forms value are missing");
    }
  }

  function GoToLogin() {
    navigate("/login");
  }

  return (
    <div className="">
      <h1 className="text-3xl flex space-y-4 ">Welcome</h1>

      <h3 className="mb-4 cursor-pointer" onClick={GoToLogin}>
        Already registered login now. Login
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" onClick={GoToLogin}>
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
