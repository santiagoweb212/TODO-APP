import { useState } from "react";

export const useValidatorForm = (initialState,validatorForm) => {
  const [valueInput, SetvalueInput] = useState(initialState);
  const [errors, SetErrors] = useState({});
  const [response, SetResponse] = useState(null);
  const [loading, SetLoading] = useState(false);
  const handleOnChange = (e) => {
    const{name,value}=e.target
    SetvalueInput({...valueInput,[name]:value})
  };
  const handleOnBlur = (e) => {
    handleOnChange(e)
    SetErrors(validatorForm(valueInput))
  };
  const handleOnSubmit = (e) => {};
  return [
    valueInput,
    errors,
    response,
    loading,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
  ];
};
