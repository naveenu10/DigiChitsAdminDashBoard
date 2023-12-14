import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    BgImg: {
      backgroundImage: `url('src/assets/images/BgImage.png')`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      minWidth: "100vw",
    },
    LoginGrid: {
      display: "flex",
      flexDirection: "column",
      textAlign: "start",
      border: "2px solid #00998A",
      width: "778px",
      height: "564px",
      backgroundColor: "#FFFFFF",
      borderRadius: "15px",
      padding: "0 0 0 10px",
    },
    DigiChits: {
      color: "#085B53",
      fontFamily: "Secular One",
      fontSize: "40px",
      fontWeight: 400,
      lineHeight: "normal",
      fontStyle: "normal",
      margin: 0,
      width: "196px",
      height: "58px",
    },
    loginSignup: {
      color: "#085B53",
      fontSize: "20px",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: "Nunito Sans",
    },
    AccountReleated: {
      color: "#9DA3A7",
      fontFamily: "Nunito Sans",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    UnorderList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      listStyle: "none",
      padding: "50px 15px",
    },
    input: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),
      border: "1px solid #9A9A9A",
      borderRadius: "5px",
      width: "408px",
      height: "40px",
      flexShrink: 0,
      strokeWidth: "1px",
      stroke: "#9A9A9A",
    },

    btn: {
      width: "409px",
      height: "36px",
      flexShrink: 0,
      textTransform: "none",
    },

    MobileError: {
      color: "red",
    },

    termsConditions: {
      color: "#505050",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },

    termsConditionsBox: {
      color: "#505050",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      textDecoration: "underline",
    },

    Empowering: {
      color: "#007977",
      fontFamily: "Nunito Sans",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      width: "75%",
    },
    LoginBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    ellipseImg: {
      display: "flex",
      height: "80%",
      marginTop: "14%",
    },
    line: {
      width: "78%",
      height: "0%",
    },
  })
);

export default useStyles;
