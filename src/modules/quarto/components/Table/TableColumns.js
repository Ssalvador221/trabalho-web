import { DataTableColumnHeader } from "@/modules/quarto/components/Table/table-column-header";

export const columns = [
  {
    header: "",
    id: "id",
    enableHiding: false,
  },
  {
    accessorKey: "numero_quarto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Número do Quarto" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("numero_quarto")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "numero_andar",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Número do Andar" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("numero_andar")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "tipo_quarto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo de Quartos" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("tipo_quarto")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "descricao",
    header: ({ column }) => {
      column.title = "Descrição";
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{column.title}</p>
        </div>
      );
    },
    id: "descricao",
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("descricao")}</p>
        </div>
      );
    },
  },
  {
    id: "status_quarto",
    accessorKey: "status_quarto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status do Quarto" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("status_quarto")}</p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
