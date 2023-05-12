/** @format */

const useStyles = () => {
  return {
    root: {
      padding: "80px 20px",
    },
    comment: {
      height: "78vh",
    },
    likeComments: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      pl: 2,
      py: 1,
    },
    star: {
      marginLeft: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ratings: {
      fontSize: "14px",
      color: "primary.main",
      ml: 1,
      mt: "3px",
    },
    commentBox: {
      p: 2,
      backgroundColor: "#f7f7f7",
      mt: 3,
      borderRadius: "5px",
    },
    commentContent: {
      display: "flex",
    },
    commentAvatar: {
      backgroundColor: "gray",
      width: "30px",
      height: "30px",
      textAlign: "center",
      borderRadius: "5px",
    },
    commentName: {
      fontWeight: 700,
      color: "white",
    },
    commentFooter: {
      mt: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    commentReply: {
      fontSize: "12px",
    },
  };
};

export default useStyles;
