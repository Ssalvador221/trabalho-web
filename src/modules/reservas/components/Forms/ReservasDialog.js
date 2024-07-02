import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select";
import { getAllHospedes } from "@/modules/hospedes/services/getAllHospedes";
import { getAllQuartos } from "@/modules/quarto/services/getAllQuartos";
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
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
function ReservasDialog() {
  const [hospedes, setHospedes] = useState([]);
  const [quartos, setQuartos] = useState([]);
  const [ids, setIds] = useState([
    {
      idHospede: "",
      idQuarto: "",
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    getAllHospedes().then((res) => {
      setHospedes(res.data);
    });

    getAllQuartos().then((res) => {
      setQuartos(res.data);
    });
  }, []);

  const onClick = () => {
    router.push(`/reservas/${ids.idQuarto}/${ids.idHospede}`);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <PlusCircle className="mr-2 h-4 w-4" />
            Adicionar Reserva
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full sm:max-w-[425px] ">
          <DialogHeader className="pb-5">
            <DialogTitle>Adicionar Reserva</DialogTitle>
            <DialogDescription>
              Selecione o Quarto e o Hospede. Você será redirecionado para outra
              tela assim finalizar a reserva.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col pr-5 space-y-4">
            <Select
              onValueChange={(value) => setIds({ ...ids, idQuarto: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o Quarto" />
              </SelectTrigger>
              <SelectContent>
                {quartos.map((quarto) => (
                  <>
                    <SelectItem key={quarto.id} value={quarto.id}>
                      {quarto.numero_quarto}
                    </SelectItem>
                    <SelectSeparator />
                  </>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => setIds({ ...ids, idHospede: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o Hospede" />
              </SelectTrigger>
              <SelectContent>
                {hospedes.map((hospedes) => (
                  <>
                    <SelectItem key={hospedes.id} value={hospedes.id}>
                      {hospedes.nome}
                    </SelectItem>
                    <SelectSeparator />
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit" onClick={onClick}>
              Continuar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ReservasDialog;
