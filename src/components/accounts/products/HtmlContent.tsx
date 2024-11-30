import React from 'react';
import DOMPurify from 'dompurify';

interface HtmlContentProps {
  htmlString: string;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ htmlString }) => {
  const cleanHtml = DOMPurify.sanitize(htmlString); // Sanitize the HTML string

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: cleanHtml }} // Set the sanitized inner HTML
    />
  );
};

export default HtmlContent;
