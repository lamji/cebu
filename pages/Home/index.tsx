/** @format */

import Jumbotron from "@/components/Jumbotron";
import useViewModel from "./useViewModel";
import { Box, Typography } from "@mui/material";
import ItemList from "@/components/ItemList";
import Search from "@/components/Search";

export default function Home() {
  const { classes } = useViewModel();
  return (
    <Box sx={classes?.root}>
      <Jumbotron />
      <Box>
        <Box sx={classes?.discover}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Discover this places
          </Typography>
          <Search />
        </Box>
        <ItemList />
      </Box>
    </Box>
  );
}
