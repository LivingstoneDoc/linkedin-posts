import React, { useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";
import type { PostProps } from "../types/post-types";

const Post = ({
  authorName,
  authorRole,
  avatarUrl,
  postText,
  mediaUrl,
  mediaType,
  comments,
}: PostProps) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm mb-2 max-w-[552px] mx-auto">
      <div className="p-3 flex items-start gap-2">
        <img
          src={avatarUrl}
          alt={authorName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-700 hover:underline cursor-pointer">
            {authorName}
          </h3>
          <p className="text-xs text-gray-600">{authorRole}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <span>1w</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM3 8a5 5 0 0 1 5-5v5h5a5 5 0 0 1-10 0z" />
            </svg>
          </p>
        </div>
        <button className="text-gray-600 hover:bg-gray-100 rounded-full p-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-3">
        <p className="text-sm text-gray-900 whitespace-pre-wrap leading-5">
          {postText}
        </p>
      </div>

      {mediaUrl && (
        <div className="w-full">
          {mediaType === "video" ? (
            <video
              src={mediaUrl}
              controls
              className="w-full max-h-[500px] object-contain bg-black"
            />
          ) : (
            <img
              src={mediaUrl}
              alt="Post media"
              className="w-full max-h-[500px] object-contain"
            />
          )}
        </div>
      )}

      {comments.length > 0 && (
        <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <span className="bg-blue-600 rounded-full p-0.5">
                <ThumbsUp className="w-3 h-3 text-white fill-white" />
              </span>
            </div>
            <span className="hover:text-blue-600 hover:underline cursor-pointer ml-1">
              127
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="hover:text-blue-600 hover:underline cursor-pointer"
              onClick={toggleComments}
            >
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </span>
          </div>
        </div>
      )}

      <div className="border-t border-gray-300 mx-4"></div>

      <div className="px-2 py-1.5 flex items-center justify-around">
        <button className="flex items-center gap-1.5 px-4 py-2.5 rounded hover:bg-gray-100 text-gray-600 font-semibold text-sm transition-colors">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button
          onClick={toggleComments}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded hover:bg-gray-100 text-gray-600 font-semibold text-sm transition-colors relative"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
          {comments.length > 0 && (
            <span className="ml-0.5 text-xs text-gray-500">
              ({comments.length})
            </span>
          )}
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2.5 rounded hover:bg-gray-100 text-gray-600 font-semibold text-sm transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>

      {showComments && comments.length > 0 && (
        <div className="border-t border-gray-300">
          <div className="px-4 py-3 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <img
                  src={comment.avatarUrl}
                  alt={comment.authorName}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <h4 className="text-sm font-semibold text-gray-900 hover:text-blue-700 hover:underline cursor-pointer">
                      {comment.authorName}
                    </h4>
                    <p className="text-sm text-gray-900 mt-0.5 leading-5">
                      {comment.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1 px-3 text-xs font-semibold text-gray-600">
                    <button className="hover:text-blue-600 hover:underline">
                      Like
                    </button>
                    <span>•</span>
                    <button className="hover:text-blue-600 hover:underline">
                      Reply
                    </button>
                    <span>•</span>
                    <span className="font-normal">1w</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-3 flex gap-2 items-start">
            <img
              src={avatarUrl}
              alt="Your avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1.5 hover:bg-gray-50">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-600"
              />
              <button className="text-gray-400 hover:text-gray-600">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
