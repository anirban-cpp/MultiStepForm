import { useEffect, useState } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import AccountForm from "./forms/AccountForm";
import AddressForm from "./forms/AddressForm";
import UserForm from "./forms/UserForm";
import "./styles.css";
import Tabs from "./Tabs";
import { FormData, INITIAL_DATA, localStorageServices } from "../utils/utils";

const FormContainer = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const updateFormFields = (fields: Partial<FormData>) => {
    setFormData((prev) => {
      const newData = { ...prev, ...fields };
      localStorageServices.addToLocalStorage(newData);
      return newData;
    });
  };
  const {
    currentStep,
    currentStepElement,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <UserForm {...formData} updateFormFields={updateFormFields} />,
    <AddressForm {...formData} updateFormFields={updateFormFields} />,
    <AccountForm {...formData} updateFormFields={updateFormFields} />,
  ]);

  useEffect(() => {
    const initialData = localStorageServices.getDataFromStorage();
    if (initialData) setFormData(initialData);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) goToNextStep();
    else {
      alert(`Form Submitted, ${JSON.stringify(formData)}`);
      localStorageServices.removeDataFromStorage();
      setFormData(INITIAL_DATA);
      goToStep(0);
    }
  };

  return (
    <div className="windowContainer">
      <form onSubmit={handleSubmit} className="formContainer">
        <Tabs count={3} currentStep={currentStep} onTabClick={goToStep} />
        {currentStepElement}
        {isFirstStep && (
          <button type="button" onClick={goToPreviousStep}>
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? "Submit" : "Continue"}</button>
      </form>
    </div>
  );
};

export default FormContainer;
