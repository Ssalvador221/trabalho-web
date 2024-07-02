"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { TimerResetIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Montserrat } from "next/font/google";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getMe } from "@/modules/home/service/getMe";
import UnathorizedDialog from "../../../components/UnathorizedDialog";

const dosis = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function Feed() {
  const today = new Date();
  const router = useRouter();
  const token = Cookies.get("token");
  const [getUsername, setUsername] = useState("");
  const [open, setOpen] = useState(false);

  const getFormattedDate = (date) => {
    return date.toLocaleDateString("pt-BR", { day: "numeric" });
  };

  const getFormattedDay = (date) => {
    return date.toLocaleDateString("pt-BR", { weekday: "long" });
  };

  const todayDate = getFormattedDate(today);
  const todayDay = getFormattedDay(today);

  useEffect(() => {
    getFormattedDate(today);
    getFormattedDay(today);

    getMe(token)
      .then((respose) => {
        setOpen(false);
        setUsername(respose?.full_name);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          setOpen(true);
          setTimeout(() => {
            router.push("/login");
          }, 5000);
          Cookies.remove("token");
        }
      });
  }, []);

  return (
    <>
      <div className={`${dosis.className} flex flex-row h-screen w-full`}>
        <UnathorizedDialog open={open} setOpen={setOpen} className="z-50" />
        <div className="w-full h-screen flex flex-col gap-5">
          <h1 className="text-xl ml-12 pt-20 font-semibold">
            Bem vindo, {getUsername || "Anônimo"}!
          </h1>
          <div className="flex flex-row items-center ml-12">
            <TimerResetIcon />
            <p className="text-xl font-semibold">Próximas reservas</p>
          </div>
          <div className="flex flex-col ml-12">
            <Card className="w-[760px]">
              <CardContent className="h-96"></CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full h-screen">
          <div className="w-[320px] h-screen shadow-lg text-xl">
            <div className="flex flex-col items-center justify-center h-3/6 gap-3">
              <h1>Hoje</h1>
              <p className="text-xl font-semibold">{todayDate}</p>
              <p>{todayDay}</p>
              <p>Nenhuma reserva agendada</p>
            </div>
            <Separator className="w-[290px] ml-5" />
            <div className="flex flex-col items-center justify-center h-3/6 gap-3">
              <h1>Proxima reserva:</h1>
              <p className="text-xl font-semibold">17</p>
              <p>{todayDay}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
