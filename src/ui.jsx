import React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
export const cn=(...inputs)=>twMerge(clsx(inputs));
const buttonVariants=cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'bg-violet-500 text-white shadow-[0_10px_30px_rgba(116,91,255,.28)] hover:bg-violet-400 hover:-translate-y-0.5',outline:'border border-white/15 bg-white/5 hover:bg-white/10',ghost:'hover:bg-white/10'},size:{default:'h-11 px-5',lg:'h-12 px-6',sm:'h-9 px-4'}},defaultVariants:{variant:'default',size:'default'}});
export function Button({className,variant,size,asChild=false,...props}){const Comp=asChild?Slot:'button';return <Comp className={cn(buttonVariants({variant,size}),className)} {...props}/>}
export function Card({className,...props}){return <div className={cn('glass rounded-[26px] p-6',className)} {...props}/>}
