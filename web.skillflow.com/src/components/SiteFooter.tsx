import { SiteLink } from './SiteLink';

const companyLinks = ['Security', 'Pricing', 'Legal'];
const socials = ['in', '◎', '𝕏'];

export const SiteFooter = () => {
    return (
        <footer className="relative z-10 bg-[#f9f8fd] dark:bg-[#0a0a0c] px-0 pb-0 pt-8 transition-colors duration-500">
            <div className="w-full overflow-hidden bg-black px-6 pb-8 pt-14 text-white sm:px-10 lg:px-0">
                <div className="mx-auto max-w-[1320px] px-0 lg:px-12">
                    <div className="grid gap-12 lg:grid-cols-[1.45fr_0.55fr_0.55fr_0.55fr]">
                        <div className="max-w-[310px]">
                            <div className="flex items-center gap-2 text-[1.02rem] font-bold tracking-[-0.03em]">
                                <span className="text-[1rem]">☁</span>
                                <span>Basewell</span>
                            </div>
                            <p className="mt-6 text-[1rem] leading-[1.65] text-white/78">
                                Skillflow helps your team train smarter, faster, and with less
                                manual effort.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[1.02rem] font-semibold text-white">Navigation</h3>
                            <ul className="mt-6 space-y-3 text-[1rem] text-white/80">
                                <li>
                                    <SiteLink to="/about" className="transition-colors hover:text-white">
                                        About
                                    </SiteLink>
                                </li>
                                <li>
                                    <SiteLink to="/pricing" className="transition-colors hover:text-white">
                                        Pricing
                                    </SiteLink>
                                </li>
                                <li>
                                    <SiteLink to="/blog" className="transition-colors hover:text-white">
                                        Blog
                                    </SiteLink>
                                </li>
                                <li>
                                    <SiteLink to="/customers" className="transition-colors hover:text-white">
                                        Customers
                                    </SiteLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[1.02rem] font-semibold text-white">Company</h3>
                            <ul className="mt-6 space-y-3 text-[1rem] text-white/80">
                                {companyLinks.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[1.02rem] font-semibold text-white">Navigation</h3>
                            <div className="mt-6 flex items-center gap-3">
                                {socials.map((social) => (
                                    <span
                                        key={social}
                                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[0.85rem] text-white/90"
                                    >
                                        {social}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6 text-[0.92rem] text-white/52">
                        Copyright 2025 The Skillflow All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
