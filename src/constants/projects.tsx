import BatatinhaFrita123Image from '@/assets/img/batatinha_frita_123_20231128.png';
import PokeClashImage from '@/assets/img/pokeclash_20231201.png';
import CoupverseImage from '@/assets/img/coupverse_20231201.png';
import PokegoalImage from '@/assets/img/pokegoal_20231201.png';
import ClickvetImage from '@/assets/img/clickvet_20231201.png';
import BushFarmImage from '@/assets/img/bushfarm_20231201.png';
import FernandesDevImage from '@/assets/img/fernandes_dev_20240111.png';

import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoVuejs,
    BiLogoNodejs,
    BiLogoTailwindCss,
    BiLogoCss3
} from 'react-icons/bi';
import { SiStyledcomponents } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { RxFigmaLogo } from 'react-icons/rx';

const tool = {
    js_vanilla: {
        slug: 'js-vanilla',
        name: 'JS Vanilla',
        url: 'https://vanilla-js.com/',
        icon: <BiLogoJavascript />
    },
    node_js: {
        slug: 'node-js',
        name: 'Node JS',
        url: 'https://nodejs.org/en',
        icon: <BiLogoNodejs />
    },
    typescript: {
        slug: 'typescript',
        name: 'Typescript',
        url: 'https://www.typescriptlang.org/',
        icon: <BiLogoTypescript />
    },
    react: {
        slug: 'react',
        name: 'React',
        url: 'https://react.dev/',
        icon: <BiLogoReact />
    },
    vuejs: {
        slug: 'vuejs',
        name: 'VueJs',
        url: 'https://vuejs.org/',
        icon: <BiLogoVuejs />
    },
    nextjs: {
        slug: 'nextjs',
        name: 'NextJs',
        url: 'https://nextjs.org/',
        icon: <TbBrandNextjs />
    },
    figma: {
        slug: 'figma',
        name: 'Figma',
        url: 'https://www.figma.com/',
        icon: <RxFigmaLogo />
    },
    styled_component: {
        slug: 'styled-component',
        name: 'Styled Component',
        url: 'https://styled-components.com/',
        icon: <SiStyledcomponents />
    },
    tailwind: {
        slug: 'tailwind',
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        icon: <BiLogoTailwindCss />
    },
    css: {
        slug: 'css',
        name: 'CSS3',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/',
        icon: <BiLogoCss3 />
    }
};

export const projectList = [
    {
        id: '1',
        title: 'Pokeclash',
        description:
            'Um jogo pokemon. O principal propósito desse projeto, era apriomorar minhas habilidades de tipagem usando typescript. Usando a API do PokeApi, foi uma ótima oportunidade para tipar os...',
        tools: [tool.react, tool.typescript, tool.styled_component],
        path_image: PokeClashImage,
        github_link: 'https://github.com/fernandes99/pokeclash',
        project_link: 'https://pokeclash.netlify.app/'
    },
    {
        id: '2',
        title: 'Batatinha Frita 123',
        description:
            'Um jogo em JS Puro, baseado em um dos jogos da série Round 6. Seu objetivo era de aprimorar minhas skills utilizando orientação a objeto com JS puro.',
        tools: [tool.js_vanilla, tool.css, tool.figma],
        path_image: BatatinhaFrita123Image,
        github_link: 'https://github.com/fernandes99/batatinha-frita-123',
        project_link: 'https://fernandes99.github.io/batatinha-frita-123/'
    },
    {
        id: '3',
        title: 'Blog & Portfólio',
        description:
            'O projeto que você está visualizando neste site funciona não apenas como um portfólio, mas também como um blog. Foi construído utilizando NextJS e está integrado com DatoCMS.',
        tools: [tool.nextjs, tool.react, tool.tailwind, tool.typescript, tool.figma],
        path_image: FernandesDevImage,
        github_link: 'https://github.com/fernandes99/bushfarm',
        project_link: 'https://bushfarm.netlify.com/'
    },
    {
        id: '4',
        title: 'Coupverse',
        description:
            'Um projeto front e backend em mono repo, utilizando websocket. O jogo simula um famoso jogo de cartas chamado Coup. Feito completo do protótipo ao código.',
        tools: [tool.figma, tool.node_js, tool.typescript, tool.react, tool.styled_component],
        path_image: CoupverseImage,
        github_link: 'https://github.com/fernandes99/coupverse',
        project_link: 'https://coupverse.vercel.app/'
    },
    {
        id: '5',
        title: 'Pokegoal',
        description:
            'Um jogo clássico de pokemon, onde há sistemas de captura e pokedex desses pequenos bichinhos. Feito completo do protótipo ao código.',
        tools: [tool.react, tool.styled_component, tool.typescript, tool.figma],
        path_image: PokegoalImage,
        github_link: 'https://github.com/fernandes99/pokegoal',
        project_link: 'https://pokegoal.netlify.com/'
    },
    {
        id: '6',
        title: 'Clickvet',
        description:
            'Um sistema simples, onde busca, de acordo com o seu CEP, veterinários próximos com base em dados de uma planilha, utilizando o webhook do google sheets.',
        tools: [tool.react, tool.css],
        path_image: ClickvetImage,
        github_link: 'https://github.com/fernandes99/clickvet-react',
        project_link: 'https://clickvet.netlify.com/'
    },
    {
        id: '7',
        title: 'Bushfarm',
        description:
            'Um jogo de fazenda simples, onde você pode comprar e cultivar plantações. Imitando a ideia de uma mineração de cripto.',
        tools: [tool.react, tool.typescript, tool.figma],
        path_image: BushFarmImage,
        github_link: 'https://github.com/fernandes99/bushfarm',
        project_link: 'https://bushfarm.netlify.com/'
    }
];
