import { Section } from './components/section';

export default function HomePage() {
    return (
        <main className='max-w-[2560px]'>
            <Section.Root>
                <Section.Primary />
                <Section.About />
                <Section.Experience />
                <Section.Project />
            </Section.Root>
        </main>
    );
}
