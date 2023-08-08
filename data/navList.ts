interface NavLink {
  linkName: string;
  link: string;
}

const navList: NavLink[] = [
  { linkName: "About Us", link: "/" },
  { linkName: "Projects", link: "/projects" },
  { linkName: "Books", link: "/" },
  { linkName: "Blog", link: "/" },
  { linkName: "Contact", link: "/" },
];

export default navList;
