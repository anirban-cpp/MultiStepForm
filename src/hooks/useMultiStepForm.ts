import { ReactElement, useState } from "react";

export const useMultiStepForm = (stepElements: Array<ReactElement>) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  function goToNextStep() {
    setCurrentStep((prevStep) => {
      if (prevStep >= stepElements.length - 1) return prevStep;
      return prevStep + 1;
    });
  }

  function goToPreviousStep() {
    setCurrentStep((prevStep) => {
      if (prevStep <= 0) return prevStep;
      return prevStep - 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    currentStepElement: stepElements[currentStep],
    goToNextStep,
    goToPreviousStep,
    goToStep,
    isFirstStep: currentStep !== 0,
    isLastStep: currentStep === stepElements.length - 1,
  };
};
