export type PageId = "home" | "contact" | "cv";

export type NavItem = {
  href: string;
  pageId: PageId;
};

export const navItems: NavItem[] = [
  { href: "/", pageId: "home" },
  { href: "/cv", pageId: "cv" }
];

export const navItemClass = (pageId: PageId, activePage: PageId): string => {
  return pageId === activePage ? "active font-semibold" : "";
};
