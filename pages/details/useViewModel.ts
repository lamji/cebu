/** @format */

import useStyles from "./useStyles";
import { v4 as uuidv4 } from "uuid";

export default function useViewModel() {
  const starRatings = [
    {
      id: uuidv4(),
      count: 1,
    },
    {
      id: uuidv4(),
      count: 1,
    },
    {
      id: uuidv4(),
      count: 1,
    },
    {
      id: uuidv4(),
      count: 1,
    },
    {
      id: uuidv4(),
      count: 1,
    },
  ];
  const classes = useStyles();
  return {
    classes,
    starRatings,
  };
}
