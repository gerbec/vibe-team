"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { players } from "@/data/players"

export function ListOfPlayers({ setSelectedPlayer }: { setSelectedPlayer: (player: number) => void }) {
    const handlePlayerClick = (player: number) => {
        setSelectedPlayer(player);
    }
    const orderedPlayersByName = players.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <Card className="min-h-full bg-neutral-50 dark:bg-neutral-900">
            <CardHeader className="items-center pb-4">
                <CardTitle>Listado de Futbolistas</CardTitle>
                <CardDescription>
                    Selecciona un futbolista para ver sus estadisticas y desempeño.
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0 max-h-[285px] overflow-y-auto">
                {orderedPlayersByName.map((player) => (
                    <div key={player.id} className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center p-2 border-b border-neutral-400">
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src={player.image || "/default-image.png"}
                                    alt={player.name}
                                    className="w-10 h-10 rounded-full border-green-800 border"
                                    width={40}
                                    height={40}
                                    objectFit="cover"
                                />
                                <span className="text-sm overflow-ellipsis">{player.name} - {player.positionShort}</span>
                            </div>
                            <Button variant="outline" size='sm' onClick={() => handlePlayerClick(player.id)}>Ver</Button>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
            </CardFooter>
        </Card>
    )
}
