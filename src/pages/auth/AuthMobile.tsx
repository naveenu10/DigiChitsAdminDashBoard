import React from "react";
import { Box, Container, Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import useStyles from "./AuthStyles";
import { useState } from "react";

const AuthMobile = () => {
  const [isValidNumber, setIsValidNumber] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [adminOtp, setAdminOtp] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleAuthOtp = () => {
    if (isValidNumber.length === 10) {
      // Valid mobile number, proceed to OTP page
      navigate("/AuthOtp");
    } else {
      // Invalid mobile number, display error
      setMobileError(true);
    }
  };

  const handleMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mobileNumber = e.target.value;

    const numericMobileNumber = mobileNumber.replace(/\D/g, "");

    setIsValidNumber(numericMobileNumber);

    setMobileError(false);
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
              <Input
                className={classes.input}
                placeholder="Enter your mobile number"
                onChange={handleMobileNumber}
                value={isValidNumber}
              />
              {mobileError && (
                <Typography className={classes.MobileError}>
                  Please Enter a valid 10-digit mobile number
                </Typography>
              )}
            </li>
            <li>
              <PrimaryButton className={classes.btn} onClick={handleAuthOtp}>
                <span style={{ textTransform: "none" }}>Login / Sign-Up</span>
              </PrimaryButton>
            </li>
            <li className={classes.line}>
              <hr />
            </li>
            <li className={classes.termsConditions}>
              by proceeding, you agree to our
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

export default AuthMobile;
