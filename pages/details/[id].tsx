/** @format */

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { red } from "@mui/material/colors";
import useViewModel from "./useViewModel";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Details() {
  const { classes, starRatings } = useViewModel();
  return (
    <div style={classes?.root}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          Images
        </Grid>
        <Grid item xs={3} sx={classes.comment}>
          <Box>
            <Card
              sx={{
                boxShadow: "none",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    T
                  </Avatar>
                }
                title="Talisay"
                subheader="10/25/1991"
              />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    p: 2,
                  }}
                >
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like
                </Typography>
              </Box>
              <Divider />
              <Box sx={classes.likeComments}>
                <Button
                  variant="text"
                  startIcon={<FavoriteBorderIcon />}
                  sx={{
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  1.2 k
                </Button>
                <Button
                  variant="text"
                  startIcon={<ChatBubbleOutlineIcon />}
                  sx={{
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  5
                </Button>

                {/* Stars ratings */}
                <Box sx={classes?.star}>
                  {starRatings.map((star) => {
                    return (
                      <IconButton
                        key={star.id}
                        aria-label="add to favorites"
                        sx={{
                          p: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        <StarBorderIcon color="primary" />
                      </IconButton>
                    );
                  })}
                  <Typography variant="body1" sx={classes.ratings}>
                    3/5
                  </Typography>
                </Box>
              </Box>
              <Divider />

              {/* Comment sections */}
              <Box
                className="commentSection"
                sx={{
                  height: "55vh",
                  overflowY: "scroll",
                  pb: 4,
                }}
              >
                {data.map((comment) => {
                  return (
                    <Box sx={classes.commentBox} key={comment}>
                      <Box sx={classes.commentContent}>
                        <Box sx={classes.commentAvatar}>
                          <Typography variant="h5" sx={classes.commentName}>
                            J
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          Comment ko hu, hahah
                        </Typography>
                      </Box>
                      <Box className="commentFooter" sx={classes.commentFooter}>
                        <Typography variant="body1" sx={classes.commentReply}>
                          5 replies
                        </Typography>
                        <IconButton
                          aria-label="add to favorites"
                          sx={{
                            p: 0,
                            "&:hover": {
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          <AspectRatioIcon
                            style={{ fontSize: "15px", marginLeft: "10px" }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* End of Card */}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
