import { tabListType } from "../types/tabListType";
import { TiHomeOutline, TiTag } from "react-icons/ti";
import { IoPeopleOutline, IoPricetagOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { BiCollection } from "react-icons/bi";
export const tabList: tabListType[] = [
  {
    routename: "Home",
    routeUrl: "/Home",
    routeIcon: TiHomeOutline,
  },
  {
    routename: "Ask",
    routeUrl: "/Ask",
    routeIcon: BsQuestionSquare,
  },
  {
    routename: "Tags",
    routeUrl: "/Tags",
    routeIcon: IoPricetagOutline,
  },
  {
    routename: "Communities",
    routeUrl: "/Communities",
    routeIcon: IoPeopleOutline,
  },
  {
    routename: "Collections",
    routeUrl: "/Collections",
    routeIcon: BiCollection,
  },
];
