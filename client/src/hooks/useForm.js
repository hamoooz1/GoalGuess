import { useState } from "react";

const useForm = (initialValue) => {
  const [field, setField] = useState(initialValue);

  const handleChange = (event) => setField(event.target.value);

  return [field, setField, handleChange];
};

export default useForm;
