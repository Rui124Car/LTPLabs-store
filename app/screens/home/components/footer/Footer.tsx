import type { FC } from 'react';

import NavLeft from '../../../../icons/navLeft.svg';
import NavRight from '../../../../icons/navRight.svg';

import './Footer.css';

interface FooterProps {
    numberOfPages: number;
    currentPage: number;
    gotToNextPage: () => void;
    goToPreviousPage: () => void;
    goToCustomPage: (page: number) => void;
}

export const Footer: FC<FooterProps> = ({
    numberOfPages,
    currentPage,
    gotToNextPage,
    goToPreviousPage,
    goToCustomPage,
}) => {
    const arr = Array.from({ length: numberOfPages }, (_, i) => i + 1);

    return (
        <div className="flex flex-row w-full justify-end cursor-pointer">
            {currentPage > 1 && (
                <img
                    src={NavLeft}
                    width={20}
                    height={20}
                    onClick={goToPreviousPage}
                />
            )}

            {arr.map((i) => {
                return (
                    <div
                        key={i}
                        className={
                            i === currentPage ? 'selected' : 'unselected'
                        }
                        onClick={() => goToCustomPage(i)}
                    >
                        {i}
                    </div>
                );
            })}

            {currentPage < numberOfPages && (
                <img
                    src={NavRight}
                    width={20}
                    height={20}
                    onClick={gotToNextPage}
                />
            )}
        </div>
    );
};
