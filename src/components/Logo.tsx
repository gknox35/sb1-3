import React from 'react';

export function Logo({ size = 'large' }: { size?: 'large' | 'small' }) {
  const textSize = size === 'large' ? 'text-2xl' : 'text-xl';
  const triangleSize = size === 'large' ? 'w-7 h-7' : 'w-5 h-5';
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        {/* Right-pointing triangle */}
        <div className={`${triangleSize}`}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4L19 12L5 20V4Z" fill="#546cfc"/>
          </svg>
        </div>
        {/* Left-pointing triangle */}
        <div className={`${triangleSize} -ml-1`}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4L5 12L19 20V4Z" fill="#fcb404"/>
          </svg>
        </div>
      </div>
      <span className={`font-bold text-gray-900 ${textSize} tracking-tight`}>
        infergram
      </span>
    </div>
  );
}