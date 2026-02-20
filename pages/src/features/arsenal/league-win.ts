/** Approximate full-time of Spurs 2-2 Arsenal, 25 Apr 2004 (KO 15:05 UTC, 90+6 mins) */
export const leagueWinDate = new Date("2004-04-25T16:56:00Z");

/** Returns whole seconds elapsed since the league win */
export const secondsSinceLeagueWin = (now: Date = new Date()): number => {
  return Math.floor((now.getTime() - leagueWinDate.getTime()) / 1000);
};

/** Formats a large number with locale-aware thousand separators */
export const formatSeconds = (seconds: number, localeTag = "en-GB"): string => {
  return seconds.toLocaleString(localeTag);
};
