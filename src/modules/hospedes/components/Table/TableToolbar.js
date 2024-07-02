import { HospedeDelete } from "../Forms/HospedeDelete";
import HospedesUpdate from "../Forms/HospedeUpdate";
import HospedesForm from "../Forms/HospedesForm";

export function TableToolbar({ table }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <input
          placeholder="Filtrar tipo de quarto"
          value={table.getColumn("nome")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("nome")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] flex rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
        />
        <HospedeDelete />
        <HospedesForm />
        <HospedesUpdate />
      </div>
    </div>
  );
}
