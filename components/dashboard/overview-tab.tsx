import React from 'react'
import { Card } from '../card'
import { Award, BookOpen, Coins, MessageCircle } from 'lucide-react'
import { StoryPerformance } from './story-performance'
import { ActiveChallenges } from './active-challenges'

export const OverviewTab = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-3 md:gap-5'>
                <OverviewCard title="Tharros Coins" description="1250" icon={<Coins className='w-8 h-8' />} />
                <OverviewCard title="Stories Shared" description="8" icon={<BookOpen className='w-8 h-8' />} />
                <OverviewCard title="Forum Posts" description="23" icon={<MessageCircle className='w-8 h-8' />} />
                <OverviewCard title="Current Streak" description="15" icon={<Award className='w-8 h-8' />} />
            </div>
            <div className='flex gap-5'>
                <StoryPerformance />
                <ActiveChallenges />
            </div>
        </div>
    )
}

interface IOverviewCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const OverviewCard = ({ title, description, icon }: IOverviewCardProps) => (
    <Card className='flex items-center justify-between gap-2 col-span-6 lg:col-span-3'>
        <div>
            <small>{title}</small>
            <span className='text-2xl text-white font-bold block'>{description}</span>
        </div>
        {icon}
    </Card>
)