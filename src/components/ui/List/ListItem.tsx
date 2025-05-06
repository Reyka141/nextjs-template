import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
interface ListItemProps {
    className?: string;
    item: string;
}
export const ListItem: FC<ListItemProps> = (props) => {
    const { className, item } = props;
    return (
        <li className={cn(className, 'flex items-center gap-3.5 heading-4')}>
            <Image src="/icons/tick-circle.svg" className="fill-white" alt="check" width={24} height={24} />
            {item}
        </li>
    );
};
