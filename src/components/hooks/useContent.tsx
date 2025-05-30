import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../Config";

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setContents(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch content:", error);
      });
  }, []);

  return contents;
}
