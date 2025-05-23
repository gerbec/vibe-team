"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { players } from "@/data/players"

interface PlayerCardProps {
    playerId: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ playerId }) => {

    const matchPlayer = players.find((player) => player.id === playerId)

    return (
        <Card className="min-h-[464px] bg-gradient-to-tr from-orange-500 dark:via-neutral-900 dark:to-neutral-900 border-none dark:text-neutral-100">
            {!matchPlayer ?
                <div className="flex flex-col gap-2 items-center justify-center w-full h-full m-auto">
                    <Image
                        src={"/images/players/default-player.svg"}
                        alt={"Default Player"}
                        className="w-full h-full opacity-90 dark:opacity-50 max-h-70"
                        width={75}
                        height={75}
                        objectFit="cover"
                    />
                    <span className="text-sm">Seleccionar Futbolista</span>
                </div>
                :
                <>
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div className="flex flex-row gap-2 items-start">
                            <Image
                                src={matchPlayer.image || "/default-image.png"}
                                alt={matchPlayer.name}
                                className="w-10 h-10 rounded-full border-green-800 border"
                                width={40}
                                height={40}
                                objectFit="cover"
                            />
                            <div className="flex flex-col gap-2 items-start">
                                <CardTitle>{matchPlayer.name}</CardTitle>
                                <CardDescription>
                                    {matchPlayer.positionShort} - {matchPlayer.position}
                                </CardDescription>
                            </div>
                        </div>
                        <Image src={`/images/futbol-teams/${matchPlayer.team}.png` || "/default-team.png"} alt={matchPlayer.team || "Default Team"} width={50} height={50} objectFit={'cover'} />
                    </CardHeader>
                    <CardContent className="pb-0 relative flex justify-between items-end h-full flex-1">
                        <div className="w-40 h-76 flex items-center justify-center relative">
                            <Image
                                src={`/images/players/default-player.svg`} // Placeholder image
                                alt={`default-player`}
                                className="w-full h-full opacity-90 dark:opacity-50"
                                width={100}
                                height={100}
                            />
                            {matchPlayer.number && <div className="absolute top-[85px] text-4xl font-bold">{matchPlayer.number}</div>}
                        </div>
                        {matchPlayer.stats && (
                            <ul className="flex flex-col gap-0 text-xs w-30">
                                {Object.entries(matchPlayer.stats).map(([key, value]) => (
                                    <li key={key} className="flex justify-between border-b border-neutral-700 p-1">
                                        <span className="capitalize">{key}</span>
                                        <span>{value}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                    </CardFooter>
                </>
            }
        </Card>
    )
}

export default PlayerCard