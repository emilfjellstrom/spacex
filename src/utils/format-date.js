export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

const timeZones = {
  "-12:00": "Etc/GMT+12",
  "-11:00": "Etc/GMT+11",
  "-10:00": "Etc/GMT+10",
  "-09:00": "Etc/GMT+9",
  "-08:00": "Etc/GMT+8",
  "-07:00": "Etc/GMT+7",
  "-06:00": "Etc/GMT+6",
  "-05:00": "Etc/GMT+5",
  "-04:00": "Etc/GMT+4",
  "-03:00": "Etc/GMT+3",
  "-02:00": "Etc/GMT+2",
  "-01:00": "Etc/GMT+1",
  "-00:00": "Etc/GMT",
  "+00:00": "Etc/GMT",
  "+01:00": "Etc/GMT-1",
  "+02:00": "Etc/GMT-2",
  "+03:00": "Etc/GMT-3",
  "+04:00": "Etc/GMT-4",
  "+05:00": "Etc/GMT-5",
  "+06:00": "Etc/GMT-6",
  "+07:00": "Etc/GMT-7",
  "+08:00": "Etc/GMT-8",
  "+09:00": "Etc/GMT-9",
  "+10:00": "Etc/GMT-10",
  "+11:00": "Etc/GMT-11",
  "+12:00": "Etc/GMT-12",
};
/**
 * This could be replaced with google timezone api since we have access to launch site long / lat 
 * {@link https://developers.google.com/maps/documentation/timezone/get-started#json developers.google.com}.
 */

export function formatLocalDateTime(timestampLocal, timestampUTC) {
  const regex = new RegExp("Z");
  const dateLocal = new Date(timestampLocal);
  let zone = "UTC";

  if (!regex.test(timestampLocal)) {
    const offset = timestampLocal.substring(timestampLocal.length - 6);

    zone = timeZones[offset];
  }

  return dateLocal.toLocaleString("en-US", {
    timeZone: zone,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });
}
