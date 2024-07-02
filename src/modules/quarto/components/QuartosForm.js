import React, { useState, useEffect } from "react";
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
import { PenBoxIcon } from "lucide-react";
import { useForm, Controller, Form } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllQuartos } from "../services/getAllQuartos";
import updateStatusQuarto from "../services/updateStatusQuarto";
import { useToast } from "@/components/ui/use-toast";

export function QuartosForm({ status }) {
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = useState(false);
  const [quartos, setQuartos] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    getAllQuartos().then((response) => {
      setQuartos(response.data);
    });
  }, []);

  const submit = (data) => {
    const quartoId = data.numero_quarto;
    setOpen(false);
    updateStatusQuarto(quartoId, data)
      .then((response) => {
        if (response.status === 204) {
          setOpen(true);
          window.location.reload();
        }
      })
      .catch((error) => {
        toast({
          description: error.response.data.message,
          variant: "destructive",
          title: "Algo deu errado",
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PenBoxIcon className="mr-2 h-4 w-4" />
          Editar Quarto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(submit)}>
          <DialogHeader>
            <DialogTitle>Editar Quarto</DialogTitle>
            <DialogDescription>Altere o status do quarto.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="numero_quarto" className="text-right">
                Número do quarto
              </Label>
              <Controller
                name="numero_quarto"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Defina um número para o quarto",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger id="numero_quarto">
                      <SelectValue placeholder="Defina um número" />
                    </SelectTrigger>
                    <SelectContent>
                      {quartos.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.numero_quarto}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="status_quarto" className="text-right">
                Status do quarto
              </Label>
              <Controller
                name="status_quarto"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Defina um status para o quarto",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger id="status_quarto">
                      <SelectValue placeholder="Defina um status" />
                    </SelectTrigger>
                    <SelectContent>
                      {status.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Alterar Status</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
