import { Navigation } from '@/components/Navigation';
import { navData } from '@/constants/navigation';

export default function Header() {
    return (
        <header>
            <Navigation.Root>
                <Navigation.Logo
                    symbol={
                        <a href='/' title='Voltar para a home'>
                            <div className='flex items-center text-2xl'>
                                <span>Fernandes</span>
                                <span className='font-semibold text-primary-500 drop-shadow-[0px_2px_8px_rgba(70,33,159,1)]'>
                                    Dev
                                </span>
                            </div>
                        </a>
                    }
                />
                <Navigation.List>
                    {navData.list.map((item) => (
                        <Navigation.Item
                            key={item.title}
                            className='rounded-md px-3 py-1 hover:bg-black/20'
                            {...item}
                            href={item.href}
                        >
                            {item.title}
                        </Navigation.Item>
                    ))}
                </Navigation.List>
            </Navigation.Root>
        </header>
    );
}
