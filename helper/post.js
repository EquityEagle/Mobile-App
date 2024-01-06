import axios from "axios";
import { BASE_URL } from "./uri";

export async function LikeSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/like`
  );
  return response?.data;
}

export async function StarSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/star`
  );
  return response?.data;
}

// export const
