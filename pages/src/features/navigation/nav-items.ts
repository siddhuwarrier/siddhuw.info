export type PageId = "home" | "contact" | "cv" | "architecture";

export type NavItem = {
  href: string;
  pageId: PageId;
};

export const navItems: NavItem[] = [
  { href: "/", pageId: "home" },
  { href: "/contact", pageId: "contact" },
  { href: "/cv", pageId: "cv" },
  { href: "/architecture", pageId: "architecture" }
];

export const navItemClass = (pageId: PageId, activePage: PageId): string => {
  return pageId === activePage ? "active font-semibold" : "";
};
