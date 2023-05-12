/** @format */
import { v4 as uuidv4 } from "uuid";

export default function useViewModel() {
  const DUMMY_DATA = [
    {
      id: uuidv4(),
      title: "Talisay",
      date: "10/25/1991",
      cover:
        "https://kawasancanyoneeringsb.com/wp-content/uploads/2022/02/kawasan-falls.jpg",
      images: [],
      desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      likes: 4,
    },
  ];

  return {
    DUMMY_DATA,
  };
}
