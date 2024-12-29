import { Skill } from "./Skills.interface";
import { URLS, DESCRIPTIONS } from "./Skills.data";

export const INTRO = `The main area of expertise is front end 
development (client side of the web). HTML, CSS, JS, TS building small and 
medium web applications on React, custom plugins, features, animations, 
and coding interactive layouts.`;

export const SKILLS: Skill[] = [
  { url: URLS.TYPESCRIPT, description: DESCRIPTIONS.TYPESCRIPT },
  { url: URLS.JAVASCRIPT, description: DESCRIPTIONS.JAVASCRIPT },
  { url: URLS.PYTHON, description: DESCRIPTIONS.PYTHON },
  { url: URLS.CPP, description: DESCRIPTIONS.CPP },
  { url: URLS.C, description: DESCRIPTIONS.C },
  { url: URLS.REACT, description: DESCRIPTIONS.REACT },
  { url: URLS.NODE, description: DESCRIPTIONS.NODE },
  { url: URLS.REDUX, description: DESCRIPTIONS.REDUX },
  { url: URLS.FASTAPI, description: DESCRIPTIONS.FASTAPI },
  { url: URLS.DOCKER, description: DESCRIPTIONS.DOCKER },
  { url: URLS.CSS3, description: DESCRIPTIONS.CSS3 },
  { url: URLS.HTML5, description: DESCRIPTIONS.HTML5 },
  { url: URLS.POSTGRESQL, description: DESCRIPTIONS.POSTGRESQL },
  { url: URLS.GIT, description: DESCRIPTIONS.GIT },
];
