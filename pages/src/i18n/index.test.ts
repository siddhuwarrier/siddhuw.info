import { describe, expect, it } from "vitest";

import { getMessages, localizedPath } from "./index";

describe("getMessages", () => {
  it("returns english messages", () => {
    expect(getMessages("en").nav.home).toBe("Home");
  });
});

describe("localizedPath", () => {
  it("returns root path for english home", () => {
    expect(localizedPath("en", "home")).toBe("/");
  });

  it("returns localized path for hindi contact", () => {
    expect(localizedPath("hi", "contact")).toBe("/hi/contact");
  });
});
