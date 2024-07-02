import { QuartosList } from "@/modules/quarto/components/QuartosList";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function QuartosPage() {
  return (
    <div className="pt-16 px-16">
      <h1 className="text-3xl font-bold mb-4">Lista de Quartos</h1>
      <QuartosList />
    </div>
  );
}

export default QuartosPage;
