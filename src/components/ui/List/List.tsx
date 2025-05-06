import cn from 'classnames';
import { FC } from 'react';
import { ListItem } from './ListItem';

interface ListProps {
    className?: string;
    items: string[];
}
export const List: FC<ListProps> = (props) => {
    const { className, items } = props;
    return (
        <ul className={cn(className, 'flex flex-col gap-6')}>
            {items.map((item) => (
                <ListItem key={item} item={item} />
            ))}
        </ul>
    );
};
