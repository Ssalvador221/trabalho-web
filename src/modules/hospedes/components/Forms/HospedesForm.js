"use client";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import HospedesInput from "./HospedesInput";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { Label } from "@radix-ui/react-menubar";
import { addNewHospede } from "../../services/addNewHospede";

function HospedesForm() {
  const { register, handleSubmit, control } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    setOpen(false);
    addNewHospede(data)
      .then((response) => {
        if (response?.status === 201) {
          setOpen(true);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Hospede
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="pb-5">
            <DialogTitle>Adicionar Hospede</DialogTitle>
            <DialogDescription>Adicione os dados do hospede</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col pr-5 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <HospedesInput
                title="Nome Completo"
                register={register("nome", {
                  required: {
                    value: true,
                    message: "Nome obrigatorio",
                  },
                })}
                value="nome"
                placeholder="Nome Completo"
              />
              <HospedesInput
                title="Email"
                register={register("email")}
                value="email"
                placeholder="Email"
              />
              <HospedesInput
                title="CPF"
                register={register("cpf")}
                value="cpf"
                placeholder="CPF"
              />
              <HospedesInput
                title="Sexo"
                register={register("sexo")}
                placeholder="Informe-nos o seu sexo"
              />
              <HospedesInput
                title="Data de Nascimento"
                register={register("data_nascimento")}
                placeholder="Data de Nascimento"
                type={"date"}
              />
              <Label>Telefone</Label>
              <Controller
                name="telefone"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Insira um numéro de telefone",
                  },
                  pattern: {
                    value: /^\+55\d{11}$/,
                    message: "Por favor insira um numéro de telefone!",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="br"
                    inputClassName="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    className="flex h-10 w-full"
                  />
                )}
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default HospedesForm;
