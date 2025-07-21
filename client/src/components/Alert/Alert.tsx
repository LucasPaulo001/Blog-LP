import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

interface Props {
  severity: "success" | "error";
}

export default function SimpleAlert({ severity }: Props) {
  return (
    <Alert
      icon={
        severity === "success" ? (
          <CheckIcon fontSize="inherit" />
        ) : (
          <ErrorIcon fontSize="inherit" />
        )
      }
      severity={severity}
    >
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}
