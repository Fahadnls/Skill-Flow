const logos = [
    { label: 'SPACEX', className: 'tracking-[0.18em] font-medium' },
    { label: 'SQUARESPACE', className: '' },
    { label: 'Wealthsimple', className: 'font-serif text-[1.08rem] font-bold' },
    { label: 'databricks', className: '' },
    { label: 'Medium', className: 'font-serif font-semibold opacity-45' },
];

const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

export const LogoRow = () => {
    return (
        <section
            className="logo-marquee relative z-10 mx-auto mt-10 w-full max-w-[1480px] overflow-hidden px-1 pb-4 text-[1rem] font-extrabold tracking-[-0.03em] text-[rgba(34,36,44,0.62)] dark:text-slate-500 lg:absolute lg:bottom-[66px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:px-0 lg:pb-0"
            aria-label="Trusted by brands"
        >
            <div className="animate-logo-marquee flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20 lg:gap-28 lg:pr-28">
                {marqueeLogos.map((logo, index) => (
                    <span
                        key={`${logo.label}-${index}`}
                        className={`whitespace-nowrap ${logo.className}`}
                    >
                        {logo.label}
                    </span>
                ))}
            </div>
        </section>
    );
};
