export type Tool = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  icon: string;
  accepts: string[];
  outputFormat: string;
  toolType: string;
  howTo: string[];
  faq: { q: string; a: string }[];
  related: string[];
  requiresOptions?: boolean;
};

export const TOOLS: Tool[] = [
  {
    slug: 'webm-to-mp4',
    title: 'WebM to MP4',
    h1: 'WebM to MP4 Converter',
    description: 'Convert WebM videos to MP4 online for free.',
    intro: 'Convert your WebM videos to the universally compatible MP4 format. Our free online tool handles the conversion securely in the cloud — no software installation required.',
    icon: '🎬',
    accepts: ['.webm'],
    outputFormat: 'mp4',
    toolType: 'webm-to-mp4',
    howTo: [
      'Upload your .webm file by dragging it or clicking the upload area',
      'Click "Convert Now" to start the process',
      'Wait a few seconds for processing to complete',
      'Download your converted MP4 file'
    ],
    faq: [
      { q: 'Is WebM to MP4 conversion free?', a: 'Yes, completely free. No sign-up required.' },
      { q: 'How long does conversion take?', a: 'It depends on file size, but usually takes just a few seconds to a minute.' },
      { q: 'Are my files kept private?', a: 'Yes. All files are automatically deleted after 2 hours. We do not look at your content.' },
      { q: 'What is the max file size?', a: 'You can upload files up to 200 MB.' }
    ],
    related: ['mov-to-mp4', 'video-converter', 'compress-video']
  },
  {
    slug: 'mp4-to-mp3',
    title: 'MP4 to MP3',
    h1: 'MP4 to MP3 Converter',
    description: 'Extract MP3 audio from MP4 video files online for free.',
    intro: 'Easily extract the audio track from any MP4 video and save it as an MP3 file. Fast, free, and secure.',
    icon: '🎵',
    accepts: ['.mp4'],
    outputFormat: 'mp3',
    toolType: 'mp4-to-mp3',
    howTo: [
      'Upload your .mp4 video file',
      'Click "Convert Now"',
      'Download your extracted MP3 audio file'
    ],
    faq: [
      { q: 'Does extracting audio reduce quality?', a: 'No, we extract the audio track directly with minimal quality loss.' },
      { q: 'Is it safe?', a: 'Yes, all files are deleted after 2 hours.' }
    ],
    related: ['video-to-mp3', 'extract-audio', 'audio-converter']
  },
  {
    slug: 'transcribe-audio',
    title: 'Transcribe Audio',
    h1: 'Free Audio Transcription Tool',
    description: 'Convert audio to text (TXT) online for free using AI.',
    intro: 'Transcribe your audio or video files into text instantly using advanced AI models. No account needed.',
    icon: '📝',
    accepts: ['.mp3', '.mp4', '.wav', '.m4a', '.mov', '.webm'],
    outputFormat: 'txt',
    toolType: 'transcribe',
    requiresOptions: true,
    howTo: [
      'Upload your audio or video file',
      'Select TXT format',
      'Click "Convert Now" and let our AI transcribe it',
      'Download your text file'
    ],
    faq: [
      { q: 'Is the transcription accurate?', a: 'Yes, we use advanced AI (Whisper) for high accuracy.' },
      { q: 'What languages are supported?', a: 'The AI auto-detects over 90 languages.' }
    ],
    related: ['auto-subtitle', 'translate-subtitles', 'extract-audio']
  },
  {
    slug: 'auto-subtitle',
    title: 'Auto Subtitles',
    h1: 'Generate Subtitles Automatically',
    description: 'Create SRT or VTT subtitles for your videos online.',
    intro: 'Automatically generate highly accurate subtitles (SRT or VTT) from your video or audio files using AI.',
    icon: '💬',
    accepts: ['.mp3', '.mp4', '.wav', '.m4a', '.mov', '.webm'],
    outputFormat: 'srt',
    toolType: 'auto-subtitle',
    requiresOptions: true,
    howTo: [
      'Upload your media file',
      'Select SRT or VTT output format',
      'Click "Convert Now"',
      'Download your subtitle file'
    ],
    faq: [
      { q: 'Can I upload a video?', a: 'Yes, we extract the audio and generate subtitles automatically.' }
    ],
    related: ['transcribe-audio', 'translate-subtitles']
  },
  {
    slug: 'translate-subtitles',
    title: 'Translate Subtitles',
    h1: 'Audio & Subtitle Translator',
    description: 'Translate audio to French, Spanish, or English subtitles.',
    intro: 'Upload your video or audio, and we will automatically generate translated subtitles in French, Spanish, or English.',
    icon: '🌍',
    accepts: ['.mp3', '.mp4', '.wav', '.m4a', '.mov', '.webm'],
    outputFormat: 'srt',
    toolType: 'translate-subtitle',
    requiresOptions: true,
    howTo: [
      'Upload your media file',
      'Select your target language (French, Spanish, English)',
      'Click "Convert Now"',
      'Download the translated SRT file'
    ],
    faq: [
      { q: 'How does it work?', a: 'We transcribe the audio using AI, translate the text, and generate a perfectly timed subtitle file.' }
    ],
    related: ['auto-subtitle', 'transcribe-audio']
  },
  {
    slug: 'clean-audio',
    title: 'Clean Audio',
    h1: 'AI Audio Noise Reduction',
    description: 'Remove background noise from audio and video files.',
    intro: 'Enhance your voice recordings by automatically removing background noise, hiss, and hum using fast FFT filtering.',
    icon: '✨',
    accepts: ['.mp3', '.mp4', '.wav', '.m4a', '.mov', '.webm'],
    outputFormat: 'mp3',
    toolType: 'clean-audio',
    howTo: [
      'Upload your media file',
      'Click "Convert Now"',
      'Download the noise-reduced audio or video file'
    ],
    faq: [
      { q: 'Will this affect the voice quality?', a: 'It focuses on reducing background noise while preserving voice clarity.' }
    ],
    related: ['extract-audio', 'video-to-mp3']
  },
  {
    slug: 'mov-to-mp4',
    title: 'MOV to MP4',
    h1: 'MOV to MP4 Converter',
    description: 'Convert Apple MOV videos to MP4 online for free.',
    intro: 'Convert your iPhone or Mac MOV videos to the universally compatible MP4 format instantly.',
    icon: '🎥',
    accepts: ['.mov'],
    outputFormat: 'mp4',
    toolType: 'mov-to-mp4',
    howTo: ['Upload .mov file', 'Click Convert', 'Download .mp4'],
    faq: [],
    related: ['webm-to-mp4']
  },
  {
    slug: 'compress-video',
    title: 'Compress Video',
    h1: 'Free Video Compressor',
    description: 'Reduce video file size online without losing too much quality.',
    intro: 'Compress your large video files to save space or share online easier.',
    icon: '📦',
    accepts: ['.mp4', '.webm', '.mov', '.mkv', '.avi'],
    outputFormat: 'mp4',
    toolType: 'compress-video',
    howTo: ['Upload video', 'Wait for compression', 'Download smaller video'],
    faq: [],
    related: ['webm-to-mp4']
  },
  {
    slug: 'trim-video',
    title: 'Trim Video',
    h1: 'Online Video Trimmer',
    description: 'Cut and trim video files online for free. Set start and end time.',
    intro: 'Quickly cut out the parts of the video you do not need.',
    icon: '✂️',
    accepts: ['.mp4', '.webm', '.mov'],
    outputFormat: 'mp4',
    toolType: 'trim-video',
    requiresOptions: true,
    howTo: ['Upload video', 'Enter start and end times', 'Click Convert', 'Download trimmed video'],
    faq: [],
    related: ['compress-video']
  },
  {
    slug: 'video-converter',
    title: 'Video Converter',
    h1: 'Universal Video Converter',
    description: 'Convert video files between WebM, MOV, AVI, MKV, and MP4 online.',
    intro: 'A versatile tool to convert between almost any video format.',
    icon: '🔄',
    accepts: ['.mp4', '.webm', '.mov', '.mkv', '.avi'],
    outputFormat: 'custom',
    toolType: 'video-converter',
    requiresOptions: true,
    howTo: ['Upload video', 'Select format', 'Convert', 'Download'],
    faq: [],
    related: ['webm-to-mp4', 'mov-to-mp4']
  }
];

export function getAllSlugs() {
  return TOOLS.map((t) => t.slug);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
