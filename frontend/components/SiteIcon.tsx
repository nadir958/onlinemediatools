export type IconName =
  | 'webmToMp4'
  | 'movToMp4'
  | 'mp4ToMp3'
  | 'videoToMp3'
  | 'compressVideo'
  | 'extractAudio'
  | 'removeAudio'
  | 'audioConverter'
  | 'videoConverter'
  | 'trimVideo'
  | 'noSignup'
  | 'secure'
  | 'autoDelete'
  | 'fastProcessing'
  | 'videoCategory'
  | 'audioCategory'
  | 'fileReady'
  | 'check';

interface SiteIconProps {
  name: IconName;
  className?: string;
}

const ICONS: Record<IconName, string> = {
  webmToMp4: '🎞️',
  movToMp4: '🍎',
  mp4ToMp3: '🎵',
  videoToMp3: '🎧',
  compressVideo: '📦',
  extractAudio: '🔊',
  removeAudio: '🔇',
  audioConverter: '🎼',
  videoConverter: '🎬',
  trimVideo: '✂️',
  noSignup: '👤',
  secure: '🛡️',
  autoDelete: '🕒',
  fastProcessing: '⚡',
  videoCategory: '🎥',
  audioCategory: '🎶',
  fileReady: '✅',
  check: '✓',
};

function mapSizeToText(className: string) {
  if (className.includes('w-12') || className.includes('h-12')) return 'text-5xl';
  if (className.includes('w-10') || className.includes('h-10')) return 'text-4xl';
  if (className.includes('w-8') || className.includes('h-8')) return 'text-3xl';
  if (className.includes('w-6') || className.includes('h-6')) return 'text-2xl';
  if (className.includes('w-5') || className.includes('h-5')) return 'text-xl';
  if (className.includes('w-4') || className.includes('h-4')) return 'text-base';
  return 'text-2xl';
}

export default function SiteIcon({ name, className = 'w-6 h-6' }: SiteIconProps) {
  const textSize = mapSizeToText(className);
  const passthrough = className
    .replace(/w-\S+/g, '')
    .replace(/h-\S+/g, '')
    .trim();

  return (
    <span className={`${textSize} leading-none inline-flex items-center justify-center ${passthrough}`.trim()} aria-hidden="true">
      {ICONS[name]}
    </span>
  );
}
