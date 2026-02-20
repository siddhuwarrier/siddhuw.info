import { describe, expect, it } from "vitest";

import { navItemClass, navItems } from "./nav-items";

describe("navItems", () => {
  it("contains home contact and cv routes", () => {
    expect(navItems.map((item) => item.href)).toEqual(["/", "/contact", "/cv"]);
  });
});

describe("navItemClass", () => {
  it("returns active class for matching page", () => {
    expect(navItemClass("contact", "contact")).toBe("active font-semibold");
  });

  it("returns empty class for non-matching page", () => {
    expect(navItemClass("contact", "home")).toBe("");
  });
});
