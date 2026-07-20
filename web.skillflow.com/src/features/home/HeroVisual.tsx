const cardShellBase =
    'absolute cursor-pointer transition-all duration-500 hover:z-20 hover:-translate-y-3 hover:scale-[1.045] active:-translate-y-1';

const cardBase =
    'rounded-[20px] border border-white/90 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.93),rgba(248,251,255,0.86))] dark:bg-[#1a1d26]/80 shadow-[0_14px_34px_rgba(117,132,167,0.14)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.5)] backdrop-blur-[22px] transition-all duration-500 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,252,255,0.92))] hover:shadow-[0_30px_70px_rgba(117,132,167,0.28)] dark:hover:bg-[#1a1d26] dark:hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] hover:border-white dark:hover:border-white/20';

const tinyAvatars = [
    'from-[#f4cf9f] to-[#d9a666]',
    'from-[#f1a474] to-[#c7723d]',
    'from-[#e9a186] to-[#d97b61]',
];

export const HeroVisual = () => {
    return (
        <div
            className="relative min-h-[520px] origin-top scale-[0.72] sm:scale-[0.82] lg:min-h-[550px] lg:scale-100"
            aria-hidden="true"
        >
            <div className="animate-visual-panel absolute left-[138px] top-[108px] h-[318px] w-[417px] rounded-[26px] bg-[linear-gradient(180deg,rgba(235,247,255,0.88),rgba(228,241,255,0.62))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_18px_36px_rgba(183,201,232,0.16),0_0_0_1px_rgba(235,245,255,0.22)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_36px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-[24px]" />
            <div className="animate-visual-panel-delayed absolute left-[268px] top-[140px] h-[304px] w-[308px] rounded-[24px] bg-[linear-gradient(180deg,rgba(234,246,255,0.72),rgba(228,240,255,0.42))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] shadow-[inset_0_1px_0_rgba(255,255,255,0.46)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[20px]" />
            <div className="animate-visual-panel-soft absolute left-[330px] top-[266px] h-[186px] w-[242px] rounded-[20px] bg-[linear-gradient(180deg,rgba(236,247,255,0.5),rgba(232,243,255,0.3))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] backdrop-blur-[14px]" />

            <article className={`${cardShellBase} left-[112px] top-[117px] w-[160px]`}>
                <div className={`${cardBase} animate-card-burst-1 p-[14px_14px_16px]`}>
                    <div className="flex items-center gap-2.5">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] dark:bg-white text-[0.72rem] text-white dark:text-[#111218]">
                            ✿
                        </div>
                        <div>
                            <div className="text-[0.95rem] font-extrabold tracking-[-0.03em] dark:text-white">Flora Group</div>
                            <div className="text-[0.61rem] font-semibold text-[#9c9fb0] dark:text-slate-400">
                                Last Edited 12:34PM
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center">
                            {tinyAvatars.map((gradient, index) => (
                                <span
                                    key={gradient}
                                    className={`${index === 0 ? 'ml-0' : '-ml-[5px]'
                                        } inline-flex h-[18px] w-[18px] rounded-full border border-white dark:border-[#1a1d26] bg-gradient-to-b ${gradient}`}
                                />
                            ))}
                            <span className="-ml-[5px] inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white dark:border-[#1a1d26] bg-[#f2ecff] dark:bg-[#7b61ff]/20 text-[0.5rem] font-bold text-[#8f74d9] dark:text-[#c4a9ff]">
                                12+
                            </span>
                        </div>
                        <div className="text-[0.72rem] font-bold text-[#73798c] dark:text-slate-300">54%</div>
                    </div>

                    <div className="mt-[10px] h-[3px] w-[54px] rounded-full bg-[#111111] dark:bg-white/90" />
                </div>
            </article>

            <article className={`${cardShellBase} right-[42px] top-[76px] w-[232px]`}>
                <div className={`${cardBase} animate-card-burst-2 p-[13px_16px_14px]`}>
                    <div className="text-[0.95rem] font-extrabold tracking-[-0.03em] dark:text-white">Filter</div>

                    <div className="mt-[10px] flex min-h-[26px] items-center rounded-[9px] border border-[#adbddb] dark:border-white/10 bg-white/90 dark:bg-[#111218]/80 px-[10px] text-[0.62rem] font-semibold text-[#afb3c0] dark:text-slate-400">
                        <span className="mr-[5px] text-[0.9rem] text-[#23242a] dark:text-white">⌕</span>
                        <span>Show Meseles And Mark</span>
                    </div>

                    <div className="relative my-2 text-center text-[0.7rem] text-[#cacddb] dark:text-slate-500 before:absolute before:left-0 before:top-1/2 before:h-px before:w-[41%] before:bg-[#dadee8] dark:before:bg-white/10 after:absolute after:right-0 after:top-1/2 after:h-px after:w-[41%] after:bg-[#dadee8] dark:after:bg-white/10">
                        Or
                    </div>

                    <div className="text-[0.69rem] font-bold text-[#555b6b] dark:text-slate-300">Tag:</div>

                    <div className="my-2 flex gap-2">
                        <span className="inline-flex min-h-[22px] items-center rounded-full bg-[#e4f0ff] dark:bg-[#2f6fff]/20 px-[10px] text-[0.63rem] font-bold text-[#6194ea] dark:text-[#a0caff]">
                            Sales ×
                        </span>
                        <span className="inline-flex min-h-[22px] items-center rounded-full bg-[#f0e4ff] dark:bg-[#7b61ff]/20 px-[10px] text-[0.63rem] font-bold text-[#b07fe8] dark:text-[#c4a9ff]">
                            Grups ×
                        </span>
                    </div>

                    <div className="min-h-[26px] rounded-[9px] border border-[#adbddb] dark:border-white/10 bg-white/90 dark:bg-[#111218]/80" />

                    <div className="mt-2 rounded-full border border-[#e4e8f1] dark:border-white/10 bg-[#f4f8ff] dark:bg-white/5 px-[10px] py-[6px] text-[0.59rem] font-bold text-[#76a0f4] dark:text-[#a0caff]">
                        and&nbsp;&nbsp;&nbsp;Grups : Southwest Sales Te...
                    </div>

                    <div className="mt-3 flex gap-[10px]">
                        <button
                            type="button"
                            className="rounded-[10px] bg-[#f4f1f1] dark:bg-white/10 px-4 py-[7px] text-[0.7rem] font-bold text-[#373942] dark:text-slate-300 transition-colors hover:bg-[#ece8e8] dark:hover:bg-white/20"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="rounded-[10px] bg-[#0f0f13] dark:bg-white px-4 py-[7px] text-[0.7rem] font-bold text-white dark:text-[#111218] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </article>

            <article className={`${cardShellBase} left-[150px] top-[255px] w-[178px]`}>
                <div className={`${cardBase} animate-card-burst-3 flex items-center gap-[10px] p-3`}>
                    <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1c1d23] dark:bg-white text-[0.64rem] text-white dark:text-[#111218] pl-0.5">
                        ►
                    </div>
                    <div>
                        <div className="text-[0.67rem] font-extrabold tracking-[-0.02em] dark:text-white">
                            Creating Landing Pag...
                        </div>
                        <div className="text-[0.61rem] font-semibold text-[#9c9fb0] dark:text-slate-400">Guitar Tuner</div>
                    </div>
                    <div className="ml-auto text-[0.72rem] text-[#f8a94d]">★</div>
                </div>
            </article>

            <article className={`${cardShellBase} left-[96px] top-[350px] w-[262px]`}>
                <div className={`${cardBase} animate-card-burst-4 p-[16px_16px_14px]`}>
                    <div className="flex items-center justify-between">
                        <div className="text-[0.95rem] font-extrabold tracking-[-0.03em] dark:text-white">Team</div>
                        <div className="rounded-full bg-[#effcf0] dark:bg-[#20833a]/20 px-[11px] py-1 text-[0.67rem] font-extrabold text-[#85cc91] dark:text-[#85cc91]">
                            • Connected
                        </div>
                    </div>

                    <p className="my-[11px] text-[0.81rem] leading-[1.55] text-[#a1a5b4] dark:text-slate-400">
                        Sync Team Pages And Databases With Your Skillflow Workspace
                    </p>

                    <div className="flex gap-[10px]">
                        <button
                            type="button"
                            className="flex-1 rounded-[10px] bg-[#f4f1f1] dark:bg-white/10 px-4 py-[7px] text-[0.7rem] font-bold text-[#373942] dark:text-slate-300 transition-colors hover:bg-[#ece8e8] dark:hover:bg-white/20"
                        >
                            Manage
                        </button>
                        <button
                            type="button"
                            className="flex-1 rounded-[10px] bg-[#fff1f0] dark:bg-[#ef8e82]/20 px-4 py-[7px] text-[0.7rem] font-bold text-[#ef8e82] transition-colors hover:bg-[#ffe7e5] dark:hover:bg-[#ef8e82]/30"
                        >
                            Disconnect
                        </button>
                    </div>
                </div>
            </article>

            <article className={`${cardShellBase} right-[-10px] top-[382px] w-[181px]`}>
                <div className={`${cardBase} animate-card-burst-5 p-[12px_12px_13px]`}>
                    <div className="flex items-center text-[0.76rem] font-extrabold text-[#20222a] dark:text-white">
                        <span>Today&apos;s Tasks</span>
                        <span className="ml-[6px] inline-flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#f6e8ff] dark:bg-[#b384e8]/20 text-[0.62rem] text-[#b384e8] dark:text-[#c4a9ff]">
                            3
                        </span>
                        <span className="ml-auto tracking-[0.08em] text-[#50525c] dark:text-slate-400">•••</span>
                    </div>

                    <div className="mt-3 flex items-center gap-[10px] rounded-xl bg-[#f4f6fc] dark:bg-white/5 p-[9px]">
                        <div className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#1c1d23] dark:bg-white text-[0.7rem] text-white dark:text-[#111218]">
                            Ⅱ
                        </div>
                        <div>
                            <div className="text-[0.67rem] font-extrabold leading-tight tracking-[-0.02em] dark:text-white">
                                Color Palette Selection
                            </div>
                            <div className="text-[0.61rem] font-semibold text-[#9c9fb0] dark:text-slate-400">
                                OverlyX Gamers App
                            </div>
                        </div>
                        <span className="ml-auto text-[0.72rem] text-[#f8a94d]">★</span>
                    </div>
                </div>
            </article>
        </div>
    );
};
