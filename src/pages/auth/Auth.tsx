import { Box, Container, Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import useStyles from "./AuthStyles";
import { useState } from "react";

const Auth = () => {
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [adminOtp, setAdminOtp] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleDashBoard = () => {
    navigate("/dashboard");
  };
  const handleOtp = (e: any) => {
    setAdminOtp(e.target.value);
  };
  const handleVerifyMobile = () => {
    setIsValidNumber(true);
    setAdminOtp("");
  };

  return (
    <Container maxWidth="xl" className={classes.BgImg}>
      <Box className={classes.LoginBox}>
        <Grid item className={classes.LoginGrid}>
          <ul className={classes.UnorderList}>
            <li className={classes.DigiChits}>DIGI CHITS</li>
            <li className={classes.loginSignup}>Login / Sign-Up</li>
            <li className={classes.AccountReleated}>
              Account-related information will be sent to this number.
            </li>
            <li>
              {isValidNumber ? (
                <>
                  <Input
                    className={classes.input}
                    placeholder="OTP"
                    value={adminOtp}
                    onChange={handleOtp}
                  />
                  {!adminOtp && (
                    <Typography className={classes.MobileError}>
                      Please Enter your OTP
                    </Typography>
                  )}
                </>
              ) : (
                <>
                  <Input
                    className={classes.input}
                    placeholder="Enter your mobile number"
                  />
                  {!isValidNumber && !adminOtp && (
                    <Typography className={classes.MobileError}>
                      Please Enter your 10 Digi mobile number
                    </Typography>
                  )}
                </>
              )}
            </li>
            <li>
              {isValidNumber ? (
                <PrimaryButton
                  className={classes.btn}
                  onClick={handleDashBoard}
                >
                  <span style={{ textTransform: "none" }}>
                    Verify & Proceed
                  </span>
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  className={classes.btn}
                  onClick={handleVerifyMobile}
                >
                  <span style={{ textTransform: "none" }}>Login / Sign-Up</span>
                </PrimaryButton>
              )}
            </li>
            <li className={classes.line}>
              <hr />
            </li>
            <li className={classes.termsConditions}>
              by proceeding, you agree to our{" "}
              <Box
                className={classes.termsConditionsBox}
                component="span"
                sx={{ display: "inline" }}
              >
                Terms and Conditions
              </Box>
            </li>
            <li className={classes.Empowering}>
              "Empowering Futures, One Circle at a Time: Your Trust, Our
              Commitment in Chit Funds."
            </li>
          </ul>
          <img
            src="src\assets\images\Ellipse.png"
            className={classes.ellipseImg}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Auth;
