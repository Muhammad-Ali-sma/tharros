import { Card } from '../card'
import { Slider } from '../ui/slider';
import { Badge } from '../ui/badge';

export const ActiveChallenges = () => {
    return (
        <Card className='flex flex-col gap-8'>
            <p className='text-sm text-white'>Active Challenges</p>
            <div className='flex flex-col gap-3.5'>
                <ChallengeCard
                    title='30-Day Authenticity Challenge'
                    badge={'324 coins'}
                    daysLeft={5}
                    completed={85}
                />
                <ChallengeCard
                    title='Daily Gratitude Practice'
                    badge={'25 coins'}
                    daysLeft={12}
                    completed={45}
                />
            </div>
        </Card>
    )
}

interface IChallengeCardProps {
    title: string;
    daysLeft: number;
    badge: string;
    completed: number;
}

const ChallengeCard = ({ title, badge, completed, daysLeft }: IChallengeCardProps) => (
    <div className='p-2.5 rounded-lg bg-secondary/25 flex flex-col gap-3'>
        <div className='flex items-center gap-2 justify-between'>
            <p className='font-medium text-sm text-white'>{title}</p>
            <Badge variant={'outline'}>{badge}</Badge>
        </div>
        <div className="w-full flex flex-col gap-1.5">
            <Slider
                value={[completed]}
                max={100}
                className="w-full"
                hideThumb
            />
            <div className="flex items-center justify-between gap-2 text-[13px]">
                <label>{completed}% complete</label>
                <span>{daysLeft} days left</span>
            </div>
        </div>
    </div>
)
