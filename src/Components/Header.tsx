import { SearchIcon } from 'lucide-react';
import logo from '../assets/logo.svg'

const img_profile = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/FF8CA23D597517B8D658D1E3A9450C381725B4BA6595097728AD612EE5428108/scale?width=300&aspectRatio=1.00&format=png'

export function Header() {
    return (
        <header className='bg-galaxy-500/50 w-full h-16 flex top-0 bottom-0 fixed z-20 left-0 right-0
        items-center justify-between py-4'>
            <div></div>
            <div> <img src={logo} alt="logo site hbomax" /> </div>

            <nav className='flex items-center space-x-4 pr-6'>
                <a href="">
                    <SearchIcon className='w-4' />
                </a>

                <button>
                    <img src={img_profile} alt=" image profile " className='w-8'/>
                </button>
            </nav>
        </header>
    );
}