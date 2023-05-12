/** @format */

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import useViewModel from "./useViewModel";

export default function Jumbotron() {
  const { classes } = useViewModel();
  return (
    <div style={classes?.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ p: 4 }}
      >
        <Grid item xs={6}>
          <Typography variant="h4" sx={classes?.header}>
            Discover Your Next Adventure
          </Typography>
          <Box sx={classes?.body}>
            <Typography variant="body1">
              Welcome to CebAdventure, the ultimate platform for exploring and
              sharing unique travel destinations. Whether {`you're`} a seasoned
              traveler or a curious wanderer, our website is your go-to resource
              for discovering new places to visit, and {`it's`} open to everyone
              to contribute their favorite spots.
            </Typography>
          </Box>
          <Button variant="contained" sx={{ mt: 3 }}>
            Add Place
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Box sx={classes?.box}>
            <Image
              src="/cebu.jpg"
              alt="Picture of the author"
              width={400}
              height={300}
              style={{
                borderRadius: "21% 79% 80% 20% / 35% 44% 56% 65%",
                marginTop: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
