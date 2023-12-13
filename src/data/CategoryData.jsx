import {
    GiLaptop, GiBottleVapors, GiHeartBottle, GiSofa, GiAmpleDress, GiSonicShoes, GiRunningShoe,
    GiDropEarrings, GiCeilingLight
} from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoFastFood } from "react-icons/io5";
import { Si4Chan } from "react-icons/si";
import { FaShirt } from "react-icons/fa6";
import { PiShirtFolded } from "react-icons/pi";
import { CgAppleWatch } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { BsHandbagFill, BsSunglasses } from "react-icons/bs";

export const CategoryData = {
    "smartphones": <SlScreenSmartphone />,
    "laptops": <GiLaptop />,
    "fragrances": <GiBottleVapors />,
    "skincare": <GiHeartBottle />,
    "groceries": <IoFastFood />,
    "home-decoration": <Si4Chan />,
    "furniture": <GiSofa />,
    "tops": <FaShirt />,
    "womens-dresses": <GiAmpleDress />,
    "womens-shoes": <GiSonicShoes />,
    "mens-shirts": <PiShirtFolded />,
    "mens-shoes": <GiRunningShoe />,
    "mens-watches": <FiWatch />,
    "womens-watches": <CgAppleWatch />,
    "womens-bags": <BsHandbagFill />,
    "womens-jewellery": <GiDropEarrings />,
    "sunglasses": <BsSunglasses />,
    "lighting": <GiCeilingLight />
};