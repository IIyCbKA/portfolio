import { WorkEntity } from "./works.types";
import styles from "./works.module.css";
import EducationImg from "@/assets/Education-360x280.svg";
import GrpImg from "@/assets/GRP-360x280.svg";

export const TOOLS_TITLE = "Development tools";

const enum HREFS {
  NOXLIGHT7 = "https://github.com/noxlight7",
}

const enum NICKNAMES {
  NOXLIGHT7 = "noxlight7",
}

export const WORKS: WorkEntity[] = [
  {
    title: "Education",
    description: (
      <>
        {`A fully functional website similar to the Google Classroom service for 
        a university environment with statistics collection. Created in 
        collaboration with `}
        <a href={HREFS.NOXLIGHT7} target="_blank">
          {NICKNAMES.NOXLIGHT7}
        </a>
        {`. Design by IIyCbKA.`}
      </>
    ),
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
    description: (
      <>
        {`A service for exploring a neural network model that predicts the gross
        regional product of Russian regions based on available data. Developed in
        collaboration with `}
        <a href={HREFS.NOXLIGHT7} target="_blank">
          {NICKNAMES.NOXLIGHT7}
        </a>
        {`. Design by IIyCbKA.`}
      </>
    ),
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
