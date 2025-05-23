"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { players } from "@/data/players"
import { useEffect, useState } from "react"

const chartConfig = {
    value: {
        label: "value",
        color: "var(--color-futbol)",
    },
} satisfies ChartConfig

interface PlayersChartProps {
    playerId: number;
}

const PlayersChart: React.FC<PlayersChartProps> = ({ playerId }) => {

    const [chartData, setChartData] = useState([
        { skill: "Fair play", value: 0 },
        { skill: "Attack", value: 0 },
        { skill: "Speed", value: 0 },
        { skill: "Stamina", value: 0 },
        { skill: "Defence", value: 0 },
        { skill: "Accuracy", value: 0 },
    ])

    const matchPlayer = players.find((player) => player.id === playerId);

    useEffect(() => {
        if (matchPlayer) {
            // Actualiza el chartData basado en los datos del jugador encontrado
            setChartData([
                { skill: "Fair play", value: matchPlayer.stats?.fairplay ?? 0 },
                { skill: "Attack", value: matchPlayer.stats?.attack ?? 0 },
                { skill: "Speed", value: matchPlayer.stats?.speed ?? 0 },
                { skill: "Stamina", value: matchPlayer.stats?.stamina ?? 0 },
                { skill: "Defence", value: matchPlayer.stats?.defense ?? 0 },
                { skill: "Accuracy", value: matchPlayer.stats?.accuracy ?? 0 },
            ]);
        }
    }, [matchPlayer]);


    return (
        <Card className="min-h-full bg-neutral-50 dark:bg-neutral-900">
            <CardHeader className="items-center pb-4">
                <CardTitle>Estadisticas del Futbolista</CardTitle>
                <CardDescription>
                    Observa el rendimiento del futbolista en la cancha
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0 m-auto">
                {matchPlayer === undefined ?
                    <div className="flex flex-col gap-2 items-center justify-center w-full h-full m-auto">
                        <span className="text-sm">Seleccionar Futbolista</span>
                    </div>
                    :
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px] w-[290px]"
                    >
                        <RadarChart data={chartData}>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <PolarGrid className="fill-[--color-value] opacity-90" />
                            <PolarAngleAxis dataKey="skill" />
                            <Radar
                                dataKey="value"
                                fill="var(--color-value)"
                                fillOpacity={0.5}
                            />
                        </RadarChart>
                    </ChartContainer>
                }
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Mejoró un 5.2% desde que comenzó <TrendingUp className="h-4 w-4 text-orange-400" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    Desde el: {new Date().toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    })}
                </div>
            </CardFooter>
        </Card>
    )
}

export default PlayersChart