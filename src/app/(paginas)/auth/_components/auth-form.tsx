"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";

import Logo from "@/components/shared/LogoMinhaUfdpar";
import Brasao from "@/components/shared/BrasaoUfdpar";
import Image from "next/image";
import { useForm } from "react-hook-form";
import LogoB from "@/components/shared/LogoMinhaUfdparB";
import Protic from "@/components/shared/LogoMinhaUfdparB copy";

import { useRouter } from "next/navigation";
//import { useCookies } from "react-cookier";
import { access } from "fs";

export function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      if (response.ok) {
        const { access_token, refresh_token } = await response.json();
        // Armazenar tokens de forma segura
        localStorage.setItem("access_token", access_token);
        document.cookie = `refresh_token=${refresh_token}; path=/; secure; HttpOnly`;

        // Redirecionar o usuário para o dashboard
        router.push("/dashboard");
      } else {
        console.error("Erro ao autenticar");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  });

  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-[#007bff] h-16 flex items-center justify-between px-4">
        <Logo />
        <Info className="w-6 h-6 text-white" aria-label="Informações" />
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full p-4">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-4">
            <h2 className="text-center text-lg font-semibold">
              Acesso ao Sistema Administrativo
            </h2>
            <div className="space-y-2">
              <Label htmlFor="username">Usuário:</Label>
              <Input
                id="username"
                {...form.register("username", { required: true })}
                placeholder="Digite seu login"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha:</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...form.register("password", { required: true })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha atual"
                />
                <EyeIcon
                  className="absolute right-2 top-2.5 w-5 h-5 text-muted-foreground cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <Link href="#" className="text-blue-500 text-sm" prefetch={false}>
              Esqueceu a senha?
            </Link>
            <Button className="w-full bg-blue-500 text-white">Entrar</Button>
            <div className="flex justify-center gap-4">
              <Protic />
              <Brasao />
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

// Componente de ícone EyeIcon com tipo de props definido
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
