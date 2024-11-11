import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function HomePage() {
  const [selectedEmpresaValue, setSelectedEmpresaValue] = useState("light");
  const [selectedFilialValue, setSelectedFilialValue] = useState("light");
  const [selectedStartDateValue, setSelectedStartDateValue] = useState("light");
  const [selectedEndDateValue, setSelectedEndDateValue] = useState("light");
  const [tableData, setTableData] = useState([
    {
      Chave: 1,
      Name: "Mvp",
      "Incrição Federal": "1245365565",
      Table: 10,
      "Conta contabil": "Conta A",
    },
    {
      Chave: 2,
      Name: "Alpha",
      "Incrição Federal": "9876543210",
      Table: 15,
      "Conta contabil": "Conta B",
    },
    {
      Chave: 3,
      Name: "Beta",
      "Incrição Federal": "1122334455",
      Table: 20,
      "Conta contabil": "Conta C",
    },
    {
      Chave: 4,
      Name: "Gamma",
      "Incrição Federal": "6677889900",
      Table: 25,
      "Conta contabil": "Conta D",
    },
    {
      Chave: 5,
      Name: "Delta",
      "Incrição Federal": "5544332211",
      Table: 30,
      "Conta contabil": "Conta E",
    },
    {
      Chave: 6,
      Name: "Epsilon",
      "Incrição Federal": "3344556677",
      Table: 35,
      "Conta contabil": "Conta F",
    },
    {
      Chave: 7,
      Name: "Zeta",
      "Incrição Federal": "8899776655",
      Table: 40,
      "Conta contabil": "Conta G",
    },
    {
      Chave: 8,
      Name: "Eta",
      "Incrição Federal": "2233445566",
      Table: 45,
      "Conta contabil": "Conta H",
    },
    {
      Chave: 9,
      Name: "Theta",
      "Incrição Federal": "6677889922",
      Table: 50,
      "Conta contabil": "Conta I",
    },
    {
      Chave: 10,
      Name: "Iota",
      "Incrição Federal": "9988776655",
      Table: 55,
      "Conta contabil": "Conta J",
    },
  ]);

  const handleEmpresaChange = (value: string) => {
    setSelectedEmpresaValue(value);
  };
  const handleFlialChange = (value: string) => {
    setSelectedFilialValue(value);
  };
  const handleStartDateChange = (value: any) => {
    console.log(value.target.value);
    setSelectedStartDateValue(value.target.value);
  };
  const handleEndDateChange = (value: any) => {
    console.log(value.target.value);
    setSelectedEndDateValue(value.target.value);
  };

  return (
    <div className="flex justify-center flex-col items-center mt-20 max-w-4xl mx-auto">
      <header className="flex gap-4">
        <div>
          <h1 className="font-bold mb-2">Empresa</h1>
          <Select
            value={selectedEmpresaValue}
            onValueChange={handleEmpresaChange}
          >
            <SelectTrigger className="w-[260px]">
              <SelectValue placeholder="Empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Somos</SelectItem>
              <SelectItem value="dark">CH2</SelectItem>
              <SelectItem value="system">BMG</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h1 className="font-bold mb-2">Filial</h1>
          <Select value={selectedFilialValue} onValueChange={handleFlialChange}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filial" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">1</SelectItem>
              <SelectItem value="dark">2</SelectItem>
              <SelectItem value="system">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h1 className="font-bold mb-2">Data de inicio</h1>
          <Input
            type="date"
            value={selectedStartDateValue}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <h1 className="font-bold mb-2">Data de Fim</h1>
          <Input
            type="date"
            value={selectedEndDateValue}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="mt-8">
          <Button variant={"outline"}>Pesquisar</Button>
        </div>
        <div className="mt-8">
          <Button variant={"destructive"}>Finalizar</Button>
        </div>
      </header>
      <main className="border rounded mt-20">
        <Table className="w-full table-auto border-collapse">
          <TableHeader>
            <TableHead>Chave</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Incrição Federal</TableHead>
            <TableHead>Table</TableHead>
            <TableHead>Conta contabil</TableHead>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.Chave}>
                <TableCell className="px-6 py-3 border-b border-gray-300">
                  {row.Chave}
                </TableCell>
                <TableCell className="px-6 py-3 border-b border-gray-300">
                  {row.Name}
                </TableCell>
                <TableCell className="px-6 py-3 border-b border-gray-300">
                  {row["Incrição Federal"]}
                </TableCell>
                <TableCell className="px-6 py-3 border-b border-gray-300">
                  {row.Table}
                </TableCell>
                <TableCell className="px-6 py-3 border-b border-gray-300">
                  <Select
                    value={row["Conta contabil"]}
                    onValueChange={handleEmpresaChange}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Somos</SelectItem>
                      <SelectItem value="dark">CH2</SelectItem>
                      <SelectItem value="system">BMG</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
