import { DataTableColumnHeader } from "@/modules/hospedes/components/Table/table-column-header";

export const columns = [
  {
    header: "",
    id: "id",
    enableHiding: false,
  },
  {
    id: "cpf",
    accessorKey: "cpf",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPF" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("cpf")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "nome",
    accessorKey: "nome",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome Completo" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("nome")}</p>
        </div>
      );
    },
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("email")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "sexo",
    header: ({ column }) => {
      column.title = "Sexo";
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{column.title}</p>
        </div>
      );
    },
    id: "sexo",
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("sexo")}</p>
        </div>
      );
    },
  },
  {
    id: "data_nascimento",
    accessorKey: "data_nascimento",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Nascimento" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">
            {row.getValue("data_nascimento")}
          </p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "telefone",
    accessorKey: "telefone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telefone" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[200px]">
          <p className="text-sm font-medium">{row.getValue("telefone")}</p>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
];
