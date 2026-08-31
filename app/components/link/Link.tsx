import type { FC } from 'react';

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    styles?: React.CSSProperties;
}

export const Link: FC<LinkProps> = ({ text, className, styles, ...props }) => {
    return (
        <div
            className={`relative inline-block cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 ${className ?? ''}`}
            style={{
                color: 'var(--color-primary)',
                fontSize: '15px',
                fontWeight: 400,
                fontFamily: 'Inter',
                fontStyle: 'Regular',
                lineHeight: '20px',
                letterSpacing: '0%',
                width: 'fit-content',
                ...styles,
            }}
            {...props}
        >
            {text}
        </div>
    );
};
