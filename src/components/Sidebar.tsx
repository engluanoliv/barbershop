"use client"

import { quickSearchServices } from "@/app/_contants/quickSearch"
import { Avatar, AvatarImage } from "./ui/avatar"
import { HomeIcon, CalendarIcon, LogOutIcon, LogInIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"

export interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  const { data } = useSession()
  const handleGoogleLoginClick = () => signIn("google")
  const handleLogoutClick = () => signOut()

  return (
    <>
      {/* Sidebar */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {/* User Details */}
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          {data?.user ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={data?.user?.image ?? ""} />
              </Avatar>
              <div>
                <p className="font-bold">{data.user.name}</p>
                <p className="text-xs">{data.user.email}</p>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-bold">Olá, faça seu login</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon">
                    <LogInIcon />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                  <DialogHeader>
                    <DialogTitle>Faça login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta do Google.
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    onClick={() => handleGoogleLoginClick()}
                    variant="outline"
                    className="gap-1 font-bold"
                  >
                    <Image
                      src="/google.svg"
                      alt="Google Icon"
                      width={18}
                      height={18}
                    />
                    Google
                  </Button>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          {quickSearchServices.map((service) => (
            <SheetClose key={service.title} asChild>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href={`/barbershops?service=${service.title}`}>
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    height={18}
                    width={18}
                  />
                  {service.title}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </div>

        {/* Logout */}
        <div className="flex flex-col gap-2 py-5">
          <Button
            onClick={() => handleLogoutClick()}
            variant="ghost"
            className="justify-start gap-2"
          >
            <LogOutIcon size={18} />
            Sair
          </Button>
        </div>
      </SheetContent>
    </>
  )
}
