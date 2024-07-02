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
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { getAllReservas } from "../../services/getAllReservas";
import { SelectStatusReserva } from "@/app/reservas/[quartoId]/[hospedeId]/Components/SelectStatusReserva";
import { updateReserva } from "../../services/updateReserva";

export const UpdateReserva = () => {
  const { handleSubmit, setValue, control } = useForm();
  const [open, setOpen] = useState(false);
  const [reservas, setReserva] = useState([]);
  const [reservaId, setReservaId] = useState("");

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("pt-BR", {
      dateStyle: "long",
    });
  };

  useEffect(() => {
    getAllReservas().then((response) => {
      setReserva(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    setOpen(false);
    updateReserva(reservaId, data).then((response) => {
      if (response.status === 204) {
        setOpen(true);
        window.location.reload();
      }
    });
  };

  console.log(reservas);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          Editar Reserva
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[425px]">
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="pb-5">
              <DialogTitle>Editar Reserva</DialogTitle>
              <DialogDescription>Edite o status da reserva</DialogDescription>
            </DialogHeader>
            {(!reservaId && (
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="reserva_id" className="text-right">
                  Escolha a Reserva a ser editada
                </Label>
                <Controller
                  name="data_check_in"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Selecione uma Data!",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select onValueChange={setReservaId} value={value}>
                      <SelectTrigger id="data_check_in">
                        <SelectValue placeholder="Selecione a data da reserva" />
                      </SelectTrigger>
                      <SelectContent>
                        {reservas.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {formatTime(item.data_check_in)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            )) || (
              <>
                <div className="flex flex-col pr-5 space-y-4">
                  <div className="flex flex-col items-start gap-3">
                    <SelectStatusReserva control={control} />
                  </div>
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit">Alterar Status</Button>
                </DialogFooter>
              </>
            )}
          </form>
        </>
      </DialogContent>
    </Dialog>
  );
};
