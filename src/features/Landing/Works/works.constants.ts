import { WorkEntity } from "./works.types";
import { DESCRIPTION } from "./works.data";
import styles from "./works.module.css";
import EducationImg from "@/assets/Education-360x280.svg";
import GrpImg from "@/assets/GRP-360x280.svg";

export const TOOLS_TITLE = "Development tools";

export const WORKS: WorkEntity[] = [
  {
    title: "Education",
    description: DESCRIPTION.EDUCATION,
    tools: [
      "React",
      "WebSocket",
      "MUI",
      "Redux",
      "Axios",
      "Intersection Observer",
      "Flask",
    ],
    img: EducationImg,
    className: styles.workEducation,
  },
  {
    title: "GRP-AI",
    description: DESCRIPTION.GRP_AI,
    tools: [
      "React",
      "Redux",
      "Django",
      "DRF",
      "Pandas",
      "PyTorch",
      "Scikit-learn",
    ],
    img: GrpImg,
    className: styles.workGRP,
  },
];
