import React, { useState } from "react";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";
import ProgressBar from "../../components/ProgressBar";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    role: "",

    // Step 2 values
    department: "",
    currentYear: "",
    rollNumber: "",
    gradYear: "",
    company: "",

    // Step 3 values
    password: "",
    confirmPassword: "",
  });

  const nextStep = (values) => {
    setFormValues((prev) => ({ ...prev, ...values }));
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 shadow-md p-6 rounded-lg">
        <ProgressBar step={step} />

        {step === 1 && <SignupStep1 next={nextStep} values={formValues} />}
        {step === 2 && <SignupStep2 next={nextStep} prev={prevStep} values={formValues} role={formValues.role} />}
        {step === 3 && <SignupStep3 prev={prevStep} values={formValues} />}
      </div>
    </div>
  );
};

export default Signup;
