import styles from "./Works.module.css";
import EducationImg from "../../../assets/Education-360x280.svg";

const enum HREFS {
  NOXLIGHT7 = "https://github.com/noxlight7",
}

export const enum TITLES {
  FIRST_WORK = "Education",
}

export const DESCRIPTION = {
  FIRST_WORK: (
    <>
      A fully functional website similar to the Google Classroom service for a
      university environment. Created in collaboration with{" "}
      <a href={HREFS.NOXLIGHT7} target="_blank">
        noxlight7
      </a>
      . Design by IIyCbKA.
    </>
  ),
};

export const TOOLS = {
  FIRST_WORK: [
    "React",
    "Hooks",
    "MUI",
    "Redux",
    "Axios",
    "Intersection Observer",
  ],
};

export const IMGS = {
  FIRST_WORK: EducationImg,
};

export const CLASS_NAMES = {
  FIRST_WORK: styles.workEducation,
};
