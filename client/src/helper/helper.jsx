// import { AxiosResponse } from "axios";
import axios from "axios";
import { alerts } from "../constant/alert";

export const getDataFromUrl = async (url, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return await axios.get(url, { headers }).then((res) => res);
};

export function checkPasswordEquality(password, confirmPassword) {
  return password === confirmPassword;
}

export function alertFunction(idStation, alert) {
  const id = alert?.split("/")[2];
  const type = alert?.split("/")[1];

  if (idStation !== id) {
    return;
  }
  return alerts[type];
}
/**
 * @description Function to decode Google OAuth token
 * @param token: string
 * @returns ticket object
 */

const object = [
  { time: "2023-05-27T03:00:00.000Z", value: "19.8" },
  { time: "2023-05-27T03:05:00.000Z", value: "46.1" },
  { time: "2023-05-27T03:10:00.000Z", value: "35.8" },
  { time: "2023-05-27T03:15:00.000Z", value: "43.7" },
  { time: "2023-05-27T03:20:00.000Z", value: "34.4" },
  { time: "2023-05-27T03:25:00.000Z", value: "46.1" },
  { time: "2023-05-27T03:30:00.000Z", value: "46.1" },
  { time: "2023-05-27T03:35:00.000Z", value: "23.9" },
  { time: "2023-05-27T03:40:00.000Z", value: "29.3" },
  { time: "2023-05-27T03:45:00.000Z", value: "38.9" },
  { time: "2023-05-27T03:50:00.000Z", value: "46.8" },
  { time: "2023-05-27T03:55:00.000Z", value: "22.5" },
  { time: "2023-05-27T04:00:00.000Z", value: "44.7" },
  { time: "2023-05-27T04:05:00.000Z", value: "37.4" },
  { time: "2023-05-27T04:10:00.000Z", value: "30.1" },
  { time: "2023-05-27T04:15:00.000Z", value: "36.1" },
  { time: "2023-05-27T04:20:00.000Z", value: "36.5" },
  { time: "2023-05-27T04:25:00.000Z", value: "45.6" },
  { time: "2023-05-27T04:30:00.000Z", value: "49.0" },
  { time: "2023-05-27T04:35:00.000Z", value: "23.2" },
  { time: "2023-05-27T04:40:00.000Z", value: "42.5" },
  { time: "2023-05-27T04:45:00.000Z", value: "35.5" },
  { time: "2023-05-27T04:50:00.000Z", value: "27.8" },
  { time: "2023-05-27T04:55:00.000Z", value: "27.3" },
  { time: "2023-05-27T05:00:00.000Z", value: "38.1" },
  { time: "2023-05-27T05:05:00.000Z", value: "46.4" },
  { time: "2023-05-27T05:10:00.000Z", value: "28.6" },
  { time: "2023-05-27T05:15:00.000Z", value: "21.9" },
  { time: "2023-05-27T05:20:00.000Z", value: "19.9" },
  { time: "2023-05-27T05:25:00.000Z", value: "47.5" },
  { time: "2023-05-27T05:30:00.000Z", value: "28.3" },
  { time: "2023-05-27T05:35:00.000Z", value: "43.1" },
  { time: "2023-05-27T05:40:00.000Z", value: "25.5" },
  { time: "2023-05-27T05:45:00.000Z", value: "46.5" },
  { time: "2023-05-27T05:50:00.000Z", value: "34.9" },
  { time: "2023-05-27T05:55:00.000Z", value: "36.8" },
  { time: "2023-05-27T06:00:00.000Z", value: "44.7" },
  { time: "2023-05-27T06:05:00.000Z", value: "31.1" },
  { time: "2023-05-27T06:10:00.000Z", value: "31.8" },
  { time: "2023-05-27T06:15:00.000Z", value: "23.7" },
  { time: "2023-05-27T06:20:00.000Z", value: "16.4" },
  { time: "2023-05-27T06:25:00.000Z", value: "34.7" },
  { time: "2023-05-27T06:30:00.000Z", value: "37.0" },
  { time: "2023-05-27T06:35:00.000Z", value: "20.4" },
  { time: "2023-05-27T06:40:00.000Z", value: "34.4" },
  { time: "2023-05-27T06:45:00.000Z", value: "35.5" },
  { time: "2023-05-27T06:50:00.000Z", value: "27.5" },
  { time: "2023-05-27T06:55:00.000Z", value: "48.1" },
  { time: "2023-05-27T07:00:00.000Z", value: "33.9" },
  { time: "2023-05-27T07:05:00.000Z", value: "35.3" },
  { time: "2023-05-27T07:10:00.000Z", value: "34.1" },
  { time: "2023-05-27T07:15:00.000Z", value: "37.8" },
  { time: "2023-05-27T07:20:00.000Z", value: "47.1" },
  { time: "2023-05-27T07:25:00.000Z", value: "31.4" },
  { time: "2023-05-27T07:30:00.000Z", value: "22.1" },
  { time: "2023-05-27T07:35:00.000Z", value: "38.0" },
  { time: "2023-05-27T07:40:00.000Z", value: "42.8" },
  { time: "2023-05-27T07:45:00.000Z", value: "39.9" },
  { time: "2023-05-27T07:50:00.000Z", value: "30.7" },
  { time: "2023-05-27T07:55:00.000Z", value: "50.0" },
  { time: "2023-05-27T08:00:00.000Z", value: "16.4" },
  { time: "2023-05-27T08:05:00.000Z", value: "23.3" },
  { time: "2023-05-27T08:10:00.000Z", value: "46.8" },
  { time: "2023-05-27T08:15:00.000Z", value: "41.5" },
  { time: "2023-05-27T08:20:00.000Z", value: "41.4" },
  { time: "2023-05-27T08:25:00.000Z", value: "21.7" },
  { time: "2023-05-27T08:30:00.000Z", value: "47.8" },
  { time: "2023-05-27T08:35:00.000Z", value: "43.2" },
  { time: "2023-05-27T08:40:00.000Z", value: "24.1" },
  { time: "2023-05-27T08:45:00.000Z", value: "48.1" },
  { time: "2023-05-27T08:50:00.000Z", value: "31.5" },
  { time: "2023-05-27T08:55:00.000Z", value: "45.8" },
  { time: "2023-05-27T09:00:00.000Z", value: "48.2" },
  { time: "2023-05-27T09:05:00.000Z", value: "30.3" },
  { time: "2023-05-27T09:10:00.000Z", value: "39.5" },
  { time: "2023-05-27T09:15:00.000Z", value: "37.8" },
  { time: "2023-05-27T09:20:00.000Z", value: "41.5" },
  { time: "2023-05-27T09:25:00.000Z", value: "22.6" },
  { time: "2023-05-27T09:30:00.000Z", value: "49.4" },
  { time: "2023-05-27T09:35:00.000Z", value: "31.6" },
  { time: "2023-05-27T09:40:00.000Z", value: "30.0" },
  { time: "2023-05-27T09:45:00.000Z", value: "31.4" },
  { time: "2023-05-27T09:50:00.000Z", value: "36.8" },
  { time: "2023-05-27T09:55:00.000Z", value: "31.5" },
  { time: "2023-05-27T10:00:00.000Z", value: "31.7" },
  { time: "2023-05-27T10:05:00.000Z", value: "20.8" },
  { time: "2023-05-27T10:10:00.000Z", value: "32.3" },
  { time: "2023-05-27T10:15:00.000Z", value: "39.6" },
  { time: "2023-05-27T10:20:00.000Z", value: "39.8" },
  { time: "2023-05-27T10:25:00.000Z", value: "48.3" },
  { time: "2023-05-27T10:30:00.000Z", value: "15.4" },
  { time: "2023-05-27T10:35:00.000Z", value: "27.3" },
  { time: "2023-05-27T10:40:00.000Z", value: "35.1" },
  { time: "2023-05-27T10:45:00.000Z", value: "36.5" },
  { time: "2023-05-27T10:50:00.000Z", value: "24.1" },
  { time: "2023-05-27T10:55:00.000Z", value: "22.4" },
  { time: "2023-05-27T11:00:00.000Z", value: "18.4" },
  { time: "2023-05-27T11:05:00.000Z", value: "18.5" },
  { time: "2023-05-27T11:10:00.000Z", value: "39.8" },
  { time: "2023-05-27T11:15:00.000Z", value: "35.1" },
  { time: "2023-05-27T11:20:00.000Z", value: "49.5" },
  { time: "2023-05-27T11:25:00.000Z", value: "49.0" },
  { time: "2023-05-27T11:30:00.000Z", value: "22.9" },
  { time: "2023-05-27T11:35:00.000Z", value: "30.9" },
  { time: "2023-05-27T11:40:00.000Z", value: "31.4" },
  { time: "2023-05-27T11:45:00.000Z", value: "38.0" },
  { time: "2023-05-27T11:50:00.000Z", value: "15.9" },
  { time: "2023-05-27T11:55:00.000Z", value: "44.1" },
  { time: "2023-05-27T12:00:00.000Z", value: "23.1" },
  { time: "2023-05-27T12:05:00.000Z", value: "16.1" },
  { time: "2023-05-27T12:10:00.000Z", value: "46.0" },
  { time: "2023-05-27T12:15:00.000Z", value: "48.0" },
  { time: "2023-05-27T12:20:00.000Z", value: "38.0" },
  { time: "2023-05-27T12:25:00.000Z", value: "38.1" },
  { time: "2023-05-27T12:30:00.000Z", value: "40.7" },
  { time: "2023-05-27T12:35:00.000Z", value: "47.2" },
  { time: "2023-05-27T12:40:00.000Z", value: "33.4" },
  { time: "2023-05-27T12:45:00.000Z", value: "19.1" },
  { time: "2023-05-27T12:50:00.000Z", value: "22.1" },
  { time: "2023-05-27T12:55:00.000Z", value: "48.6" },
  { time: "2023-05-27T13:00:00.000Z", value: "28.7" },
  { time: "2023-05-27T13:05:00.000Z", value: "27.3" },
  { time: "2023-05-27T13:10:00.000Z", value: "43.7" },
  { time: "2023-05-27T13:15:00.000Z", value: "25.9" },
  { time: "2023-05-27T13:20:00.000Z", value: "42.1" },
  { time: "2023-05-27T13:25:00.000Z", value: "28.7" },
  { time: "2023-05-27T13:30:00.000Z", value: "42.7" },
  { time: "2023-05-27T13:35:00.000Z", value: "42.4" },
  { time: "2023-05-27T13:40:00.000Z", value: "18.1" },
  { time: "2023-05-27T13:45:00.000Z", value: "43.7" },
  { time: "2023-05-27T13:50:00.000Z", value: "42.5" },
  { time: "2023-05-27T13:55:00.000Z", value: "23.1" },
  { time: "2023-05-27T14:00:00.000Z", value: "15.4" },
  { time: "2023-05-27T14:05:00.000Z", value: "22.5" },
  { time: "2023-05-27T14:10:00.000Z", value: "43.8" },
  { time: "2023-05-27T14:15:00.000Z", value: "27.0" },
  { time: "2023-05-27T14:20:00.000Z", value: "35.3" },
  { time: "2023-05-27T14:25:00.000Z", value: "15.2" },
  { time: "2023-05-27T14:30:00.000Z", value: "36.1" },
  { time: "2023-05-27T14:35:00.000Z", value: "42.4" },
  { time: "2023-05-27T14:40:00.000Z", value: "36.5" },
  { time: "2023-05-27T14:45:00.000Z", value: "28.9" },
  { time: "2023-05-27T14:50:00.000Z", value: "41.9" },
  { time: "2023-05-27T14:55:00.000Z", value: "44.9" },
  { time: "2023-05-27T15:00:00.000Z", value: "34.5" },
  { time: "2023-05-27T15:05:00.000Z", value: "36.1" },
  { time: "2023-05-27T15:10:00.000Z", value: "34.0" },
  { time: "2023-05-27T15:15:00.000Z", value: "31.7" },
  { time: "2023-05-27T15:20:00.000Z", value: "17.2" },
  { time: "2023-05-27T15:25:00.000Z", value: "23.6" },
  { time: "2023-05-27T15:30:00.000Z", value: "16.1" },
  { time: "2023-05-27T15:35:00.000Z", value: "49.5" },
  { time: "2023-05-27T15:40:00.000Z", value: "46.6" },
  { time: "2023-05-27T15:45:00.000Z", value: "25.2" },
  { time: "2023-05-27T15:50:00.000Z", value: "26.9" },
  { time: "2023-05-27T15:55:00.000Z", value: "24.0" },
  { time: "2023-05-27T16:00:00.000Z", value: "19.0" },
  { time: "2023-05-27T16:05:00.000Z", value: "50.0" },
  { time: "2023-05-27T16:10:00.000Z", value: "39.5" },
  { time: "2023-05-27T16:15:00.000Z", value: "39.0" },
  { time: "2023-05-27T16:20:00.000Z", value: "31.3" },
  { time: "2023-05-27T16:25:00.000Z", value: "44.2" },
  { time: "2023-05-27T16:30:00.000Z", value: "39.4" },
  { time: "2023-05-27T16:35:00.000Z", value: "32.6" },
  { time: "2023-05-27T16:40:00.000Z", value: "16.7" },
  { time: "2023-05-27T16:45:00.000Z", value: "31.3" },
  { time: "2023-05-27T16:50:00.000Z", value: "37.6" },
  { time: "2023-05-27T16:55:00.000Z", value: "20.7" },
  { time: "2023-05-27T17:00:00.000Z", value: "46.7" },
  { time: "2023-05-27T17:05:00.000Z", value: "49.3" },
  { time: "2023-05-27T17:10:00.000Z", value: "45.3" },
  { time: "2023-05-27T17:15:00.000Z", value: "35.2" },
  { time: "2023-05-27T17:20:00.000Z", value: "32.8" },
  { time: "2023-05-27T17:25:00.000Z", value: "33.0" },
  { time: "2023-05-27T17:30:00.000Z", value: "26.5" },
  { time: "2023-05-27T17:35:00.000Z", value: "25.9" },
  { time: "2023-05-27T17:40:00.000Z", value: "30.7" },
  { time: "2023-05-27T17:45:00.000Z", value: "41.5" },
  { time: "2023-05-27T17:50:00.000Z", value: "47.6" },
  { time: "2023-05-27T17:55:00.000Z", value: "40.8" },
];
