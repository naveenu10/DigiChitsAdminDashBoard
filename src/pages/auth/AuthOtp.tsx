import React from "react";
import { Box, Container, Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import useStyles from "./AuthStyles";
import { useState } from "react";

const AuthOtp = () => {
  const [adminOtp, setAdminOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleDashBoard = () => {
    if (adminOtp.trim() !== "") {
      navigate("/dashboard");
    } else {
      setOtpError(true);
    }
  };

  const handleOtp = (e: any) => {
    setAdminOtp(e.target.value);
    setOtpError(false);
  };

  return (
    <Container maxWidth="xl" className={classes.BgImg}>
      <Box className={classes.LoginBox}>
        <Grid item className={classes.LoginGrid}>
          <ul className={classes.UnorderList}>
            <li className={classes.DigiChits}>DIGI CHITS</li>

            <li className={classes.AccountReleated}>
              Enter the OTP sent to 1234567890
            </li>
            <li>
              <Input
                className={classes.input}
                placeholder="OTP"
                value={adminOtp}
                onChange={handleOtp}
              />
              {otpError && (
                <Typography className={classes.MobileError}>
                  Please Enter your OTP
                </Typography>
              )}
            </li>
            <li>
              <PrimaryButton className={classes.btn} onClick={handleDashBoard}>
                <span style={{ textTransform: "none" }}>Verify & Proceed</span>
              </PrimaryButton>
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

export default AuthOtp;
