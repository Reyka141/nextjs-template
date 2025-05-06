'use client';
import cn from 'classnames';
import Image from 'next/image';
import { FC, useState } from 'react';

import { Button } from '../Button/Button';
interface CodeSnippetProps {
    className?: string;
    textToCopy: string;
    children?: React.ReactNode;
    language: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = (props) => {
    const { className, textToCopy, children, language } = props;

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Ошибка при копировании:', err);
        }
    };
    return (
        <div className={cn(className, 'rounded-t-3xl shadow h-[358px] flex flex-col sm:mx-4 mx-1 ')}>
            <div className="p-6 flex justify-between items-center bg-gray rounded-t-3xl">
                <p className="heading-4">{language}</p>
                <Button theme="clear" className="flex items-center gap-2" onClick={handleCopy}>
                    <Image src="/quickStartGuide/copy.svg" alt="copy" width={16} height={16} />
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
            </div>
            <div className="sm:p-6 p-2 bg-background flex-1 pt-[50px] sm:pt-[98px]">
                <code className="heading-4 text-left inline-block">{children}</code>
            </div>
        </div>
    );
};
