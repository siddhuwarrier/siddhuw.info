import { describe, it, expect } from "vitest";
import { secondsSinceLeagueWin, formatSeconds, leagueWinDate } from "./league-win";

describe("secondsSinceLeagueWin", () => {
  it("returns 0 at the exact moment of the win", () => {
    expect(secondsSinceLeagueWin(leagueWinDate)).toBe(0);
  });

  it("returns correct seconds for a known date", () => {
    const oneHourLater = new Date(leagueWinDate.getTime() + 3600 * 1000);
    expect(secondsSinceLeagueWin(oneHourLater)).toBe(3600);
  });

  it("floors partial seconds", () => {
    const halfSecondLater = new Date(leagueWinDate.getTime() + 1500);
    expect(secondsSinceLeagueWin(halfSecondLater)).toBe(1);
  });
});

describe("formatSeconds", () => {
  it("formats with thousand separators", () => {
    expect(formatSeconds(1234567)).toBe("1,234,567");
  });

  it("handles zero", () => {
    expect(formatSeconds(0)).toBe("0");
  });

  it("uses provided locale tag", () => {
    expect(formatSeconds(1234567, "de-DE")).toBe("1.234.567");
  });
});
