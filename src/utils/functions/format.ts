import { MONTHS_ABREVIATED } from '@/constants/months';

const format = {
    money: (value: number) => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatter.format(value);
    },
    time: (value: Date | string, format: 'HH:MM:SS' | 'HHhMM') => {
        if (typeof value === 'string') {
            value = new Date(value);
        }

        if (format === 'HHhMM') {
            const hours = value.getHours() < 10 ? `0${value.getHours()}` : value.getHours();
            const minutes = value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes();

            return `${hours}h${minutes}`;
        }

        return value.toLocaleTimeString();
    },
    date: (value: Date | string, format: 'DD/MM/AAAA' | 'DD MM, AAAA') => {
        if (typeof value === 'string') {
            value = new Date(value);
        }

        if (format === 'DD/MM/AAAA') {
            const day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
            const month = value.getMonth() < 10 ? `0${value.getMonth()}` : value.getMonth();
            const year = value.getFullYear();

            return `${day}/${month}/${year}`;
        }

        if (format === 'DD MM, AAAA') {
            const day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
            const month = MONTHS_ABREVIATED[value.getMonth()];
            const year = value.getFullYear();

            return `${day} ${month}, ${year}`;
        }

        return value.toLocaleDateString();
    }
};

export default format;
