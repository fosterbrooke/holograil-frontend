import { useState } from "react";

interface CopyCompProps {
    license: string;
    index: number;
}

const CopyComp: React.FC<CopyCompProps> = ({ license, index }) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = async (licenseKey: string, index: number) => {
        try {
            await navigator.clipboard.writeText(licenseKey);
            setCopiedIndex(index);
            setTimeout(() => {
                setCopiedIndex(null);
            }, 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <span
            className="hover:cursor-pointer ml-2"
            onClick={() => handleCopy(license, index)}
        >
            {copiedIndex === index ? (
                <img src="/accounts/overview/check.png" width="20" height="20" alt="copied" />
            ) : (
                <img src="/accounts/overview/copy.svg" width="20" height="20" alt="copy" />
            )}
        </span>
    );
};

export default CopyComp;