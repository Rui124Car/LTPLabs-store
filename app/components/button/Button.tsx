import type { ButtonHTMLAttributes, CSSProperties, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    fullWidth?: boolean;
    styles?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
    text,
    fullWidth,
    styles,
    ...props
}) => {
    return (
        <button
            className={`cursor-pointer border-none rounded-lg bg-primary px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:brightness-110 ${
                fullWidth ? 'w-full' : 'w-auto'
            }`}
            style={styles}
            {...props}
        >
            <span className="font-['Roboto_Mono'] text-[15px] leading-5 font-normal text-white">
                {text}
            </span>
        </button>
    );
};
