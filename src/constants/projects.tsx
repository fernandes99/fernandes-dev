import BatatinhaFrita123Image from '@/assets/img/batatinha_frita_123_20231128.png';
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoVuejs,
    BiLogoFigma
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { RxFigmaLogo } from 'react-icons/rx';

const tool = {
    js_vanilla: {
        slug: 'js-vanilla',
        name: 'JS Vanilla',
        url: 'https://vanilla-js.com/',
        icon: <BiLogoJavascript />
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
    }
};

export const projectList = [
    {
        id: '1',
        title: 'Batatinha Frita 123',
        description:
            'Um jogo em JS Puro, baseado em um dos jogos da série Round 6. Seu objetivo era de aprimorar minhas skills utilizando orientação a objeto com JS puro, sem seguir passo a passo de curso algum.',
        tools: [tool.js_vanilla],
        path_image: BatatinhaFrita123Image,
        github_link: 'https://github.com/fernandes99/batatinha-frita-123'
    },
    {
        id: '2',
        title: 'Batatinha Frita 123',
        description:
            'Um jogo em JS Puro, baseado em um dos jogos da série Round 6. Seu objetivo era de aprimorar minhas skills utilizando orientação a objeto com JS puro, sem seguir passo a passo de curso algum.',
        tools: [tool.js_vanilla, tool.react, tool.vuejs, tool.typescript, tool.nextjs],
        path_image: BatatinhaFrita123Image,
        github_link: 'https://github.com/fernandes99/batatinha-frita-123'
    },
    {
        id: '3',
        title: 'Batatinha Frita 123',
        description:
            'Um jogo em JS Puro, baseado em um dos jogos da série Round 6. Seu objetivo era de aprimorar minhas skills utilizando orientação a objeto com JS puro, sem seguir passo a passo de curso algum.',
        tools: [tool.js_vanilla, tool.figma],
        path_image: BatatinhaFrita123Image,
        github_link: 'https://github.com/fernandes99/batatinha-frita-123'
    },
    {
        id: '4',
        title: 'Batatinha Frita 123',
        description:
            'Um jogo em JS Puro, baseado em um dos jogos da série Round 6. Seu objetivo era de aprimorar minhas skills utilizando orientação a objeto com JS puro, sem seguir passo a passo de curso algum.',
        tools: [tool.js_vanilla, tool.figma],
        path_image: BatatinhaFrita123Image,
        github_link: 'https://github.com/fernandes99/batatinha-frita-123'
    }
];
