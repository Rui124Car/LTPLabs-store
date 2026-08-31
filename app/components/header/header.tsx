import { useHeaderHelper } from './header.hook';
import './header.css';
import { Link } from '../link';

export const Header = () => {
    const { headerTitles, headerIcons, goToMainPage } = useHeaderHelper();

    return (
        <div className="header w-full sticky top-0 z-50 bg-white">
            <div className="flex flex-column">
                <div className="flex flex-row justify-between py-4 w-full">
                    <h1
                        className="headerTitle"
                        onClick={goToMainPage}
                    >
                        The online store
                    </h1>

                    <div className="flex flex-col md:flex-row align-center items-center gap-4 py-1">
                        {headerTitles.map(({ text, onClick }) => (
                            <Link
                                key={text}
                                text={text || ''}
                                onClick={onClick}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row align-center items-center gap-4 py-1">
                        {headerIcons.map(
                            ({ icon, itemsAmount, onClick }) => (
                                <div
                                    key={icon}
                                    onClick={onClick}
                                    className="relative text-black cursor-pointer"
                                >
                                    {!!itemsAmount && (
                                        <div className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-primary text-white text-[11px] leading-none">
                                            {itemsAmount}
                                        </div>
                                    )}

                                    <img
                                        src={icon}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <hr className="headerHr" />
        </div>
    );
};
