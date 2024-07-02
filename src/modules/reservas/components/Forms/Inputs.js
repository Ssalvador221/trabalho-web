import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";

function Inputs({ title, register, placeholder, type }) {
  return (
    <>
      <Label>{title}</Label>
      <Input {...register} placeholder={placeholder} type={type} />
    </>
  );
}

export default Inputs;
