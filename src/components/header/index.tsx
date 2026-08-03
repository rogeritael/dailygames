import Image from 'next/image';
import Link from 'next/link';
import { LiaGamepadSolid } from 'react-icons/lia';
import { Timer } from '../timer';

export default function Header(){
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-7xl mx-auto flex justify-center items-center h-28">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href="/">
                        <Image
                            className='w-full'
                            quality={100}
                            priority={true}
                            src="/logo.svg"
                            width={150}
                            height={150}
                            alt='Logo do site dailygames'
                        />
                    </Link>

                    <Link href="/" className='uppercase font-medium text-gray-600'>
                        Games
                    </Link>
                    <Link href="/perfil" className='uppercase font-medium text-gray-600'>
                        Profile
                    </Link>
                </nav>
                <div className="hidden sm:flex ml-auto items-center gap-3">
                    <Timer />
                    <Link href="/profile" className='flex items-center gap-1 px-8 py-1.5 bg-amber-600 rounded-md'>
                        <LiaGamepadSolid size={34} color="fff" />
                        <p className='font-medium uppercase text-white'>Login</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}