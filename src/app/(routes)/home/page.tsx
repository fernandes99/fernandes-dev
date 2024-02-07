import { Section } from './components/Section';
import { Spotlight } from './components/Spotlight';

export default function HomePage() {
    return (
        <main className='md:overflow-[unset] relative max-w-[2560px] overflow-x-hidden xl:static'>
            <Section.Root>
                <Section.Primary />
                <Section.About />
                <Section.Experience />
                <Section.Project />
            </Section.Root>

            <Spotlight />
        </main>
    );
}
