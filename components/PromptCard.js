"use client";

import { useState } from "react/";
import Image from "next/image";

function PromptCard({ post, handleTagClick, handleTagEdit, handleTagDelete }) {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };
  return (
    <div>
      <div>{post?.prompt}</div>
      <div onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post?.tag}
      </div>
      <div className="copy_btn" onClick={handleCopy}>
        <Image
          src={
            post.prompt === copied
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
          }
          width={12}
          height={12}
        />
      </div>
    </div>
  );
}

export default PromptCard;
