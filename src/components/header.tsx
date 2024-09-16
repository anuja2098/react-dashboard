import { Input } from "@/components/ui/input";
import { LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();

  function goToLogin() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div className=" fixed h-[70px] w-screen bg-black-gray items-center flex justify-between text-white pl-20 z-10">
      <div className="">
        <Input
          className="bg-light-gray border-gray-700 w-72"
          placeholder="Search"
        />
      </div>
      <div className="flex text-white gap-6 p-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span onClick={goToLogin}>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
