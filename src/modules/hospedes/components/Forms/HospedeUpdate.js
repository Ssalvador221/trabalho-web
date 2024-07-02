"use client";
import { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import HospedesInput from "./HospedesInput";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { Label } from "@/components/ui/label";
import { getAllHospedes } from "../../services/getAllHospedes";
import { getHospedeById } from "../../services/getHospedeById";
import { updateHospede } from "../../services/updateHospede";

function HospedesUpdate() {
  const { register, handleSubmit, setValue, control } = useForm();
  const [open, setOpen] = useState(false);
  const [hospedes, setHospede] = useState([]);
  const [hospedeId, setHospedeId] = useState("");

  useEffect(() => {
    getAllHospedes().then((response) => {
      setHospede(response.data);
    });
  }, []);

  useEffect(() => {
    if (hospedeId !== "") {
      getHospedeById(hospedeId).then((response) => {
        setValue("nome", response.data.nome);
        setValue("email", response.data.email);
        setValue("cpf", response.data.cpf);
        setValue("telefone", response.data.telefone);
        setValue("sexo", response.data.sexo);
        setValue("data_nascimento", response.data.data_nascimento);
      });
    }
  }, [hospedeId]);

  const onSubmit = (data) => {
    setOpen(false);
    updateHospede(hospedeId, data).then((response) => {
      if (response.status === 204) {
        setOpen(true);
        window.location.reload();
      }
    });
  };

  console.log(hospedeId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          Editar Hospede
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="pb-5">
            <DialogTitle>Editar Hospede</DialogTitle>
            <DialogDescription>Edite os dados do hospede</DialogDescription>
          </DialogHeader>
          {(!hospedeId && (
            <>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="hospede_id" className="text-right">
                  Escolha o Hospede a ser editado
                </Label>
                <Controller
                  name="hospede_id"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Selecione um hospede",
                    },
                  }}
                  render={({ field: { value } }) => (
                    <Select onValueChange={setHospedeId} value={value}>
                      <SelectTrigger id="hospede_id">
                        <SelectValue placeholder="Selecione um hospedes" />
                      </SelectTrigger>
                      <SelectContent>
                        {hospedes.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <DialogFooter>
                  <Button type="submit" onClick={() => setOpen(true)}>
                    Próximo
                  </Button>
                </DialogFooter>
              </div>
            </>
          )) || (
            <>
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
              <DialogFooter className="pt-4">
                <Button type="submit">Alterar Status</Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default HospedesUpdate;
