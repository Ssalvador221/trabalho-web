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
import { PenBoxIcon, Trash } from "lucide-react";
import { useForm, Controller, Form } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { getAllHospedes } from "../../services/getAllHospedes";
import { deleteHospede } from "../../services/deleteHospede";

export function HospedeDelete() {
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = useState(false);
  const [hospedes, setHospedes] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    getAllHospedes().then((response) => {
      setHospedes(response.data);
    });
  }, []);

  const submit = (data) => {
    setOpen(false);
    deleteHospede(data.cpf)
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
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed hover:bg-red-500 hover:text-white"
        >
          <Trash className="mr-2 h-4 w-4" />
          Remover Hospede
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(submit)}>
          <DialogHeader>
            <DialogTitle>Deletar Hospedes</DialogTitle>
            <DialogDescription>
              Selecione um dos hospedes da lista para ser removido.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="cpf" className="text-right">
                Cpf do Hospede
              </Label>
              <Controller
                name="cpf"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Selecione um CPF!",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger id="cpf">
                      <SelectValue placeholder="Selecione o CPF do hospede" />
                    </SelectTrigger>
                    <SelectContent>
                      {hospedes.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.cpf}
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
