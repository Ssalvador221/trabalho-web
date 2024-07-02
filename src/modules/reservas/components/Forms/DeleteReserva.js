import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { PenBoxIcon, SquareScissors, Trash } from "lucide-react";
import { useForm, Controller, Form } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { getAllReservas } from "../../services/getAllReservas";
import { removeReserva } from "../../services/removeReserva";

export function DeleteReserva() {
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = useState(false);
  const [reservas, setReserva] = useState([]);
  const { toast } = useToast();
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("pt-BR", {
      dateStyle: "long",
    });
  };

  useEffect(() => {
    getAllReservas().then((res) => {
      setReserva(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    removeReserva(data.data_check_in)
      .then((res) => {
        if (res.status === 204) {
          setOpen(false);
          window.location.reload();
        }
      })
      .catch((error) => {
        toast({
          description: "Algo deu errado, na hora de deletar!",
          variant: "destructive",
          title: "Algo deu errado",
        });
        console.log(error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed hover:bg-red-500 hover:text-white"
        >
          <Trash className="mr-2 h-4 w-4" />
          Remover Reserva
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Deletar Reserva</DialogTitle>
            <DialogDescription>
              Selecione uma das datas da lista para ser removido.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="cpf" className="text-right">
                Data Check-in
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
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger id="cpf">
                      <SelectValue placeholder="Selecione o CPF do hospede" />
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
          </div>
          <DialogFooter>
            <Button type="submit">Deletar Hospede</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
