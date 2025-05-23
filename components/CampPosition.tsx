"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { players } from "@/data/players"

interface CampPositionProps {
    playerId: number;
}

const CampPosition: React.FC<CampPositionProps> = ({ playerId }) => {
    const matchPlayer = players.find((player) => player.id === playerId)
    const position = matchPlayer?.positionShort || ''
    console.log(matchPlayer)

    return (
        <Card className="min-h-full bg-neutral-50 dark:bg-neutral-900">
            <CardHeader className="items-center pb-4">
                <CardTitle>Posición de Juego</CardTitle>
                <CardDescription>
                    Observa a tu futbolista en la cancha
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0 m-auto">
                <div className="border border-green-400 rounded-2xl w-60 text-2xl bg-green-100 dark:bg-green-950">
                    <div className="h-38">
                        <div className="border-b border-x border-green-400 w-1/2 m-auto h-10 flex justify-center items-center">
                            {/* arquero aca */}
                            <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'AR' && 'border-green-500 border-2 '}`}>{position === 'AR' && "⚽️"}</div>
                        </div>
                        <div className="flex flex-row justify-around items-center h-28 flex-1">
                            <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'DL' && 'border-green-500 border-2 '}`}>{position === 'DL' && "⚽️"}</div>
                            <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'DF' && 'border-green-500 border-2 '}`}>{position === 'DF' && "⚽️"}</div>
                            <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'DR' && 'border-green-500 border-2 '}`}>{position === 'DR' && "⚽️"}</div>
                        </div>
                    </div>
                    <Separator className="border border-green-400" />
                    <div className="h-38">
                        <div className="flex flex-col justify-around items-center h-28 flex-1">
                            <div className={`-mt-4 h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'MD' && 'border-green-500 border-2 '}`}>{position === 'MD' && "⚽️"}</div>
                            <div className="flex flex-row justify-around items-center h-28 flex-1 w-full">
                                <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'FL' && 'border-green-500 border-2 '}`}>{position === 'FL' && "⚽️"}</div>
                                <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'FW' && 'border-green-500 border-2 '}`}>{position === 'FW' && "⚽️"}</div>
                                <div className={`h-8 w-8 overflow-hidden flex justify-center items-center bg-neutral-950 border-2 rounded-full ${position === 'FR' && 'border-green-500 border-2 '}`}>{position === 'FR' && "⚽️"}</div>
                            </div>
                        </div>
                        <div className="border-t border-x border-green-400 w-1/2 m-auto h-10 flex justify-center items-center">
                            {/* arquero aca */}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">

            </CardFooter>
        </Card>
    )
}

export default CampPosition
