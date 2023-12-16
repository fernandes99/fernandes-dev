import { Section } from './components/Section';
import { Spotlight } from './components/Spotlight';

export default function HomePage() {
    return (
        <main className='max-w-[2560px]'>
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
