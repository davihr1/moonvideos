const banner_url = 'https://firebasestorage.googleapis.com/v0/b/plus-7fa48.appspot.com/o/startapp%2Fdestaque.png?alt=media&token=ccaf29dd-fa19-49b2-acf4-94af026c8110'

export default function Banner() {
    return(
        <div className=" w-screen h-[34rem] justify-center items-center flex bg-slate-600 overflow-hidden">
           <img 
           
           src={banner_url} alt="the_mandalorian" className="w-full h-full " />
        </div>
    );
}