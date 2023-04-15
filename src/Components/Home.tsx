
interface TitleProps {
    title: string;
    link: string
}

export function Home(props: TitleProps) {
    return (
        <div className="py-4 px-16 overflow-x-hidden w-full space-y-4">
            <h1 className=" text-slate-50 font-semibold text-lg">{props.title}</h1>
            <div className="flex-row flex space-x-2">
              

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:border-slate-200 hover:border-[2px]
                 transition hover:-translate-y-1 hover:scale-110 duration-300 rounded-md" onClick={() => alert('test')}
                 src={props.link} alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110 duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src='https://www.themoviedb.org/t/p/original/495oWZrUyL5hICsgXevaXpZjJHJ.jpg' alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110  duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src='https://www.themoviedb.org/t/p/original/nxwV5wWUqQgV0A8IktIR6u0QAbv.jpg' alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110  duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src={props.link} alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110  duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src={props.link} alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110  duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src={props.link} alt="moviescard" />

                <img className="w-[16rem] h-[8rem] hover:border-solid hover:-translate-y-1 hover:scale-110  duration-300
                 hover:border-slate-200 hover:border-[2px] rounded-md"
                 src={props.link} alt="moviescard" />

            </div>
        </div>
    )
}