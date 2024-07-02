"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { Lato, Montserrat } from "next/font/google";
import { AlertTriangleIcon } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import { Card } from "@/components/ui/card";
import { updateUserName, updateUserEmail, updateUserPhone } from "../services/updateUserData";
import { useToast } from "@/components/ui/use-toast";
import { getMe } from "@/modules/home/service/getMe";

const lato = Lato({
    weight: "400",
    subsets: ["latin"],
});

const dosis = Montserrat({
    weight: "500",
    subsets: ["latin"],
});

function PerfilForm() {
    const router = useRouter();
    const token = Cookies.get("token");
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const {toast} = useToast();

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
        },
    });


    useEffect(() => {
        updateForm();
    }, [token]);

    const onSubmit = async (data) => { //TODO Falta ajustar aqui.
        try {
            const emailResponse = await updateUserEmail(userId, { email: data?.email });
            const nameResponse = await updateUserName(userId, { full_name: data?.full_name });
            const phoneResponse = await updateUserPhone(userId, { phone: data?.phone });
            console.log("Responses",emailResponse, nameResponse, phoneResponse);
            if (emailResponse.status === 204 && nameResponse.status === 204 && phoneResponse.status === 204) {
                toast({
                    variant: "default",
                    title: "Sucesso!",
                    description: "Usuário atualizado com sucesso.",
                });
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }

    };

    function updateForm() {
        if (token) {
            getMe(token)
                .then((response) => {
                    console.log("response", response);
                    setOpen(false);
                    setUserId(response?.id);
                    setValue("full_name", response?.full_name);
                    setValue("email", response?.email);
                    setValue("phone", response?.phone);
                })
                .catch((error) => {
                    if (error?.response?.status === 500) {
                        toast({
                            variant: "destructive",
                            title: "Erro!",
                            description: "Ops. Algo deu errado aconteceu.",
                        });
                    }
                });
        }
    }

    return (
        <Card className="w-full h-full px-20 pb-20 pt-10 bg-gray-100">
            <form
                className="bg-white border-2 rounded-2xl w-3/4 ml-2 mr-0 p-10 w-3/5 flex flex-col items-center h-full"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col w-full mb-10">
                    <label>Nome Completo</label>
                    <input
                        {...register("full_name", {
                            required: {
                                value: true,
                                message: "Por Favor insira um nome!",
                            },
                        })}
                        placeholder="Exp: John Doe"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                    {errors.full_name && (
                        <span className="text-red-600 text-xs flex items-center w-full pt-1">
                            <AlertTriangleIcon className="w-4 mr-1" />
                            {errors.full_name.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col w-full mb-10">
                    <label>Email</label>
                    <input
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Por Favor insira um email!",
                            },
                        })}
                        placeholder="Exp: johndoe@gmail.com"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                    />
                    {errors.email && (
                        <span className="text-red-600 text-xs flex items-center w-full pt-1">
                            <AlertTriangleIcon className="w-4 mr-1" />
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col w-full mb-10">
                    <label>Telefone</label>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Insira um numéro de telefone",
                            },
                            pattern: {
                                label: /^\+55 \(\d{2}\) \d{9}$/,
                                message: "Por favor insira um número de telefone!",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                value={value}
                                onChange={onChange}
                                defaultCountry="br"
                                inputClassName="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                                className="flex h-10 w-full"
                            />
                        )}
                    />
                    {errors.phone && (
                        <span className="text-red-600 text-xs flex items-center w-full pt-1">
                            <AlertTriangleIcon className="w-4 mr-1" />
                            {errors.phone.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-row gap-x-2 w-full">
                    <button
                        type="submit"
                        className="p-2 bg-[#FB7901] text-white w-[160px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                    >
                        Atualizar Perfil
                    </button>
                </div>
            </form>
        </Card>
    );
}

export default PerfilForm;
