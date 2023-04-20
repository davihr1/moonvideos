import { ChevronLeft, SidebarClose, XCircle } from "lucide-react";
import { banner_play } from "./Banner";

interface modalProps {
    close: () => void
}

export function Modal({ close }: modalProps) {

    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 w-screen justify-center flex items-center">
            <div className="bg-galaxy-400 lg:w-[50vw] h-full rounded-md flex flex-col overflow-auto overflow-x-hidden sm:w-[100vw] ">

                <div className="flex flex-col w-full">
                <button className="flex items-center z-10 space-x-4 pt-20 ml-4"
                    onClick={close}>
                    <ChevronLeft />
                    <span>Voltar</span>
                </button>

                <img className="w-screen h-[20] mt-[-10rem] object-fill min-h-[20rem]"
                 src='https://www.themoviedb.org/t/p/original/z8axGj6DbR1cZZw3fCLNnJE9LIJ.jpg' alt="moviescard" />
                </div>


                <iframe className=" px-8 h-64 mt-6"
                
                    src="https://firebasestorage.googleapis.com/v0/b/starplus-e20cd.appspot.com/o/vandavision%2Fwandavision-temp01ep1.mp4?alt=media&token=5815f5d6-9877-4a14-9d2c-d1a8c2122a89"
                    allowFullScreen></iframe>

                    <div>
                        <h1 className="text-4xl m-6 font-semibold  cursor-pointer w-60">
                            Temporada 1
                        </h1>

                        <button className="m-6 w-48 shadow-lg shadow-cyan-500/50 rounded-lg overflow-hidden">
                            <img src="https://firebasestorage.googleapis.com/v0/b/starplus-e20cd.appspot.com/o/vandavision%2Fimgs%2Fscale%2Fscale01epsback.jpg?alt=media&token=50407046-32f4-4d64-95db-4e7ddcb2305f" alt="wv" />
                        </button>
                    </div>
            </div>
        </div>
    );
}