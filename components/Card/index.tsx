/** @format */

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function ReviewCard(dataIn: any) {
  const { data } = dataIn;
  const router = useRouter();
  return (
    <Box sx={{ p: 0 }}>
      <Card sx={{ maxWidth: 345, p: 0 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.title.charAt(0)}
            </Avatar>
          }
          title={data.title}
          subheader={data.date}
        />
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => router.push(`/details/${data?.id}`)}
        >
          <CardMedia
            component="img"
            height="194"
            image={data?.cover}
            alt="Paella dish"
          />
        </Box>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data?.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <FavoriteIcon />{" "}
            <Typography variant="body1" sx={{ fontSize: "10px" }}>
              {data?.likes} {data.likes > 1 ? "likes" : "like"}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography variant="body1" fontSize={"12px"}>
              See more
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
