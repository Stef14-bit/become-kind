interface NavLink {
  linkName: string;
  link: string;
}

const navList: NavLink[] = [
  { linkName: "Home", link: "/" },
  { linkName: "Projects", link: "/projects" },
  { linkName: "Books", link: "/books" },
  { linkName: "Gallery", link: "/gallery" },
  { linkName: "Blog", link: "/blog" },
  { linkName: "Contact", link: "/contact_us" },
];

export default navList;
