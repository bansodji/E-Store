import React from 'react';
import { IoShirtOutline, IoShirt,IoBagOutline,IoBag  } from "react-icons/io5";
import { GoHome,GoHomeFill  } from "react-icons/go";
import { MdCategory ,MdOutlineCategory } from "react-icons/md";

export const NavListOutline = {
    "home": <GoHome />,
    "shop": <IoBagOutline />,
    "category": <MdOutlineCategory  />,
    "trending": <IoShirtOutline />,
};

export const NavListSolid = {
    "home": <GoHomeFill />,
    "shop": <IoBag />,
    "category": <MdCategory />,
    "trending": <IoShirt />,
};