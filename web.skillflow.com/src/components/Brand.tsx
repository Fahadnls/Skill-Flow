import { SiteLink } from './SiteLink';

export const Brand = () => {
    return (
        <SiteLink
            className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01]"
            to="/"
            aria-label="Skillflow home"
        >
            <span className="relative inline-flex h-6 w-[26px] -rotate-[10deg] skew-x-[-10deg] items-center justify-center rounded-[7px_7px_10px_10px] bg-gradient-to-br from-[#3d8dff] to-[#2564ff] shadow-[0_10px_24px_rgba(37,100,255,0.22)]">
                <span className="absolute h-[13px] w-[13px] translate-y-[2px] rotate-[-12deg] rounded-tl-[9px] border-[3px] border-b-transparent border-r-transparent border-white" />
                <span className="absolute bottom-[3px] right-[5px] h-[7px] w-[7px] rounded-full bg-white" />
            </span>
            <span className="text-[1.05rem] font-black tracking-[-0.04em] text-[#17181f] dark:text-white">SKILLFLOW</span>
        </SiteLink>
    );
};
