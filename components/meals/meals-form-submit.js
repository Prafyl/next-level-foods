"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return <button> {pending ? "Submitting" : "Share Meal"}</button>;
};

export default MealsFormSubmit;
