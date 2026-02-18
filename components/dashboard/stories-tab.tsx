import { Button } from '../ui/button'
import { Heart, MessageCircle } from 'lucide-react';
import { stories } from '@/lib/constants';
import { Card } from '../card';
import moment from 'moment';
import { Badge } from '../ui/badge';

export const StoriesTab = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between gap-2'>
                <p className='text-sm text-white'>Your Stories</p>
                <Button size={'xs'} className="py-2">
                    Write New Story
                </Button>
            </div>
            <div className='flex flex-col gap-5'>
                {stories.map((story) => (
                    <StoryCard
                        key={story.title}
                        title={story.title}
                        likes={story.likes}
                        comments={story.comments}
                        views={story.views}
                        publishedAt={story.publishedAt}
                    />
                ))}
            </div>
        </div>
    )
}

interface IStoryCardProps {
    title: string;
    likes: number;
    comments: number;
    views: number;
    publishedAt: string;
}

const StoryCard = ({ title, likes, comments, views, publishedAt }: IStoryCardProps) => (
    <Card className='flex gap-1.5 justify-between flex-col sm:flex-row'>
        <div className='flex flex-col gap-1.5'>
            <p className='font-medium text-sm text-white'>{title}</p>
            <div className='flex items-center gap-3.5 text-muted'>
                <div className='flex items-center gap-1'>
                    <Heart className='w-3 h-3' /> <span className='text-[13px]'>{likes}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <MessageCircle className='w-3 h-3' /> <span className='text-[13px]'>{comments}</span>
                </div>
                <span className='text-[13px]'>{views} views</span>
                <span className='text-[13px]'>{moment(publishedAt).fromNow()}</span>
            </div>
        </div>
        <div className='flex gap-1.5 h-fit items-center justify-end sm:justify-start'>
            <Badge variant={'outline'} className='text-green-500 border-green-500 h-fit'>
                Published
            </Badge>
            <Button size={'xs'} variant={'ghost'} className='hover:bg-white! hover:text-black!'>
                Edit
            </Button>
            <Button size={'xs'} variant={'ghost'} className='hover:bg-white! hover:text-black!'>
                View
            </Button>
        </div>
    </Card>
)