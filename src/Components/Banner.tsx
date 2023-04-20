import { PlayCircleIcon, PlusCircleIcon } from "lucide-react";

export const banner_play = 'https://firebasestorage.googleapis.com/v0/b/starplus-e20cd.appspot.com/o/theflash%2Fseason01%2Fdublado%2FEone%2FTHEFLSHT01EP01.mp4?alt=media&token=a3fc255c-2f16-4419-a09c-648659a86112'

export default function Banner() {
    return (
        <div className=" w-screen h-[34rem] justify-center items-center flex  bg-moon-detaque bg-center bg-no-repeat bg-cover">
            <div className="bg-moon-gradient w-screen h-[34rem] top-0 left-0 right-0 bottom-0 flex flex-col px-6 absolute">
                <div className="absolute bottom-10 left-5 space-y-8" >

                    <img className="w-60"
                     src="https://firebasestorage.googleapis.com/v0/b/starplus-e20cd.appspot.com/o/theflash%2Fimgs%2FLogo%2Ftheflashlogo.png?alt=media&token=318dab01-6383-42a3-bcbf-28792d59c32b" alt="Logo The flash" />

                    <p className="leading-5 w-[10rem] font-medium text-lg sm:w-[20rem] " >
                    Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.
                    </p>

                    <div className="flex items-center space-x-4 pb-6" >
                        <a href={banner_play} className="bg-galaxy-400 w-48 h-11 justify-center space-x-3 hover:opacity-80 flex items-center rounded" >
                            <PlayCircleIcon className="  " />
                            <p>Assistir</p>
                        </a>

                        <button className="flex items-center space-x-2">
                            <PlusCircleIcon />
                            <span>Minha Lista</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}