import {
  LoginIcon,
  IdentificationIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

interface MenuItem {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode; // Поскольку иконка является JSX элементом, ReactNode подходит для этого типа
  underlined: boolean;
}

export const NAVIGATION: MenuItem[] = [
  {
    id: 1,
    name: "Login",
    link: "/signin",
    icon: <LoginIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    underlined: false,
  },
  {
    id: 2,
    name: "Sign Up",
    link: "/signup",
    icon: (
      <IdentificationIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
    ),
    underlined: true,
  },
  {
    id: 3,
    name: "Profile",
    link: "/profile",
    icon: <UserIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    underlined: true,
  },
  {
    id: 4,
    name: "Cart",
    link: "/cart",
    icon: (
      <ShoppingCartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
    ),
    underlined: false,
  },
];
