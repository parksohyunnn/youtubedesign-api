import { GoHomeFill } from "react-icons/go";
import { MdRecommend } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiCinema4D } from "react-icons/si";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "홈",
        icon: <GoHomeFill />,
        src: "/Home"
    },
    {
        title: "추천",
        icon: <MdRecommend />,
        src: "/Recommend"
    },
    {
        title: "인기",
        icon: <RiVipCrownLine />,
        src: "/Popularity"
    },
    {
        title: "디자인 사이트",
        icon: <CgWebsite />,
        src: "/Website"
    },
    {
        title: "포토샵",
        icon: <SiAdobephotoshop />,
        src: "/Photoshop"
    },
    {
        title: "일러스트",
        icon: <SiAdobeillustrator />,
        src: "/Illustration"
    },
    {
        title: "피그마",
        icon: <FiFigma />,
        src: "/Figma"
    },
    {
        title: "프리미어 프로",
        icon: <SiAdobepremierepro />,
        src: "/PremierPro"
    },
    {
        title: "애프터이펙트",
        icon: <SiAdobeaftereffects />,
        src: "/AfterEffects"
    },
    {
        title: "시네마 4D",
        icon: <SiCinema4D />,
        src: "/Cinema4d"
    },
]

export const searchKeyword = [
    {
        title: "디자인",
        src: "/search/디자인"
    },
    {
        title: "디자인툴",
        src: "/search/디자인툴"
    },
    {
        title: "포토샵",
        src: "/search/포토샵"
    },
    {
        title: "일러스트",
        src: "/search/일러스트"
    },
    {
        title: "디자인강의",
        src: "/search/디자인강의"
    },
    {
        title: "영상강의",
        src: "/search/영상강의"
    },
    {
        title: "3D",
        src: "/search/3D"
    },
    {
        title: "design",
        src: "/search/design"
    },
    {
        title: "로고",
        src: "/search/로고"
    },
    {
        title: "portfolio",
        src: "/search/portfolio"
    },
    {
        title: "캐릭터제작",
        src: "/search/캐릭터제작"
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/parksohyunnn",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://github.com/parksohyunnn",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://github.com/parksohyunnn",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://github.com/parksohyunnn",
        icon: <AiOutlineInstagram />
    },
]