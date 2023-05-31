import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

function FormStepper({ active }) {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <div className="formStepper">
      <Stepper activeStep={active} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default FormStepper;
