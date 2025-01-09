"use client";

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function RulesContent() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/rules.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container">
        <article className="prose prose-invert mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}