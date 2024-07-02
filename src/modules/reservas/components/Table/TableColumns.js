import { DataTableColumnHeader } from "@/modules/hospedes/components/Table/table-column-header";

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("pt-BR", {
    dateStyle: "long",
  });
};

export const columns = [
  {
    header: "",
    id: "id",
    enableHiding: false,
  },
  {
    id: "nome",
    accessorKey: "nome",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do Hospede" />
    ),
    cell: ({ row }) => <div className="w-[140px]">{row.getValue("nome")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "cpf",
    accessorKey: "cpf",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPF" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[100px]">
          <p className="text-sm font-medium">{row.getValue("cpf")}</p>
        </div>
      );
    },
  },
  {
    id: "tipo_reserva",
    accessorKey: "tipo_reserva",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo da Reserva" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[80px]">
          <p className="text-sm font-medium">{row.getValue("tipo_reserva")}</p>
        </div>
      );
    },
  },
  {
    id: "data_check_in",
    accessorKey: "data_check_in",
    header: ({ column }) => {
      column.title = "Data Checkin";
      return (
        <div className="w-[120px]">
          <p className="text-sm font-medium">{column.title}</p>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="w-[120px]">
          <p className="text-sm font-medium">
            {formatTime(row.getValue("data_check_in"))}
          </p>
        </div>
      );
    },
  },
  {
    id: "data_check_out",
    accessorKey: "data_check_out",
    header: ({ column }) => {
      column.title = "Data Checkout";
      return (
        <div className="w-[150px]">
          <p className="text-sm font-medium">{column.title}</p>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="w-[130px]">
          <p className="text-sm font-medium">
            {formatTime(row.getValue("data_check_out"))}
          </p>
        </div>
      );
    },
  },
  {
    id: "status_reserva",
    accessorKey: "status_reserva",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status da Reserva" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[100px]">
          <p className="text-sm font-medium">
            {row.getValue("status_reserva")}
          </p>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    id: "numero_quarto",
    accessorKey: "numero_quarto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Número do Quarto" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[120px]">
          <p className="text-sm font-medium">{row.getValue("numero_quarto")}</p>
        </div>
      );
    },
  },
  {
    id: "valor_reserva",
    accessorKey: "valor_reserva",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor da Reserva" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[120px]">
          <p className="text-sm font-medium">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(row.getValue("valor_reserva"))}
          </p>
        </div>
      );
    },
  },
];
