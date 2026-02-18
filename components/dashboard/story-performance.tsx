import { storyPerformances } from '@/lib/constants';
import { Card } from '../card'
import { Heart, MessageCircle } from 'lucide-react';

export const StoryPerformance = () => {
    return (
        <Card className='flex flex-col gap-8'>
            <p className='text-sm text-white'>Recent Story Performance</p>
            <div className='flex flex-col gap-3.5'>
                {storyPerformances.map((story) => (
                    <StoryCard
                        key={story.title}
                        title={story.title}
                        likes={story.likes}
                        comments={story.comments}
                        views={story.views}
                    />
                ))}
            </div>
        </Card>
    )
}

interface IStoryCardProps {
    title: string;
    likes: number;
    comments: number;
    views: number;
}

const StoryCard = ({ title, likes, comments, views }: IStoryCardProps) => (
    <div className='p-2.5 rounded-lg bg-secondary/25'>
        <p className='font-medium text-sm text-white'>{title}</p>
        <div className='flex items-center gap-3.5 text-muted'>
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