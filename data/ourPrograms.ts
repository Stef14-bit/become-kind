import { StaticImageData } from "next/image";
import program_img0 from "../assets/program_img0.webp";
import program_img1 from "../assets/program_img1.webp";
import program_img2 from "../assets/program_img2.webp";

interface ourPrograms {
  title: string;
  content: string;
  picture: StaticImageData;
}

const ourPrograms: ourPrograms[] = [
  { picture: program_img0, title: "title 01", content: "Content 01" },
  { picture: program_img1, title: "Title 02", content: "Content 02" },
  { picture: program_img2, title: "Title 03", content: "Content 03" },
];

export default ourPrograms;
