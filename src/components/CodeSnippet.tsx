import ReactMarkdown from 'react-markdown';

interface CodeSnippetProps {
  data: Record<string, any> | undefined;
}

export default function CodeSnippet({ data }: CodeSnippetProps) {
  if (!data || !data.code) return null;

  const language = data.language || 'text';
  const markdown = `\`\`\`${language}
${data.code}
\`\`\``;

  return (
    <div className="my-10">
      {/* Optional Label */}
      <div className="text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
        {language} Snippet
      </div>
      
      {/* Render as Markdown to leverage existing prose styles */}
      <div className="prose prose-invert prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:m-0 max-w-none">
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
