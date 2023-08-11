import program_img0 from "../assets/program_img0.webp";
import program_img1 from "../assets/program_img1.webp";
import program_img2 from "../assets/program_img2.webp";

import { StaticImageData } from "next/image";
interface projects {
  id: number;
  picture: StaticImageData;
  picture_description: string;
  title: string;
  content: string;
}
const projects: projects[] = [
  {
    id: 1,
    picture: program_img0,
    picture_description: " two women chatting",
    title: "Eat Sleep Be Kind Repeat",
    content: "Transforming Lives",
  },
  {
    id: 2,
    picture: program_img1,
    picture_description: " kids playing",
    title: "COMMUNITY OUTREACH",
    content: "Empowering Others",
  },
  {
    id: 3,
    picture: program_img2,
    picture_description: " two women chatting",
    title: "EDUCATION",
    content: "Helping Those Who Need Us Most",
  },
];

export default projects;
