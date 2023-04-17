import { PlayCircleIcon, PlusCircleIcon } from "lucide-react";

const banner_play = 'https://firebasestorage.googleapis.com/v0/b/starplus-e20cd.appspot.com/o/theflash%2Fseason01%2Fdublado%2FEone%2FTHEFLSHT01EP01.mp4?alt=media&token=a3fc255c-2f16-4419-a09c-648659a86112'

export default function Banner() {
    return (
        <div className=" w-screen h-[34rem] justify-center items-center flex  bg-moon-detaque bg-center bg-no-repeat bg-cover">
            <div className="bg-moon-gradient w-screen h-[34rem] top-0 left-0 right-0 bottom-0 flex flex-col px-6 absolute">
                <div className="absolute bottom-10 left-5 space-y-8" >

                    <h1 className="text-4xl font-extrabold" >THE FLASH</h1>

                    <p className="leading-5 w-[40rem] font-medium text-sm" >
                    Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.
                    </p>

                    <div className="flex items-center space-x-4 pb-6" >
                        <a href={banner_play} className="bg-rocket-900 w-32 h-10 justify-center space-x-3 hover:opacity-80 flex items-center rounded" >
                            <PlayCircleIcon className="  " />
                            <p>Assistir</p>
                        </a>

                        <button>
                            <PlusCircleIcon />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}