import { Navigation } from '@/components/Navigation';
import { navData } from '@/constants/navigation';

export default function Header() {
    return (
        <header>
            <Navigation.Root>
                <Navigation.List>
                    {navData.list.map((item) => (
                        <Navigation.Item key={item.title} {...item}>
                            {item.title}
                        </Navigation.Item>
                    ))}
                </Navigation.List>
            </Navigation.Root>
        </header>
    );
}
