/** @format */

import React from "react";
import ReviewCard from "../Card";
import { Box, Grid } from "@mui/material";
import useViewModel from "./useViewModel";

export default function ItemList() {
  const { DUMMY_DATA } = useViewModel();
  return (
    <div>
      <Box sx={{ p: 3, display: "flex" }}>
        <Grid container spacing={2}>
          {DUMMY_DATA.length > 0 &&
            DUMMY_DATA.map((data) => {
              return (
                <Grid item sx={{ p: 2 }} key={data?.id}>
                  <ReviewCard data={data} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
