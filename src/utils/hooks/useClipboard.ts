import { useCallback, useEffect, useState } from 'react';

type CopyStatus = 'inactive' | 'copied' | 'failed';

const useCopyToClipboard = (
    text: string,
    notifyTimeout = 2000
): [CopyStatus, (newText?: string) => void] => {
    const [copyStatus, setCopyStatus] = useState<CopyStatus>('inactive');
    const copyToClipboard = useCallback(
        async (newText?: string) => {
            try {
                await navigator.clipboard.writeText(newText || text);
                setCopyStatus('copied');
            } catch (error) {
                setCopyStatus('failed');
            }
        },
        [text]
    );

    useEffect(() => {
        if (copyStatus === 'inactive') return;

        const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout);
        clearTimeout(timeoutId);
    }, [copyStatus, notifyTimeout]);

    return [copyStatus, copyToClipboard];
};

export default useCopyToClipboard;
