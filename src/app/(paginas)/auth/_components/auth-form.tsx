import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { InfoIcon, EyeIcon } from "@/components/icons"; // Descomente se os ícones forem importados de outro arquivo

export function AuthForm() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full bg-[#007bff] h-16 flex items-center justify-between px-4">
        <div className="w-12 h-12 bg-gray-300" />
        <InfoIcon className="w-6 h-6 text-white" />
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full p-4">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-4">
            <h2 className="text-center text-lg font-semibold">
              Acesso ao Sistema Administrativo
            </h2>
            <div className="space-y-2">
              <Label htmlFor="username">Usuário:</Label>
              <Input id="username" placeholder="Digite seu login" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha:</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
                <EyeIcon className="absolute right-2 top-2.5 w-5 h-5 text-muted-foreground cursor-pointer" />
              </div>
            </div>
            <Link href="#" className="text-blue-500 text-sm" prefetch={false}>
              Esqueceu a senha?
            </Link>
            <Button className="w-full bg-blue-500 text-white mt-4">
              Entrar
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-center text-white">
        © Copyright 2024
      </footer>
    </div>
  );
}

// Definindo o tipo das props como React.SVGProps<SVGSVGElement>
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
