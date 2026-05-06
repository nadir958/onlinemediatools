export interface ToolOption {
  key: string;
  label: string;
  type: 'select' | 'time';
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

export interface Tool {
  slug: string;
  title: string;
  h1: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  accepts: string[];
  outputFormat: string;
  toolType: string;
  options?: ToolOption[];
  related: string[];
  faq: { q: string; a: string }[];
  howTo: string[];
  intro: string;
  category: 'video' | 'audio' | 'converter' | 'compressor';
}

export const TOOLS: Tool[] = [
  {
    slug: 'webm-to-mp4',
    title: 'WebM to MP4',
    h1: 'WebM to MP4 Converter',
    description: 'Convert WebM videos to MP4 online for free.',
    metaTitle: 'WebM to MP4 Converter Online - Free & Fast | OnlineMediaTools',
    metaDescription: 'Convert WebM videos to MP4 online for free. Upload your WebM file, convert it securely, and download your MP4. Files are automatically deleted after 2 hours.',
    icon: '🎬',
    accepts: ['.webm'],
    outputFormat: 'mp4',
    toolType: 'webm_to_mp4',
    related: ['mov-to-mp4', 'video-converter', 'compress-video', 'mp4-to-mp3'],
    intro: 'Convert your WebM videos to the universally compatible MP4 format. Our free online tool handles the conversion securely in the cloud — no software installation required.',
    howTo: ['Upload your .webm file by dragging it or clicking the upload area','Click "Convert Now" to start the process','Wait a few seconds for processing to complete','Download your converted MP4 file'],
    faq: [
      { q: 'Is WebM to MP4 conversion free?', a: 'Yes, completely free. No sign-up required.' },
      { q: 'How long does conversion take?', a: 'Most files convert in under a minute depending on size.' },
      { q: 'Are my files kept private?', a: 'Yes. Files are automatically deleted after 2 hours.' },
      { q: 'What is the max file size?', a: 'Up to 200 MB per file.' },
    ],
    category: 'converter',
  },
  {
    slug: 'mov-to-mp4',
    title: 'MOV to MP4',
    h1: 'MOV to MP4 Converter',
    description: 'Convert Apple MOV videos to MP4 online for free.',
    metaTitle: 'MOV to MP4 Converter Online - Free & Fast | OnlineMediaTools',
    metaDescription: 'Convert MOV files to MP4 online for free. Works with iPhone and Mac videos. Secure upload, fast conversion, auto-deleted after 2 hours.',
    icon: '🎥',
    accepts: ['.mov'],
    outputFormat: 'mp4',
    toolType: 'mov_to_mp4',
    related: ['webm-to-mp4', 'video-converter', 'compress-video', 'mp4-to-mp3'],
    intro: 'Convert your MOV files (from iPhone, iPad, or Mac) to MP4 format that works on any device. Fast, free, and no account needed.',
    howTo: ['Upload your .mov file','Click "Convert Now"','Download your MP4 file'],
    faq: [
      { q: 'Can I convert iPhone videos?', a: 'Yes, MOV is the default iPhone video format and converts perfectly.' },
      { q: 'Will I lose quality?', a: 'Minimal quality loss using H.264 encoding.' },
    ],
    category: 'converter',
  },
  {
    slug: 'mp4-to-mp3',
    title: 'MP4 to MP3',
    h1: 'MP4 to MP3 Converter',
    description: 'Extract MP3 audio from MP4 video files online for free.',
    metaTitle: 'MP4 to MP3 Converter Online - Extract Audio Free | OnlineMediaTools',
    metaDescription: 'Convert MP4 to MP3 online for free. Extract high-quality audio from any MP4 video. No software needed, files deleted after 2 hours.',
    icon: '🎵',
    accepts: ['.mp4', '.m4v'],
    outputFormat: 'mp3',
    toolType: 'mp4_to_mp3',
    options: [{ key: 'bitrate', label: 'Audio Quality', type: 'select', options: [{ value: '128k', label: '128 kbps' }, { value: '192k', label: '192 kbps (Recommended)' }, { value: '320k', label: '320 kbps (High)' }], defaultValue: '192k' }],
    related: ['video-to-mp3', 'extract-audio', 'audio-converter', 'remove-audio-from-video'],
    intro: 'Extract audio from any MP4 video and save it as an MP3 file. Perfect for saving music, lectures, or podcasts.',
    howTo: ['Upload your MP4 file','Choose audio quality (optional)','Click "Extract Audio"','Download your MP3 file'],
    faq: [
      { q: 'What bitrate will the MP3 be?', a: 'Default is 192 kbps. You can choose 128, 192, or 320 kbps.' },
      { q: 'Does this work with any MP4 file?', a: 'Yes, as long as the MP4 contains an audio track.' },
    ],
    category: 'audio',
  },
  {
    slug: 'video-to-mp3',
    title: 'Video to MP3',
    h1: 'Video to MP3 Converter',
    description: 'Convert any video file to MP3 audio online for free.',
    metaTitle: 'Video to MP3 Converter Online - Free Audio Extractor | OnlineMediaTools',
    metaDescription: 'Convert video to MP3 online for free. Supports MP4, WebM, MOV, AVI, MKV. Fast, secure, and files auto-deleted after 2 hours.',
    icon: '🔊',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv', '.flv'],
    outputFormat: 'mp3',
    toolType: 'video_to_mp3',
    related: ['mp4-to-mp3', 'extract-audio', 'audio-converter', 'remove-audio-from-video'],
    intro: 'Extract audio from any video format and get an MP3 file instantly. Works with MP4, WebM, MOV, AVI, MKV, and more.',
    howTo: ['Upload any video file','Click "Convert to MP3"','Download your MP3 audio'],
    faq: [{ q: 'Which video formats are supported?', a: 'MP4, WebM, MOV, AVI, MKV, FLV and more.' }],
    category: 'audio',
  },
  {
    slug: 'compress-video',
    title: 'Compress Video',
    h1: 'Compress Video Online',
    description: 'Reduce video file size online without losing too much quality.',
    metaTitle: 'Compress Video Online - Reduce File Size Free | OnlineMediaTools',
    metaDescription: 'Compress video files online for free. Reduce file size for email, upload, or storage. Choose quality level. Files deleted after 2 hours.',
    icon: '📦',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv'],
    outputFormat: 'mp4',
    toolType: 'compress_video',
    options: [{ key: 'quality', label: 'Quality Level', type: 'select', options: [{ value: 'high_quality', label: 'High Quality (larger file)' }, { value: 'balanced', label: 'Balanced (recommended)' }, { value: 'small_size', label: 'Small Size (lower quality)' }], defaultValue: 'balanced' }],
    related: ['video-converter', 'webm-to-mp4', 'trim-video', 'remove-audio-from-video'],
    intro: 'Reduce your video file size online without complicated settings. Choose your quality level and let us handle the compression.',
    howTo: ['Upload your video file','Select compression quality','Click "Compress Video"','Download the compressed file'],
    faq: [{ q: 'How much will it reduce the file size?', a: 'Typically 30-70% depending on the quality setting chosen.' }],
    category: 'compressor',
  },
  {
    slug: 'extract-audio',
    title: 'Extract Audio',
    h1: 'Extract Audio from Video',
    description: 'Extract audio from any video file and download as MP3, WAV, or AAC.',
    metaTitle: 'Extract Audio from Video Online Free | OnlineMediaTools',
    metaDescription: 'Extract audio from video files online. Save as MP3, WAV, or AAC. Supports all major video formats. Free, no signup, files deleted after 2 hours.',
    icon: '🎙️',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv'],
    outputFormat: 'mp3',
    toolType: 'extract_audio',
    options: [{ key: 'fmt', label: 'Output Format', type: 'select', options: [{ value: 'mp3', label: 'MP3' }, { value: 'wav', label: 'WAV' }, { value: 'aac', label: 'AAC' }], defaultValue: 'mp3' }],
    related: ['mp4-to-mp3', 'video-to-mp3', 'audio-converter', 'remove-audio-from-video'],
    intro: 'Pull the audio track out of any video and save it in your preferred format. Supports MP3, WAV, and AAC output.',
    howTo: ['Upload your video file','Choose output audio format','Click "Extract Audio"','Download your audio file'],
    faq: [{ q: 'Which audio formats can I export?', a: 'MP3, WAV, and AAC are supported.' }],
    category: 'audio',
  },
  {
    slug: 'remove-audio-from-video',
    title: 'Remove Audio from Video',
    h1: 'Remove Audio from Video',
    description: 'Strip the audio track from a video file online for free.',
    metaTitle: 'Remove Audio from Video Online Free | OnlineMediaTools',
    metaDescription: 'Remove audio from video online for free. Create silent videos by stripping the audio track. Fast processing, files deleted after 2 hours.',
    icon: '🔇',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv'],
    outputFormat: 'mp4',
    toolType: 'remove_audio',
    related: ['extract-audio', 'compress-video', 'video-converter', 'trim-video'],
    intro: 'Remove the audio track from any video to create a silent video file. Useful for privacy, remixing, or adding your own audio later.',
    howTo: ['Upload your video','Click "Remove Audio"','Download the silent video'],
    faq: [{ q: 'Will the video quality change?', a: 'No. The video stream is copied directly without re-encoding.' }],
    category: 'video',
  },
  {
    slug: 'audio-converter',
    title: 'Audio Converter',
    h1: 'Online Audio Converter',
    description: 'Convert audio files between MP3, WAV, AAC, OGG, and FLAC online.',
    metaTitle: 'Audio Converter Online - MP3, WAV, AAC, OGG, FLAC | OnlineMediaTools',
    metaDescription: 'Convert audio files online for free. Supports MP3, WAV, AAC, OGG, FLAC. Fast, secure conversion with auto-delete after 2 hours.',
    icon: '🎧',
    accepts: ['.mp3', '.wav', '.aac', '.ogg', '.flac', '.m4a'],
    outputFormat: 'mp3',
    toolType: 'audio_converter',
    options: [{ key: 'target_fmt', label: 'Output Format', type: 'select', options: [{ value: 'mp3', label: 'MP3' }, { value: 'wav', label: 'WAV' }, { value: 'aac', label: 'AAC' }, { value: 'ogg', label: 'OGG' }, { value: 'flac', label: 'FLAC' }], defaultValue: 'mp3' }],
    related: ['extract-audio', 'mp4-to-mp3', 'video-to-mp3', 'remove-audio-from-video'],
    intro: 'Convert between all major audio formats online. No software needed — just upload, choose your format, and download.',
    howTo: ['Upload your audio file','Choose the output format','Click "Convert"','Download the converted audio'],
    faq: [{ q: 'Which audio formats are supported?', a: 'MP3, WAV, AAC, OGG, and FLAC.' }],
    category: 'converter',
  },
  {
    slug: 'video-converter',
    title: 'Video Converter',
    h1: 'Online Video Converter',
    description: 'Convert video files between WebM, MOV, AVI, MKV, and MP4 online.',
    metaTitle: 'Video Converter Online - MP4, WebM, MOV, AVI, MKV | OnlineMediaTools',
    metaDescription: 'Convert video files online for free. Supports MP4, WebM, MOV, AVI, MKV formats. Secure and fast, files deleted after 2 hours.',
    icon: '🔄',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv'],
    outputFormat: 'mp4',
    toolType: 'video_converter',
    options: [{ key: 'target_fmt', label: 'Output Format', type: 'select', options: [{ value: 'mp4', label: 'MP4' }, { value: 'webm', label: 'WebM' }], defaultValue: 'mp4' }],
    related: ['webm-to-mp4', 'mov-to-mp4', 'compress-video', 'trim-video'],
    intro: 'Convert any video format to the one you need. Our universal video converter handles all major formats.',
    howTo: ['Upload your video','Choose output format','Click "Convert"','Download your video'],
    faq: [{ q: 'Which video formats are supported?', a: 'MP4, WebM, MOV, AVI, and MKV.' }],
    category: 'converter',
  },
  {
    slug: 'trim-video',
    title: 'Trim Video',
    h1: 'Trim Video Online',
    description: 'Cut and trim video files online for free. Set start and end time.',
    metaTitle: 'Trim Video Online Free - Cut Video by Time | OnlineMediaTools',
    metaDescription: 'Trim and cut video online for free. Set start and end times to extract the clip you need. Fast, secure, files deleted after 2 hours.',
    icon: '✂️',
    accepts: ['.mp4', '.webm', '.mov', '.avi', '.mkv'],
    outputFormat: 'mp4',
    toolType: 'trim_video',
    options: [
      { key: 'start', label: 'Start Time (HH:MM:SS)', type: 'time', defaultValue: '00:00:00' },
      { key: 'end', label: 'End Time (HH:MM:SS)', type: 'time', defaultValue: '00:01:00' },
    ],
    related: ['compress-video', 'remove-audio-from-video', 'video-converter', 'extract-audio'],
    intro: 'Trim your video to the exact clip you need by setting a start and end time. Perfect for cutting out parts of recordings.',
    howTo: ['Upload your video','Enter start and end times','Click "Trim Video"','Download your trimmed clip'],
    faq: [{ q: 'What time format should I use?', a: 'Use HH:MM:SS format, e.g. 00:01:30 for 1 minute 30 seconds.' }],
    category: 'video',
  },
];

export const getToolBySlug = (slug: string) => TOOLS.find(t => t.slug === slug);
export const getAllSlugs = () => TOOLS.map(t => t.slug);
