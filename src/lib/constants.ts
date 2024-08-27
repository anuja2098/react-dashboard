import {
  Goal,
  PackageCheck,
  PackageX,
  ReceiptIndianRupee,
  Salad,
  ShoppingBasket,
  SquareMenu,
} from "lucide-react";
import { CounterWidgetType, ItemsCard } from "./types";

export const WIDGET_DATA: CounterWidgetType[] = [
  {
    icon: ShoppingBasket,
    name: "Total Orders",
    number: 75,
    isIncrease: true,
    value: 3,
    color: "purple-500",
  },
  {
    icon: PackageCheck,
    name: "Total Delivered",
    number: 70,
    isIncrease: false,
    value: 3,
    color: "green-500",
  },
  {
    icon: PackageX,
    name: "Total Cancelled",
    number: 5,
    isIncrease: true,
    value: 3,
    color: "red-500",
  },
  {
    icon: ReceiptIndianRupee,
    name: "Total Revenue",
    number: 12000,
    isIncrease: false,
    value: 3,
    color: "fuchsia-500",
  },
];

export const CUSTOMER_DATA = [
  {
    name: "Jenny Wilson",
    review:
      "The food was excellent so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens(gluten-free) which was also very good. They were very conscientous about gluten allergies",
  },
  {
    name: "Dianne Wilson",
    review:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    name: "Devon Lane",
    review:
      "Normally wings are wings, but theirs are lean, meaty, and tender, with a perfect balance of crispy skin and juicy interior. Each bite is an explosion of flavor, enhanced by their unique blend of spices and sauces. These wings aren't just a snack; they're a culinary experience that leaves you craving more.",
  },
];

export const CUSTOMERS = [
  {
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: 124.06,
    status: "Delivered",
    isDelivered: true,
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: 365.02,
    status: "Delivered",
    isDelivered: true,
  },
  {
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: 45.88,
    status: "Cancelled",
    isDelivered: false,
  },
  {
    image:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: 65.04,
    status: "Pending",
    isDelivered: false,
  },
  {
    image:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: 545.08,
    status: "Delivered",
    isDelivered: true,
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/02/77/75/81/360_F_277758134_N1DrPaZUdmXarAC1R5d624FkNZ1qD0hR.jpg",

    customer: "Andy Sharma",
    orderNo: "7643783",
    amount: 456.34,
    status: "Cancelled",
    isDelivered: false,
  },
];

export const ITEMS: ItemsCard[] = [
  {
    icon: Goal,
    title: "Goals",
    color: "cyan-500",
  },
  {
    icon: Salad,
    title: "Polular Dishes",
    color: "pink-500",
  },
  {
    icon: SquareMenu,
    title: "Menus",
    color: "lime-500",
  },
];
