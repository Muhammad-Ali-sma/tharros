import { Card } from '../card'
import { Heart, MessageCircle } from 'lucide-react';

export const StoryPerformance = () => {
    return (
        <Card className='flex flex-col gap-8'>
            <p className='text-sm text-white'>Recent Story Performance</p>
            <div className='flex flex-col gap-3.5'>
                <StoryCard title="My Journey from Fear to Confidence" likes={67} comments={12} views="234" />
                <StoryCard title="Learning to Say No: A People-Pleaser's Guide" likes={79} comments={28} views="345" />
                <StoryCard title="The Vulnerability That Changed Everything" likes={35} comments={129} views="248" />
            </div>
        </Card>
    )
}

interface IStoryCardProps {
    title: string;
    likes: number;
    comments: number;
    views: string;
}

const StoryCard = ({ title, likes, comments, views }: IStoryCardProps) => (
    <div className='p-2.5 rounded-lg bg-secondary/25'>
        <p className='font-medium text-sm text-white'>{title}</p>
        <div className='flex items-center gap-3.5'>
            <div className='flex items-center gap-1'>
                <Heart className='w-3 h-3' /> <span className='text-[13px]'>{likes}</span>
            </div>
            <div className='flex items-center gap-1'>
                <MessageCircle className='w-3 h-3' /> <span className='text-[13px]'>{comments}</span>
            </div>
            <span className='text-[13px]'>{views} views</span>
        </div>
    </div>
)