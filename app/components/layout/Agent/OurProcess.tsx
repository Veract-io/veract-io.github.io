import { AgentPageData } from '@/lib/custom_data'
import React from 'react'

export default function OurProcess() {
    return (
        <div className='w-full p-[4rem_2.75rem] md:p-[6.25rem_4.375rem]  flex flex-col items-center'>
            <div className='w-max p-[0.5rem_0.75rem] rounded-[0.375rem] bg-primary-text border-[1px] border-[#222222] figTreeFont text-[0.875rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>{AgentPageData.ourprocess.pageTitle}</div>
            <div className='max-w-[43.75rem] text-center syneFont font-medium md:font-normal text-[1.75rem] md:text-[3.125rem] text-white leading-[1.1em] -tracking-[0.04em] py-[1.563rem_0.938rem]'>{AgentPageData.ourprocess.title}</div>
            <div className='max-w-[37.5rem] text-center interFont font-normal md:font-medium text-[#CCCCCC] text-[0.875rem] md:text-[1.125rem] leading-[1.5em] -tracking-[0.02em]'>{AgentPageData.ourprocess.description}</div>
            <div className='flex flex-col items-center justify-center gap-[1.25rem] pt-[3.75rem]'>
                <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]'>
                    {AgentPageData.ourprocess.cards.slice(0, 2).map((card) => (
                        <div key={card.id} className='flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]'>
                            <div className='flex flex-col gap-[0.625rem]'>
                                <div className='w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Step {card.id}</div>
                                <div className='flex flex-col gap-[0.625rem]'>
                                    <div className='figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>{card.header}</div>
                                    <div className='w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]'>{card.subHeader}</div>
                                </div>
                            </div>
                            <div className='w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center p-[0.625rem]'>
                                {/* <div className='relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]'>
                                    <div className='w-[107px] h-[107px] bg-[#FFFFFF] mb-[2.688rem]' />
                                    <div className='absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Analyzing current workflow..</div>
                                </div>
                                <div className='p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]'>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                </div> */}
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    // muted
                                    loop
                                    playsInline
                                    controls={true}
                                >
                                    <source src={card.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]'>
                    {AgentPageData.ourprocess.cards.slice(2, 4).map((card) => (
                        <div key={card.id} className='flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]'>
                            <div className='flex flex-col gap-[0.625rem]'>
                                <div className='w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Step {card.id}</div>
                                <div className='flex flex-col gap-[0.625rem]'>
                                    <div className='figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>{card.header}</div>
                                    <div className='w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]'>{card.subHeader}</div>
                                </div>
                            </div>
                            <div className='w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center p-[0.625rem]'>
                                <div className='relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]'>
                                    <div className='w-[6.688rem] h-[6.688rem] bg-[#FFFFFF] mb-[2.688rem]' />
                                    <div className='absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Analyzing current workflow..</div>
                                </div>
                                <div className='p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]'>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                    <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                        <img src="/shield_icon.png" alt="placeholder image" />
                                        <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

{/* <div className='flex flex-col gap-[1.25rem] p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]'>
                        <div className='flex flex-col gap-[1rem]'>
                            <div className='w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Step 1</div>
                            <div className='flex flex-col gap-[0.625rem]'>
                                <div className='figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>Smart Analyzing</div>
                                <div className='w-[23.75rem] md:w-[15.25rem]  interFont text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]'>We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.</div>
                            </div>
                        </div>
                        <div className='w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center p-[0.625rem]'>
                            <div className='relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]'>
                                <div className='w-[107px] h-[107px] bg-[#FFFFFF] mb-[2.688rem]' />
                                <div className='absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Analyzing current workflow..</div>
                            </div>
                            <div className='p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]'>
                                <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                    <img src="/shield_icon.png" alt="placeholder image" />
                                    <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                </div>
                                <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                    <img src="/shield_icon.png" alt="placeholder image" />
                                    <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                </div>
                                <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                    <img src="/shield_icon.png" alt="placeholder image" />
                                    <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                </div>
                                <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                    <img src="/shield_icon.png" alt="placeholder image" />
                                    <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                </div>
                                <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                    <img src="/shield_icon.png" alt="placeholder image" />
                                    <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.25rem] p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]'>
                    <div className='flex flex-col gap-[1rem]'>
                        <div className='w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Step 1</div>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <div className='figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>Smart Analyzing</div>
                            <div className='w-[23.75rem] md:w-[15.25rem]  interFont text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]'>We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.</div>
                        </div>
                    </div>
                    <div className='w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center p-[0.625rem]'>
                        <div className='w-full h-full shadow-[0px_0px_0px_1px_#222222_inset]'></div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1.25rem] p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]'>
                    <div className='flex flex-col gap-[1rem]'>
                        <div className='w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Step 1</div>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <div className='figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]'>Smart Analyzing</div>
                            <div className='w-[23.75rem] md:w-[15.25rem]  interFont text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]'>We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.</div>
                        </div>
                    </div>
                    <div className='w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center p-[0.625rem]'>
                        <div className='relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]'>
                            <div className='w-[107px] h-[107px] bg-[#FFFFFF] mb-[2.688rem]' />
                            <div className='absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>Analyzing current workflow..</div>
                        </div>
                        <div className='p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]'>
                            <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                <img src="/shield_icon.png" alt="placeholder image" />
                                <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                            </div>
                            <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                <img src="/shield_icon.png" alt="placeholder image" />
                                <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                            </div>
                            <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                <img src="/shield_icon.png" alt="placeholder image" />
                                <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                            </div>
                            <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                <img src="/shield_icon.png" alt="placeholder image" />
                                <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                            </div>
                            <div className='rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]'>
                                <img src="/shield_icon.png" alt="placeholder image" />
                                <div className='interFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]'>System Check</div>
                            </div>
                        </div>
                    </div>
                </div> */}