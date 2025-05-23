"use client";

import CampPosition from "@/components/CampPosition";
import { ListOfPlayers } from "@/components/ListOfPlayers";
import PlayerCard from "@/components/PlayerCard";
import PlayersChart from "@/components/PlayersChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Page = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<number>(0);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center w-full m-auto mt-4 gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full p-2">
          <h1 className="font-bold text-4xl">vibe-team</h1>
          <div className="flex flex-col lg:flex-row gap-4 p-2 opacity-50">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button disabled className="cursor-pointer">
                    Crear Partido
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Proximamente estara disponible esta funcionalidad</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button disabled className="cursor-pointer">
                    Simular Equipos
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Proximamente estara disponible esta funcionalidad</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button disabled className="cursor-pointer">
                    Nuevo Futbolista
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Proximamente estara disponible esta funcionalidad</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 p-2">
          <div className="flex-1">
            <ListOfPlayers setSelectedPlayer={setSelectedPlayer} />
          </div>
          <div className="flex-1">
            <PlayerCard playerId={selectedPlayer} />
          </div>
          <div className="flex-1">
            <CampPosition playerId={selectedPlayer} />
          </div>
          <div className="flex-1">
            <PlayersChart playerId={selectedPlayer} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
