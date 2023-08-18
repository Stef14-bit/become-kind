interface NavLink {
  linkName: string;
  link: string;
}

const navList: NavLink[] = [
  { linkName: "Home", link: "/" },
  { linkName: "Projects", link: "/projects" },
  { linkName: "Books", link: "/" },
  { linkName: "Gallery", link: "/gallery" },
  { linkName: "Blog", link: "/blog" },
  { linkName: "Contact", link: "/" },
];

export default navList;
