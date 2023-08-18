import { StaticImageData } from "next/image";
interface projects {
  id: number;
  picture: string;
  picture_description: string;
  title: string;
  content: string;
}
const projects: projects[] = [
  {
    id: 1,
    picture:
      "https://become-kind.s3.eu-central-1.amazonaws.com/projects/project0.webp",
    picture_description: " two women chatting",
    title: "Eat Sleep Be Kind Repeat",
    content: "Transforming Lives",
  },
  {
    id: 2,
    picture:
      "https://become-kind.s3.eu-central-1.amazonaws.com/projects/project1.webp",
    picture_description: " kids playing",
    title: "COMMUNITY OUTREACH",
    content: "Empowering Others",
  },
  {
    id: 3,
    picture:
      "https://become-kind.s3.eu-central-1.amazonaws.com/projects/project2.webp",
    picture_description: " two women chatting",
    title: "EDUCATION",
    content: "Helping Those Who Need Us Most",
  },
];

export default projects;
