import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BadgeDollarSign, DollarSign, Package, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import AuthPage from "./(paginas)/auth";

export default function Home() {
  return (
    <main className="flex w-full flex-col md:flex-row items-center justify-center p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardContent>
              <AuthPage />
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4"></section>
    </main>
  );
}
