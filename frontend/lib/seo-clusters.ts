import { SITE_NAME } from '@/lib/copy';
import { type Locale } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';

export interface SeoClusterPage {
  slug: string;
  group: 'transcription' | 'subtitles' | 'audio-cleanup' | 'comparison';
  badge: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  overviewTitle: string;
  overviewBody: string;
  stepsTitle: string;
  steps: string[];
  bestForTitle: string;
  bestFor: string[];
  whatYouGetTitle?: string;
  whatYouGet?: string[];
  beforeYouStartTitle?: string;
  beforeYouStart?: string[];
  comparisonTitle?: string;
  comparisonRows?: { label: string; omt: string; competitor: string; takeaway: string }[];
  fitTitle?: string;
  fitCards?: { title: string; items: string[] }[];
  ctaTitle: string;
  ctaBody: string;
  ctaHref: string;
  ctaLabel: string;
  relatedGuides: string[];
  relatedTools: string[];
  faq: { q: string; a: string }[];
}

export const SEO_CLUSTER_PAGES: SeoClusterPage[] = [
  {
    slug: 'mp3-to-text',
    group: 'transcription',
    badge: 'High-Intent Transcription Guide',
    h1: 'MP3 to Text Online',
    metaTitle: 'MP3 to Text Online - Convert MP3 Audio into Text',
    metaDescription: 'Convert MP3 to text online with AI. Turn interviews, podcasts, voice notes, and meeting recordings into transcripts, notes, or subtitle drafts.',
    intro: 'MP3 to text is one of the clearest high-intent searches in audio transcription. People searching this usually already have a finished recording and want the fastest path to a usable transcript, summary source, or subtitle draft.',
    overviewTitle: 'Why MP3 to text is a strong conversion workflow',
    overviewBody: 'MP3 is a standard export for podcasts, call recordings, voice memos, and interview captures. If your file is already MP3, direct transcription removes unnecessary prep work and gets you to text faster. That matters when you are publishing content, extracting quotes, building notes, or turning speech into searchable documentation.',
    stepsTitle: 'How to convert MP3 to text',
    steps: ['Upload the MP3 file directly instead of converting it first.', 'Choose TXT if you want readable notes or SRT if you want timed subtitle output.', 'Generate the transcript, then review names, product terms, and punctuation before publishing or sharing it.'],
    bestForTitle: 'Best for',
    bestFor: ['Podcast episodes and clipped segments', 'Voice notes, call recordings, and meeting exports', 'Interview audio that needs a transcript before editing or quoting'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A faster path from finished audio to readable text', 'Clean input for summaries, notes, and article repurposing', 'A subtitle-ready starting point when you choose SRT output'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use the cleanest source file you have if speech quality varies a lot', 'Choose TXT for note-taking workflows and SRT for captioning workflows', 'Plan to review proper nouns, brand names, and speaker changes after export'],
    ctaTitle: 'Use the AI transcription tool',
    ctaBody: 'Our transcription tool accepts MP3 uploads directly and exports either plain text or subtitle-ready SRT files.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Transcribe MP3 to Text',
    relatedGuides: ['audio-to-text', 'podcast-transcription', 'meeting-transcription'],
    relatedTools: ['transcribe-audio', 'clean-audio', 'auto-subtitle'],
    faq: [
      { q: 'Can I export MP3 transcripts as subtitles?', a: 'Yes. Choose SRT if you want timed subtitle output instead of plain text.' },
      { q: 'Should I clean the MP3 before transcribing it?', a: 'If the recording has hiss, room hum, or uneven clarity, cleaning it first can make review easier.' },
      { q: 'Is MP3 to text useful for podcasts?', a: 'Yes. It is one of the best workflows for show notes, article repurposing, quote extraction, and searchable archives.' },
    ],
  },
  {
    slug: 'mp4-to-text',
    group: 'transcription',
    badge: 'Transcription Guide',
    h1: 'MP4 to Text Online',
    metaTitle: 'MP4 to Text Online - Transcribe Video to Text',
    metaDescription: 'Convert MP4 to text online with AI. Learn how to transcribe MP4 videos into TXT or SRT files for captions, notes, and publishing.',
    intro: 'MP4 to text is useful when your source file is video and you want the spoken content extracted into a transcript or subtitle-ready file.',
    overviewTitle: 'Why MP4 to text matters',
    overviewBody: 'Many recorded interviews, webinars, tutorials, and meetings are delivered as MP4. A direct MP4 to text workflow saves time because you can transcribe the video without extracting the audio manually first.',
    stepsTitle: 'How to transcribe MP4 video',
    steps: ['Upload the MP4 video file.', 'Choose whether you want TXT for readable text or SRT for subtitle timing.', 'Generate the transcript and review the downloaded output.'],
    bestForTitle: 'Best for',
    bestFor: ['Webinars and training videos', 'Interview videos', 'Recorded meetings exported as MP4'],
    ctaTitle: 'Transcribe MP4 directly',
    ctaBody: 'The transcription tool accepts MP4 uploads, so you can go from video file to transcript or subtitles in one step.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Transcribe MP4 to Text',
    relatedGuides: ['video-to-text', 'meeting-transcription', 'subtitle-generator'],
    relatedTools: ['transcribe-audio', 'auto-subtitle', 'extract-audio'],
    faq: [
      { q: 'Do I need to extract audio from MP4 first?', a: 'No. You can transcribe MP4 directly without a separate extraction step.' },
      { q: 'Should I choose TXT or SRT for MP4?', a: 'Choose TXT for notes and written content. Choose SRT if you need captions or timed subtitle files.' },
      { q: 'Can MP4 to text help with captioning?', a: 'Yes. Many teams use MP4 transcription as the first step before creating or editing subtitles.' },
    ],
  },
  {
    slug: 'video-to-text',
    group: 'transcription',
    badge: 'High-Intent Transcription Guide',
    h1: 'Video to Text Online',
    metaTitle: 'Video to Text Online - Convert Video Speech into Text',
    metaDescription: 'Convert video to text online with AI. Turn MP4, MOV, WebM, and other supported video files into transcripts, notes, captions, or subtitle drafts.',
    intro: 'Video to text searches usually come from teams that already have a webinar, tutorial, meeting recording, or talking-head asset and need the spoken content turned into something searchable and reusable.',
    overviewTitle: 'Why video to text is more than a transcript',
    overviewBody: 'Most video files contain valuable spoken information that is hard to reuse while it stays inside the recording. Converting video to text makes that content searchable, easier to summarize, easier to quote, and easier to adapt into subtitles, knowledge docs, support material, or SEO content.',
    stepsTitle: 'How to convert video to text',
    steps: ['Upload the original video file without manually extracting audio first.', 'Choose TXT for transcript-focused workflows or SRT if you want subtitle timing.', 'Review the output for names, chapter transitions, and domain-specific terminology before publishing or handing it off.'],
    bestForTitle: 'Best for',
    bestFor: ['Webinars, demos, and product explainers', 'Interview videos and customer stories', 'Internal recordings that need searchable notes or documentation'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A direct path from uploaded video to transcript output', 'Text you can reuse for summaries, docs, captions, and metadata', 'Less manual prep than extracting audio in a separate tool first'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use the cleanest export of the video you have available', 'Pick SRT if captions are part of the final deliverable', 'Run audio cleanup first if the recording includes background noise or weak speech clarity'],
    ctaTitle: 'Start with direct video transcription',
    ctaBody: 'The transcription tool accepts common audio and video file types, so you can skip manual extraction and go straight to text.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Convert Video to Text',
    relatedGuides: ['mp4-to-text', 'meeting-transcription', 'subtitle-generator'],
    relatedTools: ['transcribe-audio', 'auto-subtitle', 'clean-audio'],
    faq: [
      { q: 'Can I use video to text for subtitle preparation?', a: 'Yes. Exporting SRT is often the fastest first draft for captioning workflows.' },
      { q: 'Which video formats matter most?', a: 'MP4 is the most common, but MOV and WebM are also common depending on how the recording was created.' },
      { q: 'When should I clean the audio first?', a: 'If the video has room noise, fan sound, or low speech clarity, cleaning first can improve the workflow.' },
    ],
  },
  {
    slug: 'audio-to-text',
    group: 'transcription',
    badge: 'Transcription Guide',
    h1: 'Audio to Text Online',
    metaTitle: 'Audio to Text Online - AI Audio Transcription',
    metaDescription: 'Convert audio to text online with AI. Transcribe MP3, WAV, M4A, and other supported files into usable text or subtitle output.',
    intro: 'Audio to text is the broad workflow for turning uploaded speech recordings into readable text, structured notes, or subtitle drafts.',
    overviewTitle: 'Audio to text for everyday speech files',
    overviewBody: 'This workflow covers voice notes, interviews, podcasts, meeting exports, and field recordings. It is the most flexible entry point when you have spoken content but do not care about the exact source format.',
    stepsTitle: 'How to convert audio to text',
    steps: ['Upload a supported audio file.', 'Choose the export format that fits your next step.', 'Generate the output and review the transcript.'],
    bestForTitle: 'Best for',
    bestFor: ['Voice notes and spoken memos', 'Interview recordings', 'General speech-to-text workflows'],
    ctaTitle: 'Use the audio-to-text workflow',
    ctaBody: 'The transcription tool supports several common audio formats and gives you either plain text or timed subtitle output.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Convert Audio to Text',
    relatedGuides: ['mp3-to-text', 'podcast-transcription', 'voice-recording-noise-reduction'],
    relatedTools: ['transcribe-audio', 'clean-audio', 'audio-converter'],
    faq: [
      { q: 'Which audio format should I upload?', a: 'Use the file you already have. MP3, WAV, and M4A are common for speech workflows.' },
      { q: 'Can audio to text also produce subtitles?', a: 'Yes. If you need timed output, export the result as SRT instead of TXT.' },
      { q: 'What is the difference between audio to text and MP3 to text?', a: 'MP3 to text is one specific case. Audio to text covers several supported audio formats.' },
    ],
  },
  {
    slug: 'interview-transcription',
    group: 'transcription',
    badge: 'Transcription Guide',
    h1: 'Interview Transcription Online',
    metaTitle: 'Interview Transcription Online - Fast AI Workflow',
    metaDescription: 'Transcribe interview recordings online with AI. Turn interview audio or video into notes, transcripts, and subtitle drafts.',
    intro: 'Interview transcription is useful when you need faster review, quoting, note extraction, or content repurposing from recorded conversations.',
    overviewTitle: 'Why interview transcription matters',
    overviewBody: 'Interview recordings are often reused for reporting, editorial work, research synthesis, or media production. A transcript makes the content searchable and easier to quote, edit, and summarize.',
    stepsTitle: 'How to transcribe an interview',
    steps: ['Upload the interview audio or video file.', 'Choose TXT for notes or SRT for timed output.', 'Review the transcript for names, terminology, and spoken overlap.'],
    bestForTitle: 'Best for',
    bestFor: ['Research interviews', 'Podcast guest conversations', 'Recorded Q and A sessions'],
    ctaTitle: 'Transcribe interview files directly',
    ctaBody: 'Use the transcription tool for fast interview drafts, then clean up formatting, speaker names, or key quotes in your editing workflow.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Transcribe an Interview',
    relatedGuides: ['audio-to-text', 'meeting-transcription', 'clean-interview-audio'],
    relatedTools: ['transcribe-audio', 'clean-audio', 'auto-subtitle'],
    faq: [
      { q: 'Should I clean interview audio first?', a: 'For noisy interview files, cleaning the audio first can make the result easier to review and publish.' },
      { q: 'Can I use interview transcription for subtitles?', a: 'Yes. Export SRT if the interview will be published as a captioned video.' },
      { q: 'What should I review after an interview transcript is generated?', a: 'Check names, proper nouns, domain-specific terminology, and any sections with crosstalk.' },
    ],
  },
  {
    slug: 'podcast-transcription',
    group: 'transcription',
    badge: 'High-Intent Transcription Guide',
    h1: 'Podcast Transcription Online',
    metaTitle: 'Podcast Transcription Online - AI Podcast to Text',
    metaDescription: 'Transcribe podcast audio online with AI. Turn episodes into transcripts for show notes, articles, clips, subtitles, and searchable content.',
    intro: 'Podcast transcription searches come from creators and teams that already know the value of turning spoken episodes into searchable, reusable text. The highest-value use cases are usually show notes, article repurposing, quote extraction, and captioning clips.',
    overviewTitle: 'Why podcast transcription drives more than accessibility',
    overviewBody: 'A transcript gives you a full text layer for every episode. That makes it easier to build summaries, reuse ideas in newsletters or articles, create clip captions, support accessibility, and keep an archive of what was actually said across episodes.',
    stepsTitle: 'How to transcribe a podcast',
    steps: ['Upload the podcast file in audio or video format.', 'Choose TXT for notes and long-form repurposing or SRT for clip captions and subtitle workflows.', 'Review the result for names, guest titles, and any audio sections with overlapping speech.'],
    bestForTitle: 'Best for',
    bestFor: ['Show notes and article repurposing', 'Episode summaries, quotes, and timestamps', 'Caption drafts for full episodes or short clips'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A reusable transcript base for content marketing and archives', 'Faster clip and subtitle workflows for video podcast publishing', 'A better starting point for summaries, newsletters, and quote extraction'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use the cleaned master audio if your episode includes hum or room noise', 'Choose SRT when subtitles are part of your publishing plan', 'Expect to review guest names, brand mentions, and specialist terms before final use'],
    ctaTitle: 'Transcribe podcast audio',
    ctaBody: 'Use the transcription tool for quick podcast text output, then turn the result into summaries, articles, subtitles, or searchable archives.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Transcribe a Podcast',
    relatedGuides: ['mp3-to-text', 'clean-podcast-audio', 'turboscribe-alternative'],
    relatedTools: ['transcribe-audio', 'clean-audio', 'auto-subtitle'],
    faq: [
      { q: 'Can podcast transcripts be used for subtitles?', a: 'Yes. SRT output is a practical first step for full-episode captions or short-form clip captions.' },
      { q: 'Should I clean podcast audio before transcription?', a: 'If the recording has background hum, inconsistent remote audio, or low speech clarity, yes.' },
      { q: 'What is the main benefit of podcast transcription?', a: 'It turns long-form audio into searchable text that can be summarized, quoted, repurposed, and published.' },
    ],
  },
  {
    slug: 'meeting-transcription',
    group: 'transcription',
    badge: 'High-Intent Transcription Guide',
    h1: 'Meeting Transcription Online',
    metaTitle: 'Meeting Transcription Online - Convert Meetings to Text',
    metaDescription: 'Transcribe meeting recordings online with AI. Turn internal calls, webinars, workshops, and client meetings into notes, transcripts, and follow-up material.',
    intro: 'Meeting transcription is a high-intent workflow because the searcher usually already has a long recording and wants a faster way to pull out decisions, action items, quotes, or recap material.',
    overviewTitle: 'Why meeting transcription saves time',
    overviewBody: 'Listening back to full calls is slow, especially when the only goal is to recover decisions, open questions, and next steps. A transcript makes long recordings searchable and easier to summarize for internal follow-up, client recaps, documentation, and project handoff notes.',
    stepsTitle: 'How to transcribe a meeting',
    steps: ['Upload the recorded call, webinar, or workshop file.', 'Choose TXT for note-taking workflows or SRT if you also need subtitle timing for the recording.', 'Review the transcript and extract decisions, actions, and important quotes into your own follow-up format.'],
    bestForTitle: 'Best for',
    bestFor: ['Internal team calls and project meetings', 'Recorded webinars and workshops', 'Client calls that need a written recap or handoff notes'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A searchable record of long calls without replaying the full session', 'Faster handoff material for teams and stakeholders', 'A base for summaries, notes, captions, and internal documentation'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use the clearest recording export available if multiple versions exist', 'Choose TXT when the output is mainly for notes and recaps', 'Expect to review speaker switches, jargon, and task assignments before sharing the output'],
    ctaTitle: 'Transcribe meeting recordings',
    ctaBody: 'Use the AI transcription workflow to turn long recordings into text that is easier to summarize, search, and share.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Transcribe a Meeting',
    relatedGuides: ['video-to-text', 'interview-transcription', 'turboscribe-alternative'],
    relatedTools: ['transcribe-audio', 'clean-audio', 'auto-subtitle'],
    faq: [
      { q: 'Can I transcribe recorded webinars as meetings?', a: 'Yes. Webinar recordings usually follow the same workflow and can be exported as text or subtitles.' },
      { q: 'Should I export TXT or SRT for meeting notes?', a: 'TXT is normally better for notes and summaries, while SRT is useful if the recording also needs captions.' },
      { q: 'Why not just listen back to the meeting?', a: 'A transcript is faster to scan, search, quote, and summarize than replaying the full recording.' },
    ],
  },
  {
    slug: 'subtitle-generator',
    group: 'subtitles',
    badge: 'High-Intent Subtitle Guide',
    h1: 'Subtitle Generator Online',
    metaTitle: 'Subtitle Generator Online - Generate SRT or VTT Captions',
    metaDescription: 'Generate subtitles online from audio or video. Create SRT or VTT caption files with AI for editing, publishing, accessibility, and localization.',
    intro: 'Subtitle generator searches usually come from people who already know they need timed text, not just a transcript. The intent is practical: create a draft caption file fast, then review it before publish.',
    overviewTitle: 'Why subtitle generation is different from plain transcription',
    overviewBody: 'A transcript only gives you readable text. Subtitle generation adds timing so the text can be displayed with video. That makes it the better path when your final output is YouTube captions, social subtitles, editor imports, or accessibility files for publishing.',
    stepsTitle: 'How to generate subtitles',
    steps: ['Upload the source audio or video file.', 'Choose SRT or VTT depending on your destination and editing workflow.', 'Generate the subtitle file, then review timing, line breaks, names, and punctuation before final use.'],
    bestForTitle: 'Best for',
    bestFor: ['Draft caption files for video publishing', 'Accessibility and compliance workflows', 'Fast subtitle creation before editing or translation'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['Timed subtitle output instead of plain text only', 'A faster starting point for editors and video teams', 'A file you can translate, refine, or upload to platforms'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Choose SRT when you want the most portable subtitle file', 'Choose VTT if your delivery workflow is web-first and expects WebVTT', 'Review final line length and punctuation before publishing subtitles publicly'],
    ctaTitle: 'Generate subtitles automatically',
    ctaBody: 'Use the subtitle generator to produce draft SRT or VTT files that can be edited, translated, or published.',
    ctaHref: '/auto-subtitle',
    ctaLabel: 'Generate Subtitles',
    relatedGuides: ['srt-generator', 'youtube-subtitle-generator', 'translate-srt'],
    relatedTools: ['auto-subtitle', 'translate-subtitles', 'transcribe-audio'],
    faq: [
      { q: 'Should I choose SRT or VTT?', a: 'SRT is usually the safest default for portability. VTT is often used in web playback environments.' },
      { q: 'Can subtitle generators work from audio-only files?', a: 'Yes. You can create timed subtitle output from audio-only speech files as well as video.' },
      { q: 'Do I still need to review the subtitles?', a: 'Yes. AI output is a strong draft, but names, punctuation, timing, and line breaks still need review.' },
    ],
  },
  {
    slug: 'srt-generator',
    group: 'subtitles',
    badge: 'High-Intent Subtitle Guide',
    h1: 'SRT Generator Online',
    metaTitle: 'SRT Generator Online - Create SRT Subtitle Files',
    metaDescription: 'Generate SRT subtitle files online from audio or video. Use AI to create timed subtitles for editors, YouTube uploads, accessibility, and localization.',
    intro: 'SRT generator searches are high intent because the person already knows the file format they need. They are usually preparing a video for platform upload, editor import, or subtitle translation.',
    overviewTitle: 'Why SRT is still the default subtitle format',
    overviewBody: 'SRT is simple, portable, and widely accepted across video platforms, editors, and localization workflows. If you need one subtitle file format that travels well between tools, SRT is usually the right choice.',
    stepsTitle: 'How to create an SRT file',
    steps: ['Upload the source audio or video file.', 'Choose SRT as the output format.', 'Generate the file and review timing, names, punctuation, and line breaks before publishing or handing it off.'],
    bestForTitle: 'Best for',
    bestFor: ['YouTube and video platform subtitle uploads', 'Editing subtitle drafts in common video tools', 'Localization workflows that start from a portable subtitle format'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['The most widely accepted subtitle file for downstream tools', 'A direct path from speech to timed captions', 'A stable base for translation, review, and publishing'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use SRT when you need a portable default and are unsure which format to pick', 'Review subtitle timing before upload even if the transcript looks accurate', 'Pair SRT generation with subtitle translation if multilingual publishing is next'],
    ctaTitle: 'Create an SRT file automatically',
    ctaBody: 'Use the subtitle generator to create SRT files directly from spoken audio or video.',
    ctaHref: '/auto-subtitle',
    ctaLabel: 'Generate an SRT File',
    relatedGuides: ['subtitle-generator', 'translate-srt', 'youtube-subtitle-generator'],
    relatedTools: ['auto-subtitle', 'translate-subtitles', 'transcribe-audio'],
    faq: [
      { q: 'What is an SRT file used for?', a: 'It is commonly used for captions, video platform uploads, editing, and subtitle translation workflows.' },
      { q: 'Is SRT better than VTT?', a: 'Not always, but SRT is usually the most portable and familiar choice across tools.' },
      { q: 'Can I translate an SRT file later?', a: 'Yes. SRT is one of the best starting points for multilingual subtitle workflows.' },
    ],
  },
  {
    slug: 'vtt-generator',
    group: 'subtitles',
    badge: 'Subtitle Guide',
    h1: 'VTT Generator Online',
    metaTitle: 'VTT Generator Online - Create WebVTT Subtitle Files',
    metaDescription: 'Generate VTT subtitle files online from audio or video. Create WebVTT captions with AI for web video and browser-based publishing.',
    intro: 'A VTT generator is useful when your subtitle workflow ends on the web and you need WebVTT output instead of the more common SRT format.',
    overviewTitle: 'When VTT is the better choice',
    overviewBody: 'VTT is widely used in browser-based video contexts and web publishing. If your playback environment expects WebVTT, generating that format directly can save a conversion step.',
    stepsTitle: 'How to create a VTT subtitle file',
    steps: ['Upload your source file.', 'Choose VTT as the output format.', 'Generate the subtitle file and test it in the destination player or publishing workflow.'],
    bestForTitle: 'Best for',
    bestFor: ['Web video publishing', 'Browser-based caption workflows', 'Teams that specifically need WebVTT output'],
    ctaTitle: 'Generate WebVTT subtitles',
    ctaBody: 'Use the subtitle generator to create VTT output directly from audio or video uploads.',
    ctaHref: '/auto-subtitle',
    ctaLabel: 'Generate a VTT File',
    relatedGuides: ['subtitle-generator', 'srt-generator', 'video-caption-generator'],
    relatedTools: ['auto-subtitle', 'translate-subtitles', 'transcribe-audio'],
    faq: [
      { q: 'What is the difference between VTT and SRT?', a: 'Both are subtitle formats, but VTT is commonly used in web playback environments while SRT is more universally portable.' },
      { q: 'Should I choose VTT for YouTube?', a: 'SRT is usually the safer default for YouTube and cross-platform workflows unless you specifically need WebVTT.' },
      { q: 'Can VTT be generated from audio-only files?', a: 'Yes. You can generate VTT output from supported audio and video uploads.' },
    ],
  },
  {
    slug: 'youtube-subtitle-generator',
    group: 'subtitles',
    badge: 'High-Intent Subtitle Guide',
    h1: 'YouTube Subtitle Generator Online',
    metaTitle: 'YouTube Subtitle Generator Online - Create SRT Captions Fast',
    metaDescription: 'Generate YouTube subtitles online. Create SRT caption files from uploaded audio or video for faster review, accessibility, and multilingual publishing.',
    intro: 'YouTube subtitle generator searches come from creators who want a faster path to caption files before upload. The goal is usually accessibility, better viewer comprehension, or a base for translated subtitle versions.',
    overviewTitle: 'Why YouTube subtitle workflows are so practical',
    overviewBody: 'Manual captioning is slow, especially for long videos or frequent publishing schedules. A subtitle generator gives you a draft SRT file you can review before upload, which speeds up accessibility work and makes multilingual publishing much easier.',
    stepsTitle: 'How to generate YouTube subtitles',
    steps: ['Upload the source file for the video you are publishing.', 'Choose SRT output for the most YouTube-friendly subtitle workflow.', 'Generate the file and review timing, line length, names, and punctuation before upload.'],
    bestForTitle: 'Best for',
    bestFor: ['YouTube caption drafts before final review', 'Creators publishing interviews, podcasts, tutorials, or explainers', 'Teams preparing translated caption versions later'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A much faster starting point than typing captions from scratch', 'A portable SRT file for YouTube and many other platforms', 'An easier path to translated subtitles and accessibility improvements'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Choose SRT unless your downstream workflow explicitly asks for another format', 'Plan to review punctuation and line breaks before final upload', 'If the source has noise or weak speech clarity, clean audio first for easier review'],
    ctaTitle: 'Create a first YouTube subtitle draft',
    ctaBody: 'Use the subtitle generator to create an SRT draft you can review before uploading to YouTube or another video platform.',
    ctaHref: '/auto-subtitle',
    ctaLabel: 'Generate YouTube Subtitles',
    relatedGuides: ['srt-generator', 'translate-srt', 'turboscribe-alternative'],
    relatedTools: ['auto-subtitle', 'translate-subtitles', 'transcribe-audio'],
    faq: [
      { q: 'Which subtitle format is best for YouTube?', a: 'SRT is usually the safest and most common choice for YouTube uploads.' },
      { q: 'Do I still need to review generated YouTube subtitles?', a: 'Yes. Review names, punctuation, timing, and line breaks before final upload.' },
      { q: 'Can I translate YouTube subtitles later?', a: 'Yes. Once you have an SRT draft, subtitle translation becomes much easier.' },
    ],
  },
  {
    slug: 'video-caption-generator',
    group: 'subtitles',
    badge: 'Subtitle Guide',
    h1: 'Video Caption Generator Online',
    metaTitle: 'Video Caption Generator Online - AI Caption Workflow',
    metaDescription: 'Generate video captions online with AI. Create subtitle-ready caption files from uploaded video or audio in a few steps.',
    intro: 'Video caption generator workflows are useful when you want timed text that can be edited into publishable captions without starting manually.',
    overviewTitle: 'Captions versus general transcription',
    overviewBody: 'A transcript gives you readable text. A caption workflow adds timing so the text can be displayed with the video. That is the main difference when choosing between transcription and subtitle generation.',
    stepsTitle: 'How to generate captions from video',
    steps: ['Upload your video or its source audio.', 'Choose subtitle output such as SRT or VTT.', 'Generate the caption file and review the result before final publish.'],
    bestForTitle: 'Best for',
    bestFor: ['Social video captions', 'Accessibility-focused publishing', 'Fast draft captions for editors'],
    ctaTitle: 'Generate captions automatically',
    ctaBody: 'Use the subtitle generator when your main goal is timed caption output instead of plain text transcription.',
    ctaHref: '/auto-subtitle',
    ctaLabel: 'Generate Video Captions',
    relatedGuides: ['subtitle-generator', 'youtube-subtitle-generator', 'vtt-generator'],
    relatedTools: ['auto-subtitle', 'translate-subtitles', 'transcribe-audio'],
    faq: [
      { q: 'What is the difference between captions and subtitles?', a: 'In practice the workflow is similar. The main difference is often how the timed text is used and published.' },
      { q: 'Should I use transcription or caption generation first?', a: 'Use caption generation first if you need timed output. Use transcription first if you only need readable text.' },
      { q: 'Can I turn captions into translated subtitles later?', a: 'Yes. Caption files such as SRT are a good starting point for translation workflows.' },
    ],
  },
  {
    slug: 'translate-srt',
    group: 'subtitles',
    badge: 'High-Intent Subtitle Guide',
    h1: 'Translate SRT Subtitles Online',
    metaTitle: 'Translate SRT Online - AI Subtitle Translation',
    metaDescription: 'Translate SRT subtitles online with AI. Create translated subtitle files for multilingual publishing, localization reviews, and regional video releases.',
    intro: 'Translate SRT is a high-intent subtitle search because the user already knows the file type and the next workflow step: localized subtitle output for another audience or language.',
    overviewTitle: 'Why SRT translation is a strong localization workflow',
    overviewBody: 'Once you have a subtitle draft, translation becomes one of the fastest ways to broaden the reach of a video asset. An SRT-centered workflow is lightweight, portable, and easy to pass into review, editing, and final publishing processes.',
    stepsTitle: 'How to translate SRT-style subtitles',
    steps: ['Upload the source audio or video file.', 'Choose the target language for subtitle output.', 'Generate the translated SRT and review wording, timing, and line breaks before final publication.'],
    bestForTitle: 'Best for',
    bestFor: ['Multilingual video publishing', 'Localization pilots and regional rollouts', 'Teams that already work with SRT files as the subtitle standard'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A direct path from source media to translated subtitle output', 'A simpler localization workflow for YouTube, training, and product videos', 'A portable file you can hand off for final language review'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Keep the source language clear and consistent if possible', 'Review translated phrasing and subtitle timing before final release', 'Use SRT generation first if your original source does not already have a subtitle draft'],
    ctaTitle: 'Generate translated subtitles',
    ctaBody: 'Use the translation workflow when your final output needs to be a subtitle file for another audience or language.',
    ctaHref: '/translate-subtitles',
    ctaLabel: 'Translate Subtitles',
    relatedGuides: ['srt-generator', 'subtitle-generator', 'youtube-subtitle-generator'],
    relatedTools: ['translate-subtitles', 'auto-subtitle', 'transcribe-audio'],
    faq: [
      { q: 'Do I need an existing SRT file first?', a: 'Not necessarily. You can start from the original audio or video and generate translated subtitle output directly.' },
      { q: 'Which languages are supported in this workflow?', a: 'The current translated subtitle workflow supports English, French, and Spanish output.' },
      { q: 'Should translated subtitles still be reviewed?', a: 'Yes. Review wording, line breaks, and subtitle timing before final publication.' },
    ],
  },
  {
    slug: 'remove-background-noise-from-audio',
    group: 'audio-cleanup',
    badge: 'High-Intent Audio Cleanup Guide',
    h1: 'Remove Background Noise from Audio Online',
    metaTitle: 'Remove Background Noise from Audio Online',
    metaDescription: 'Remove background noise from audio online with AI. Clean speech recordings, podcasts, interviews, and meeting files before transcription, editing, or publishing.',
    intro: 'Remove background noise from audio is a high-intent search because the user already has a noisy recording and wants one concrete outcome: clearer speech. The next step is usually transcription, editing, captioning, or direct sharing.',
    overviewTitle: 'Why background noise reduction changes downstream quality',
    overviewBody: 'Room hum, laptop fans, distant traffic, and uneven recording environments do not just make audio unpleasant. They also make transcripts harder to review, captions slower to fix, and quotes harder to trust. A cleanup pass improves the starting point before the file moves into the rest of your workflow.',
    stepsTitle: 'How to reduce background noise',
    steps: ['Upload the noisy audio or video file.', 'Run the cleanup workflow to reduce common background noise and improve speech clarity.', 'Download the cleaned result and move into transcription, subtitling, editing, or publishing.'],
    bestForTitle: 'Best for',
    bestFor: ['Voice recordings with steady room or environmental noise', 'Interview and meeting cleanup before transcription', 'Speech-first files that need better clarity before publication'],
    whatYouGetTitle: 'What this workflow gives you',
    whatYouGet: ['A cleaner speech signal before transcription or subtitle generation', 'Better review quality for editors, producers, and researchers', 'A more usable file for publishing, quoting, or internal sharing'],
    beforeYouStartTitle: 'Before you start',
    beforeYouStart: ['Use the original recording rather than a re-exported copy when possible', 'Expect the biggest improvement on steady background noise rather than every possible recording issue', 'Plan to transcribe or subtitle the cleaned file if speech reuse is your next goal'],
    ctaTitle: 'Clean noisy recordings before the next step',
    ctaBody: 'Use the AI cleanup tool to reduce common background noise before you transcribe, subtitle, edit, or share the file.',
    ctaHref: '/clean-audio',
    ctaLabel: 'Remove Background Noise',
    relatedGuides: ['voice-recording-noise-reduction', 'clean-podcast-audio', 'clean-interview-audio'],
    relatedTools: ['clean-audio', 'transcribe-audio', 'auto-subtitle'],
    faq: [
      { q: 'Should I clean audio before transcription?', a: 'For noisy speech recordings, yes. Cleanup usually makes the transcript easier to review and use.' },
      { q: 'Can I remove noise from video files too?', a: 'Yes. Supported video files can go through the same cleanup workflow.' },
      { q: 'Will noise reduction fix every recording problem?', a: 'No. It works best on common background noise, not every issue like clipping or missing speech.' },
    ],
  },
  {
    slug: 'clean-podcast-audio',
    group: 'audio-cleanup',
    badge: 'Audio Cleanup Guide',
    h1: 'Clean Podcast Audio Online',
    metaTitle: 'Clean Podcast Audio Online - Reduce Noise with AI',
    metaDescription: 'Clean podcast audio online with AI. Reduce background noise before publishing, transcribing, subtitling, or repurposing podcast episodes.',
    intro: 'Podcast cleanup workflows are useful when you need better speech clarity before transcription, show-note creation, clipping, or distribution.',
    overviewTitle: 'Why clean podcast audio first',
    overviewBody: 'Even strong podcast content can suffer from room noise, hiss, or uneven remote recordings. A cleanup step helps before you transcribe the episode, publish clips, or generate subtitles.',
    stepsTitle: 'How to clean podcast audio',
    steps: ['Upload the podcast audio or video file.', 'Run the cleanup workflow to reduce common background noise.', 'Export the cleaner result and continue into transcription or publishing.'],
    bestForTitle: 'Best for',
    bestFor: ['Podcast episodes with background hum', 'Remote guest audio cleanup', 'Speech-first publishing workflows'],
    ctaTitle: 'Clean podcast recordings before transcription',
    ctaBody: 'Use the audio cleanup tool before you generate transcripts, subtitles, or derivative podcast content.',
    ctaHref: '/clean-audio',
    ctaLabel: 'Clean Podcast Audio',
    relatedGuides: ['podcast-transcription', 'remove-background-noise-from-audio', 'voice-recording-noise-reduction'],
    relatedTools: ['clean-audio', 'transcribe-audio', 'auto-subtitle'],
    faq: [
      { q: 'Does podcast cleanup replace mixing or mastering?', a: 'No. It is mainly a quick noise-reduction step for common publishing and transcription workflows.' },
      { q: 'Should I clean audio before making show notes?', a: 'If the recording is noisy, yes. A cleaner file is easier to transcribe and summarize.' },
      { q: 'Can I clean video podcast files too?', a: 'Yes. Supported video uploads can also go through the audio cleanup workflow.' },
    ],
  },
  {
    slug: 'clean-interview-audio',
    group: 'audio-cleanup',
    badge: 'Audio Cleanup Guide',
    h1: 'Clean Interview Audio Online',
    metaTitle: 'Clean Interview Audio Online - Improve Speech Clarity',
    metaDescription: 'Clean interview audio online with AI. Reduce background noise before transcription, quoting, editing, or publishing interview recordings.',
    intro: 'Interview cleanup is useful when clarity matters for transcription, quoting, publishing, or editorial review and the original recording has distracting background noise.',
    overviewTitle: 'Why interview audio often needs cleanup',
    overviewBody: 'Interview recordings are frequently made in remote, noisy, or inconsistent environments. A cleanup pass can make the speech easier to review before pulling quotes, writing summaries, or generating a transcript.',
    stepsTitle: 'How to clean interview audio',
    steps: ['Upload the interview file in audio or video format.', 'Run the cleanup step to reduce noise.', 'Download the improved output and continue into transcription or editorial review.'],
    bestForTitle: 'Best for',
    bestFor: ['Journalistic or research interviews', 'Remote interview recordings', 'Speech cleanup before transcription'],
    ctaTitle: 'Improve interview clarity before transcription',
    ctaBody: 'Use the cleanup tool before turning the interview into text, notes, captions, or publishable media.',
    ctaHref: '/clean-audio',
    ctaLabel: 'Clean Interview Audio',
    relatedGuides: ['interview-transcription', 'remove-background-noise-from-audio', 'voice-recording-noise-reduction'],
    relatedTools: ['clean-audio', 'transcribe-audio', 'auto-subtitle'],
    faq: [
      { q: 'Does cleaning interview audio help transcription?', a: 'Yes. For noisy recordings, a cleanup step usually makes the output easier to review and publish.' },
      { q: 'Can I clean interview video without extracting audio first?', a: 'Yes. Supported video files can go directly through the same cleanup workflow.' },
      { q: 'Is this useful for quote-heavy interview work?', a: 'Yes. Cleaner speech makes it easier to find, verify, and reuse quotes.' },
    ],
  },
  {
    slug: 'voice-recording-noise-reduction',
    group: 'audio-cleanup',
    badge: 'Audio Cleanup Guide',
    h1: 'Voice Recording Noise Reduction Online',
    metaTitle: 'Voice Recording Noise Reduction Online',
    metaDescription: 'Reduce noise in voice recordings online with AI. Clean voice notes, spoken memos, meetings, and interview files before use.',
    intro: 'Voice recording noise reduction is useful when your file is mostly speech and you need a clearer version for notes, transcription, sharing, or archive quality.',
    overviewTitle: 'Why speech clarity changes everything',
    overviewBody: 'The clearer the voice recording, the easier it is to listen back, summarize, transcribe, subtitle, or share with other people. Noise reduction is especially useful for quick voice notes and field recordings.',
    stepsTitle: 'How to reduce noise in voice recordings',
    steps: ['Upload the voice recording.', 'Run the cleanup workflow to reduce common background noise.', 'Use the cleaner file for transcription, note capture, or publishing.'],
    bestForTitle: 'Best for',
    bestFor: ['Voice notes and memos', 'Field recordings with speech', 'Meeting and interview voice capture'],
    ctaTitle: 'Clean voice recordings in one step',
    ctaBody: 'Use the audio cleanup tool when the main goal is clearer speech before the rest of your workflow begins.',
    ctaHref: '/clean-audio',
    ctaLabel: 'Reduce Voice Recording Noise',
    relatedGuides: ['audio-to-text', 'remove-background-noise-from-audio', 'clean-interview-audio'],
    relatedTools: ['clean-audio', 'transcribe-audio', 'audio-converter'],
    faq: [
      { q: 'Is this useful for mobile voice notes?', a: 'Yes. Voice-note cleanup is one of the clearest use cases for speech-first noise reduction.' },
      { q: 'Should I clean a voice recording before converting it to text?', a: 'Yes, especially when the original recording includes room noise or background interference.' },
      { q: 'Can I use this on short spoken memos?', a: 'Yes. Short voice recordings are often one of the quickest cleanup workflows.' },
    ],
  },
  {
    slug: 'turboscribe-alternative',
    group: 'comparison',
    badge: 'Competitor Alternative Guide',
    h1: 'TurboScribe Alternative',
    metaTitle: 'TurboScribe Alternative - AI Transcription and Subtitle Tool',
    metaDescription: 'Looking for a TurboScribe alternative? Compare OnlineMediaTools with TurboScribe for transcription, subtitles, audio cleanup, and media prep workflows.',
    intro: 'People usually search for a TurboScribe alternative when they want a lighter workflow, more media-prep utilities around transcription, or a simpler path from raw recordings to publishable outputs.',
    overviewTitle: 'Why people look for TurboScribe alternatives',
    overviewBody: 'TurboScribe is a strong dedicated transcription product and it is especially compelling when transcription is the center of the entire workflow. The users who keep searching for alternatives usually want something lighter, more tool-driven, or more useful before and after transcription, like subtitle generation, subtitle translation, noise cleanup, and media file prep in one place.',
    stepsTitle: 'How to evaluate a TurboScribe alternative',
    steps: ['List the real jobs you need to do around transcription, not just transcription itself.', 'Compare how each product handles subtitle generation, translation, cleanup, and delivery prep.', 'Choose the workflow that matches your actual publishing process, then test it on one real recording before switching fully.'],
    bestForTitle: 'Best for',
    bestFor: ['Teams that need transcription plus subtitle and cleanup utilities in one workflow', 'Creators turning media files into captions, translated subtitles, and text', 'Users who want lighter task-based tools around recorded speech content'],
    whatYouGetTitle: 'Why some teams choose OnlineMediaTools instead',
    whatYouGet: ['A broader media workflow that includes transcription, subtitle generation, subtitle translation, and audio cleanup', 'Task-specific landing pages and tools for moving from file to output quickly', 'A lightweight toolbox approach when you do not want a transcription-only product experience'],
    beforeYouStartTitle: 'What to compare before you switch',
    beforeYouStart: ['How often you need subtitle generation or translation after transcription', 'Whether noisy audio cleanup is part of your real workflow', 'Whether you want one transcription-centered product or a broader media utility toolbox'],
    comparisonTitle: 'OnlineMediaTools vs TurboScribe at a glance',
    comparisonRows: [
      { label: 'Primary focus', omt: 'Transcription, subtitles, cleanup, and media prep in one toolbox', competitor: 'Dedicated AI transcription workflow with deeper transcript-first positioning', takeaway: 'Choose TurboScribe when transcription is the whole stack. Choose OnlineMediaTools when transcription is one step in a broader media workflow.' },
      { label: 'Subtitle workflow', omt: 'Built around subtitle generation and subtitle translation pages and tools', competitor: 'Strong for transcript creation and caption generation, but framed primarily as transcription software', takeaway: 'OnlineMediaTools is a better fit when subtitle output is a front-and-center use case.' },
      { label: 'Audio preparation', omt: 'Includes background-noise cleanup before transcription or subtitle generation', competitor: 'More focused on the transcript result than media cleanup utilities', takeaway: 'If cleanup before transcription matters, OnlineMediaTools gives you a more direct path.' },
      { label: 'Publishing workflow', omt: 'Useful when you need to move between transcript, subtitles, translation, and delivery prep', competitor: 'Useful when you want a more dedicated transcription product experience', takeaway: 'The better choice depends on whether you are solving one transcription job or a chain of media-output jobs.' },
      { label: 'Best-fit user', omt: 'Creators, small teams, and operators who need flexible media utility workflows', competitor: 'Teams and users who want a transcript-centric product with stronger depth around transcription itself', takeaway: 'TurboScribe is stronger on transcript specialization. OnlineMediaTools is stronger on workflow breadth around the media file.' },
    ],
    fitTitle: 'Who should choose which tool',
    fitCards: [
      { title: 'Choose OnlineMediaTools if...', items: ['You need transcription, subtitles, subtitle translation, and audio cleanup in one place.', 'You are publishing video, podcasts, clips, or localized assets and need more than a transcript.', 'You prefer a workflow built around fast task completion from uploaded media files.'] },
      { title: 'Choose TurboScribe if...', items: ['You want a more dedicated transcription-first product experience.', 'Your main requirement is deep transcript-focused work rather than adjacent media prep tools.', 'Longer-form transcript production is the center of your workflow.'] },
    ],
    ctaTitle: 'Try the broader media workflow',
    ctaBody: 'If your transcription process usually leads into subtitles, translation, or cleanup, start with OnlineMediaTools and test the full workflow on a real recording.',
    ctaHref: '/transcribe-audio',
    ctaLabel: 'Try AI Transcription',
    relatedGuides: ['mp3-to-text', 'subtitle-generator', 'remove-background-noise-from-audio'],
    relatedTools: ['transcribe-audio', 'auto-subtitle', 'clean-audio'],
    faq: [
      { q: 'Is OnlineMediaTools better than TurboScribe for every use case?', a: 'No. TurboScribe is a stronger fit when you want a more dedicated transcription-centric product. OnlineMediaTools is stronger when you need adjacent media utilities around the transcript.' },
      { q: 'Who should switch from TurboScribe?', a: 'Users who need subtitle generation, subtitle translation, or audio cleanup as part of the same workflow should evaluate OnlineMediaTools closely.' },
      { q: 'Can I use OnlineMediaTools even if my main need is subtitles, not transcripts?', a: 'Yes. That is one of the clearest differences. OnlineMediaTools is useful when subtitles and translation are major outputs, not just add-ons.' },
    ],
  },
];

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
};

export const SEO_CLUSTER_LOCALIZED_SLUGS: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  fr: {
    'mp3-to-text': 'convertir-mp3-en-texte',
    'mp4-to-text': 'convertir-mp4-en-texte',
    'video-to-text': 'convertir-video-en-texte',
    'audio-to-text': 'convertir-audio-en-texte',
    'interview-transcription': 'transcription-interview',
    'podcast-transcription': 'transcription-podcast',
    'meeting-transcription': 'transcription-reunion',
    'subtitle-generator': 'generateur-sous-titres',
    'srt-generator': 'generateur-srt',
    'vtt-generator': 'generateur-vtt',
    'youtube-subtitle-generator': 'generateur-sous-titres-youtube',
    'video-caption-generator': 'generateur-captions-video',
    'translate-srt': 'traduire-srt',
    'remove-background-noise-from-audio': 'supprimer-bruit-fond-audio',
    'clean-podcast-audio': 'nettoyer-audio-podcast',
    'clean-interview-audio': 'nettoyer-audio-interview',
    'voice-recording-noise-reduction': 'reduction-bruit-enregistrement-vocal',
    'turboscribe-alternative': 'alternative-turboscribe',
  },
  es: {
    'mp3-to-text': 'convertir-mp3-a-texto',
    'mp4-to-text': 'convertir-mp4-a-texto',
    'video-to-text': 'convertir-video-a-texto',
    'audio-to-text': 'convertir-audio-a-texto',
    'interview-transcription': 'transcripcion-entrevista',
    'podcast-transcription': 'transcripcion-podcast',
    'meeting-transcription': 'transcripcion-reunion',
    'subtitle-generator': 'generador-subtitulos',
    'srt-generator': 'generador-srt',
    'vtt-generator': 'generador-vtt',
    'youtube-subtitle-generator': 'generador-subtitulos-youtube',
    'video-caption-generator': 'generador-captions-video',
    'translate-srt': 'traducir-srt',
    'remove-background-noise-from-audio': 'quitar-ruido-fondo-audio',
    'clean-podcast-audio': 'limpiar-audio-podcast',
    'clean-interview-audio': 'limpiar-audio-entrevista',
    'voice-recording-noise-reduction': 'reducir-ruido-grabacion-voz',
    'turboscribe-alternative': 'alternativa-turboscribe',
  },
};

const LOCALIZED_SEO_CLUSTER_OVERRIDES: Record<Exclude<Locale, 'en'>, Record<string, Partial<SeoClusterPage>>> = {
  "fr": {
    "mp3-to-text": {
      "badge": "Guide transcription prioritaire",
      "h1": "Convertir MP3 en texte en ligne",
      "metaTitle": "Convertir MP3 en texte en ligne - Transcription IA",
      "metaDescription": "Convertissez un fichier MP3 en texte avec l IA. Obtenez une transcription pour podcasts, notes vocales, interviews et reunions.",
      "intro": "La requete MP3 vers texte est une intention forte. L utilisateur a deja un enregistrement final et cherche le chemin le plus rapide vers une transcription exploitable.",
      "overviewTitle": "Pourquoi le workflow MP3 vers texte convertit bien",
      "overviewBody": "Le MP3 est un format standard pour podcasts, appels, memos vocaux et interviews. Quand le fichier est deja en MP3, une transcription directe evite des etapes inutiles et permet d aller plus vite vers le texte.",
      "stepsTitle": "Comment convertir un MP3 en texte",
      "steps": [
        "Televersez directement le fichier MP3 sans le reconvertir.",
        "Choisissez TXT pour des notes lisibles ou SRT pour une sortie sous-titres.",
        "Generez la transcription puis relisez les noms, termes metier et la ponctuation avant publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Episodes de podcast et extraits audio",
        "Notes vocales, appels et exports de reunions",
        "Interviews audio a retranscrire avant edition ou citation"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Un passage plus rapide de l audio final vers le texte",
        "Une base propre pour resumes, notes et reutilisation de contenu",
        "Un point de depart pour sous-titres si vous choisissez SRT"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Utilisez le fichier le plus clair si la qualite varie",
        "Choisissez TXT pour les notes et SRT pour le sous-titrage",
        "Prevoyez une relecture des noms propres et changements de locuteur"
      ],
      "ctaTitle": "Utiliser l outil de transcription IA",
      "ctaBody": "Notre outil accepte les fichiers MP3 directement et exporte soit du texte brut soit un fichier SRT pret a relire.",
      "ctaLabel": "Transcrire un MP3",
      "faq": [
        {
          "q": "Puis-je exporter la transcription MP3 en sous-titres ?",
          "a": "Oui. Choisissez SRT si vous voulez une sortie synchronisee au lieu d un simple texte."
        },
        {
          "q": "Faut-il nettoyer le MP3 avant transcription ?",
          "a": "Si l enregistrement contient du souffle, un bourdonnement ou une voix peu claire, oui, cela facilite la relecture."
        },
        {
          "q": "Ce workflow est-il utile pour les podcasts ?",
          "a": "Oui. C est un tres bon point de depart pour notes d episode, citations et archives consultables."
        }
      ]
    },
    "mp4-to-text": {
      "badge": "Guide transcription",
      "h1": "Convertir MP4 en texte en ligne",
      "metaTitle": "Convertir MP4 en texte en ligne - Transcrire une video",
      "metaDescription": "Convertissez une video MP4 en texte avec l IA. Obtenez un fichier TXT ou SRT pour notes, sous-titres et publication.",
      "intro": "Le workflow MP4 vers texte est utile quand la source est une video et que vous voulez extraire la parole en transcription ou en sous-titres.",
      "overviewTitle": "Pourquoi convertir MP4 en texte",
      "overviewBody": "De nombreuses interviews, webinars, tutoriels et reunions sont livres en MP4. Une transcription directe fait gagner du temps car vous n avez pas besoin d extraire l audio avant.",
      "stepsTitle": "Comment transcrire une video MP4",
      "steps": [
        "Televersez le fichier video MP4.",
        "Choisissez TXT pour du texte lisible ou SRT pour des sous-titres synchronises.",
        "Generez la transcription puis relisez la sortie telechargee."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Webinars et videos de formation",
        "Videos d interview",
        "Reunions exportees au format MP4"
      ],
      "ctaTitle": "Transcrire un MP4 directement",
      "ctaBody": "L outil de transcription accepte les fichiers MP4 pour passer de la video au texte ou aux sous-titres en une seule etape.",
      "ctaLabel": "Transcrire un MP4",
      "faq": [
        {
          "q": "Dois-je extraire l audio du MP4 avant ?",
          "a": "Non. Vous pouvez transcrire le MP4 directement."
        },
        {
          "q": "Faut-il choisir TXT ou SRT pour un MP4 ?",
          "a": "TXT est mieux pour des notes. SRT est prefere si vous avez besoin de sous-titres."
        },
        {
          "q": "Le MP4 vers texte aide-t-il pour le sous-titrage ?",
          "a": "Oui. Beaucoup d equipes l utilisent comme premiere etape avant edition des sous-titres."
        }
      ]
    },
    "video-to-text": {
      "badge": "Guide transcription prioritaire",
      "h1": "Convertir une video en texte",
      "metaTitle": "Convertir une video en texte - Transcription IA",
      "metaDescription": "Convertissez une video en texte avec l IA. Transformez MP4, MOV, WebM et autres formats en transcription, notes ou brouillon de sous-titres.",
      "intro": "La recherche video vers texte vient souvent d equipes qui ont deja un webinar, un tutoriel, une reunion ou une interview et veulent rendre la parole consultable et reutilisable.",
      "overviewTitle": "Pourquoi video vers texte ne sert pas qu a transcrire",
      "overviewBody": "Une video contient souvent des informations parlantes difficiles a reutiliser tant qu elles restent dans le fichier. Le passage en texte permet de chercher, resumer, citer et reutiliser plus facilement ce contenu.",
      "stepsTitle": "Comment convertir une video en texte",
      "steps": [
        "Televersez le fichier video d origine sans extraire l audio manuellement.",
        "Choisissez TXT pour une transcription ou SRT pour un brouillon de sous-titres.",
        "Relisez les noms, transitions et termes specifiques avant publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Webinars, demos et videos produit",
        "Videos d interview et temoignages clients",
        "Enregistrements internes a rendre consultables"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Un passage direct de la video au texte",
        "Un texte reutilisable pour resumes, documentation et captions",
        "Moins de preparation qu une extraction audio separee"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Utilisez l export video le plus propre possible",
        "Choisissez SRT si les captions font partie du livrable final",
        "Nettoyez l audio d abord si la voix est couverte par du bruit"
      ],
      "ctaTitle": "Commencer avec une transcription video directe",
      "ctaBody": "L outil accepte les formats audio et video courants pour aller directement vers le texte.",
      "ctaLabel": "Convertir la video en texte",
      "faq": [
        {
          "q": "Peut-on utiliser video vers texte pour preparer des sous-titres ?",
          "a": "Oui. L export SRT est souvent le brouillon le plus rapide pour des captions."
        },
        {
          "q": "Quels formats video comptent le plus ?",
          "a": "MP4 reste le plus courant, mais MOV et WebM sont aussi frequents."
        },
        {
          "q": "Quand faut-il nettoyer l audio avant ?",
          "a": "Quand la video contient du bruit de fond ou une voix peu claire."
        }
      ]
    },
    "audio-to-text": {
      "badge": "Guide transcription",
      "h1": "Convertir un audio en texte",
      "metaTitle": "Convertir un audio en texte - Transcription IA",
      "metaDescription": "Convertissez un fichier audio en texte avec l IA. Transcrivez MP3, WAV, M4A et autres formats en texte ou en sortie sous-titres.",
      "intro": "Audio vers texte est le workflow general pour transformer un enregistrement vocal en texte lisible, notes structurees ou brouillon de sous-titres.",
      "overviewTitle": "Audio vers texte pour les fichiers de parole du quotidien",
      "overviewBody": "Ce workflow couvre notes vocales, interviews, podcasts, exports de reunions et enregistrements terrain. Il est utile quand vous avez du contenu parle sans vous soucier du format exact.",
      "stepsTitle": "Comment convertir un audio en texte",
      "steps": [
        "Televersez un fichier audio pris en charge.",
        "Choisissez le format de sortie qui convient a votre prochaine etape.",
        "Generez la sortie puis relisez la transcription."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Notes vocales et memos parlants",
        "Enregistrements d interview",
        "Workflows generaux de speech-to-text"
      ],
      "ctaTitle": "Utiliser le workflow audio vers texte",
      "ctaBody": "L outil de transcription prend en charge plusieurs formats audio courants et produit soit du texte soit des sous-titres synchronises.",
      "ctaLabel": "Convertir l audio en texte",
      "faq": [
        {
          "q": "Quel format audio televerser ?",
          "a": "Utilisez le fichier que vous avez deja. MP3, WAV et M4A sont les plus courants."
        },
        {
          "q": "Audio vers texte peut-il aussi produire des sous-titres ?",
          "a": "Oui. Choisissez SRT si vous avez besoin d une sortie synchronisee."
        },
        {
          "q": "Quelle difference entre audio vers texte et MP3 vers texte ?",
          "a": "MP3 vers texte est un cas particulier. Audio vers texte couvre plusieurs formats."
        }
      ]
    },
    "interview-transcription": {
      "badge": "Guide transcription",
      "h1": "Transcription d interview en ligne",
      "metaTitle": "Transcription d interview en ligne - Workflow IA",
      "metaDescription": "Transcrivez des interviews audio ou video avec l IA. Obtenez des notes, citations et transcriptions plus faciles a exploiter.",
      "intro": "La transcription d interview est utile quand vous devez relire plus vite, extraire des citations, preparer des notes ou reutiliser une conversation en contenu.",
      "overviewTitle": "Pourquoi transcrire une interview",
      "overviewBody": "Les interviews servent souvent au journalisme, a la recherche, a l editorial ou a la production media. Une transcription rend le contenu consultable et plus facile a citer et resumer.",
      "stepsTitle": "Comment transcrire une interview",
      "steps": [
        "Televersez le fichier audio ou video de l interview.",
        "Choisissez TXT pour des notes ou SRT pour une sortie synchronisee.",
        "Relisez les noms, termes specifiques et passages avec chevauchement de voix."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Interviews de recherche",
        "Conversations invite de podcast",
        "Sessions questions-reponses enregistrees"
      ],
      "ctaTitle": "Transcrire directement des interviews",
      "ctaBody": "Utilisez l outil de transcription pour obtenir rapidement un brouillon d interview a retravailler ensuite.",
      "ctaLabel": "Transcrire une interview",
      "faq": [
        {
          "q": "Faut-il nettoyer l audio d interview avant ?",
          "a": "Si l enregistrement est bruite, oui, le nettoyage facilite la relecture et la publication."
        },
        {
          "q": "Peut-on utiliser la transcription d interview pour des sous-titres ?",
          "a": "Oui. Exportez en SRT si l interview doit etre publiee avec captions."
        },
        {
          "q": "Que faut-il verifier apres generation ?",
          "a": "Les noms, termes metier et sections avec plusieurs locuteurs en meme temps."
        }
      ]
    },
    "podcast-transcription": {
      "badge": "Guide transcription prioritaire",
      "h1": "Transcription de podcast en ligne",
      "metaTitle": "Transcription de podcast en ligne - Podcast vers texte",
      "metaDescription": "Transcrivez un podcast avec l IA. Transformez les episodes en texte pour notes d episode, articles, citations et sous-titres.",
      "intro": "La transcription de podcast interesse les createurs et equipes qui savent deja qu un episode parle peut devenir du texte consultable et reutilisable.",
      "overviewTitle": "Pourquoi la transcription de podcast va au-dela de l accessibilite",
      "overviewBody": "Une transcription ajoute une couche texte a chaque episode. Cela aide pour les resumes, newsletters, articles, captions de clips, accessibilite et archives consultables.",
      "stepsTitle": "Comment transcrire un podcast",
      "steps": [
        "Televersez le fichier audio ou video du podcast.",
        "Choisissez TXT pour notes et reutilisation longue ou SRT pour captions et sous-titres.",
        "Relisez les noms, titres d invites et passages avec voix qui se chevauchent."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Notes d episode et reutilisation en article",
        "Resumes, citations et horodatages",
        "Brouillons de captions pour episodes entiers ou clips"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Une base texte reutilisable pour marketing de contenu et archives",
        "Des captions plus rapides pour podcasts video et clips",
        "Un meilleur point de depart pour resumes et newsletters"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Utilisez l audio nettoye si l episode contient du bourdonnement",
        "Choisissez SRT si les sous-titres font partie de votre diffusion",
        "Prevoyez une relecture des noms d invites et marques citees"
      ],
      "ctaTitle": "Transcrire un podcast",
      "ctaBody": "Utilisez l outil de transcription pour transformer rapidement un episode en texte, resumes, articles ou archives consultables.",
      "ctaLabel": "Transcrire le podcast",
      "faq": [
        {
          "q": "Les transcriptions de podcast peuvent-elles servir aux sous-titres ?",
          "a": "Oui. Un export SRT est un bon point de depart pour captions d episode ou de clips."
        },
        {
          "q": "Faut-il nettoyer l audio du podcast avant ?",
          "a": "Oui si l episode contient un fond bruite, une prise distante ou une voix peu claire."
        },
        {
          "q": "Quel est le principal avantage ?",
          "a": "Transformer un audio long en texte consultable, resumable et reutilisable."
        }
      ]
    },
    "meeting-transcription": {
      "badge": "Guide transcription prioritaire",
      "h1": "Transcription de reunion en ligne",
      "metaTitle": "Transcription de reunion en ligne - Reunion vers texte",
      "metaDescription": "Transcrivez des reunions enregistrees avec l IA. Transformez appels, webinars, ateliers et reunions clients en notes et comptes rendus.",
      "intro": "La transcription de reunion est un workflow a forte intention car l utilisateur a deja un enregistrement long et veut en extraire rapidement decisions, actions ou recap.",
      "overviewTitle": "Pourquoi la transcription de reunion fait gagner du temps",
      "overviewBody": "Reecouter un appel complet prend du temps. Une transcription rend les enregistrements longs consultables et plus simples a resumer pour suivi interne, recap client et documentation.",
      "stepsTitle": "Comment transcrire une reunion",
      "steps": [
        "Televersez l enregistrement de l appel, webinar ou atelier.",
        "Choisissez TXT pour les notes ou SRT si la video a aussi besoin de sous-titres.",
        "Relisez la transcription puis extrayez decisions, actions et citations importantes."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Appels internes et reunions projet",
        "Webinars et ateliers enregistres",
        "Reunions clients qui necessitent un recap"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Un historique consultable sans reecouter toute la reunion",
        "Des supports de passation plus rapides pour les equipes",
        "Une base pour resumes, notes et documentation"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Utilisez la version d enregistrement la plus claire",
        "Choisissez TXT si la sortie sert surtout aux notes et comptes rendus",
        "Relisez les changements de locuteur et le jargon avant partage"
      ],
      "ctaTitle": "Transcrire des reunions enregistrees",
      "ctaBody": "Utilisez la transcription IA pour rendre les enregistrements plus faciles a resumer, chercher et partager.",
      "ctaLabel": "Transcrire la reunion",
      "faq": [
        {
          "q": "Peut-on transcrire un webinar comme une reunion ?",
          "a": "Oui. Le workflow est tres proche et peut sortir du texte ou des sous-titres."
        },
        {
          "q": "TXT ou SRT pour des notes de reunion ?",
          "a": "TXT convient mieux aux notes. SRT est utile si l enregistrement doit aussi etre sous-titre."
        },
        {
          "q": "Pourquoi ne pas simplement reecouter ?",
          "a": "Une transcription est plus rapide a parcourir, chercher et resumer."
        }
      ]
    },
    "subtitle-generator": {
      "badge": "Guide sous-titres prioritaire",
      "h1": "Generateur de sous-titres en ligne",
      "metaTitle": "Generateur de sous-titres en ligne - SRT ou VTT",
      "metaDescription": "Generez des sous-titres en ligne a partir d audio ou de video. Creez des fichiers SRT ou VTT pour edition, publication et accessibilite.",
      "intro": "La recherche generateur de sous-titres vient de personnes qui savent deja qu elles ont besoin de texte synchronise, pas seulement d une transcription.",
      "overviewTitle": "Pourquoi la generation de sous-titres differe d une simple transcription",
      "overviewBody": "Une transcription fournit du texte lisible. La generation de sous-titres ajoute le timing pour afficher ce texte avec la video. C est donc le meilleur choix quand le livrable final est un fichier de captions.",
      "stepsTitle": "Comment generer des sous-titres",
      "steps": [
        "Televersez le fichier audio ou video source.",
        "Choisissez SRT ou VTT selon votre destination de publication.",
        "Generez le fichier puis relisez timing, coupures de lignes, noms et ponctuation."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Brouillons de captions pour publication video",
        "Workflows accessibilite et conformite",
        "Creation rapide de sous-titres avant relecture ou traduction"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Une sortie synchronisee plutot qu un simple texte",
        "Un point de depart plus rapide pour les equipes video",
        "Un fichier a traduire, corriger ou televerser"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Choisissez SRT si vous voulez le format le plus portable",
        "Choisissez VTT si votre diffusion est surtout web",
        "Relisez la longueur des lignes et la ponctuation avant publication"
      ],
      "ctaTitle": "Generer des sous-titres automatiquement",
      "ctaBody": "Utilisez le generateur pour produire un brouillon SRT ou VTT a editer, traduire ou publier.",
      "ctaLabel": "Generer des sous-titres",
      "faq": [
        {
          "q": "Faut-il choisir SRT ou VTT ?",
          "a": "SRT est le choix le plus portable. VTT est souvent prefere pour la lecture web."
        },
        {
          "q": "Le generateur fonctionne-t-il a partir d audio seul ?",
          "a": "Oui. Il peut partir d un fichier audio ou video."
        },
        {
          "q": "Faut-il encore relire les sous-titres ?",
          "a": "Oui. Les noms, la ponctuation et le timing doivent etre verifies."
        }
      ]
    },
    "srt-generator": {
      "badge": "Guide sous-titres prioritaire",
      "h1": "Generateur SRT en ligne",
      "metaTitle": "Generateur SRT en ligne - Creer un fichier sous-titres",
      "metaDescription": "Generez un fichier SRT en ligne avec l IA. Creez des sous-titres synchronises pour YouTube, montage, accessibilite et traduction.",
      "intro": "La recherche generateur SRT est tres intentionnelle. L utilisateur connait deja le format dont il a besoin pour publier, monter ou traduire.",
      "overviewTitle": "Pourquoi le SRT reste le format de sous-titres par defaut",
      "overviewBody": "Le SRT est simple, portable et accepte par la plupart des plateformes video et logiciels. Si vous hesitez entre plusieurs formats, SRT reste souvent le choix le plus sur.",
      "stepsTitle": "Comment creer un fichier SRT",
      "steps": [
        "Televersez la source audio ou video.",
        "Choisissez SRT comme format de sortie.",
        "Generez le fichier puis relisez le timing, les noms et la ponctuation."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Televersements de sous-titres sur YouTube et plateformes video",
        "Edition de brouillons dans des outils de montage",
        "Workflows de localisation qui partent d un format portable"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Le format de sous-titres le plus largement accepte",
        "Un passage direct de la parole a des captions synchronises",
        "Une base stable pour traduction et publication"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Choisissez SRT si vous voulez un format par defaut portable",
        "Relisez le timing avant televersement meme si le texte semble correct",
        "Combinez la generation SRT avec la traduction si vous publiez en plusieurs langues"
      ],
      "ctaTitle": "Creer un fichier SRT automatiquement",
      "ctaBody": "Utilisez le generateur de sous-titres pour produire un fichier SRT directement a partir d un audio ou d une video.",
      "ctaLabel": "Generer un SRT",
      "faq": [
        {
          "q": "A quoi sert un fichier SRT ?",
          "a": "Il sert pour les captions, le televersement sur plateformes video, l edition et la traduction des sous-titres."
        },
        {
          "q": "Le SRT est-il meilleur que le VTT ?",
          "a": "Pas toujours, mais il reste le choix le plus portable et le plus familier."
        },
        {
          "q": "Puis-je traduire un SRT ensuite ?",
          "a": "Oui. C est l un des meilleurs points de depart pour un workflow multilingue."
        }
      ]
    },
    "vtt-generator": {
      "badge": "Guide sous-titres",
      "h1": "Generateur VTT en ligne",
      "metaTitle": "Generateur VTT en ligne - Creer un fichier WebVTT",
      "metaDescription": "Generez un fichier VTT en ligne a partir d audio ou de video. Creez des sous-titres WebVTT pour lecture web et publication navigateur.",
      "intro": "Le generateur VTT est utile quand votre workflow de sous-titres se termine sur le web et que vous avez besoin du format WebVTT.",
      "overviewTitle": "Quand choisir VTT",
      "overviewBody": "Le VTT est largement utilise pour la lecture video dans le navigateur et certains workflows web. Le generer directement peut vous eviter une conversion supplementaire.",
      "stepsTitle": "Comment creer un fichier VTT",
      "steps": [
        "Televersez votre fichier source.",
        "Choisissez VTT comme format de sortie.",
        "Generez le fichier puis testez-le dans le lecteur ou workflow de destination."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Publication de video sur le web",
        "Workflows de captions bases navigateur",
        "Equipes qui ont besoin explicitement de WebVTT"
      ],
      "ctaTitle": "Generer des sous-titres WebVTT",
      "ctaBody": "Utilisez le generateur de sous-titres pour creer directement une sortie VTT a partir d un audio ou d une video.",
      "ctaLabel": "Generer un VTT",
      "faq": [
        {
          "q": "Quelle difference entre VTT et SRT ?",
          "a": "Les deux sont des formats de sous-titres, mais VTT est souvent utilise pour la lecture web."
        },
        {
          "q": "Faut-il choisir VTT pour YouTube ?",
          "a": "SRT reste generalement le choix le plus sur pour YouTube."
        },
        {
          "q": "Peut-on generer du VTT a partir d audio seul ?",
          "a": "Oui. Le workflow fonctionne avec des fichiers audio et video pris en charge."
        }
      ]
    },
    "youtube-subtitle-generator": {
      "badge": "Guide sous-titres prioritaire",
      "h1": "Generateur de sous-titres YouTube",
      "metaTitle": "Generateur de sous-titres YouTube - SRT rapide",
      "metaDescription": "Generez des sous-titres YouTube en ligne. Creez un fichier SRT a partir d audio ou video pour accessibilite et publication multilingue.",
      "intro": "Cette recherche vient de createurs qui veulent aller plus vite vers un fichier de captions avant televersement sur YouTube.",
      "overviewTitle": "Pourquoi ce workflow YouTube est pratique",
      "overviewBody": "Saisir des captions manuellement prend du temps. Un generateur fournit un brouillon SRT a relire avant publication, ce qui accelere l accessibilite et les versions traduites.",
      "stepsTitle": "Comment generer des sous-titres YouTube",
      "steps": [
        "Televersez le fichier source de la video.",
        "Choisissez SRT pour un workflow compatible YouTube.",
        "Generez le fichier puis relisez timing, longueur de ligne, noms et ponctuation."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Brouillons de captions avant publication YouTube",
        "Createurs publiant interviews, podcasts, tutoriels ou explications",
        "Equipes prevoyant aussi des versions traduites"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Un point de depart bien plus rapide que la saisie manuelle",
        "Un fichier SRT portable pour YouTube et d autres plateformes",
        "Un chemin plus simple vers des sous-titres traduits"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Choisissez SRT sauf si votre workflow final impose un autre format",
        "Prevoyez une relecture de la ponctuation et des coupures de ligne",
        "Nettoyez l audio d abord si la voix est couverte par du bruit"
      ],
      "ctaTitle": "Creer un premier brouillon de sous-titres YouTube",
      "ctaBody": "Utilisez le generateur de sous-titres pour obtenir un fichier SRT a relire avant televersement sur YouTube.",
      "ctaLabel": "Generer les sous-titres YouTube",
      "faq": [
        {
          "q": "Quel format est le meilleur pour YouTube ?",
          "a": "SRT est generalement le choix le plus sur et le plus courant."
        },
        {
          "q": "Faut-il encore relire les sous-titres generes ?",
          "a": "Oui. Verifiez noms, ponctuation, timing et coupures de lignes."
        },
        {
          "q": "Puis-je traduire ces sous-titres plus tard ?",
          "a": "Oui. Un brouillon SRT facilite ensuite la traduction."
        }
      ]
    },
    "video-caption-generator": {
      "badge": "Guide sous-titres",
      "h1": "Generateur de captions video",
      "metaTitle": "Generateur de captions video - Workflow IA",
      "metaDescription": "Generez des captions video en ligne avec l IA. Creez des fichiers de sous-titres a partir d audio ou de video en quelques etapes.",
      "intro": "Ce workflow est utile quand vous voulez un texte synchronise a retravailler en captions publiables sans partir de zero.",
      "overviewTitle": "Captions ou transcription generale",
      "overviewBody": "Une transcription donne du texte lisible. Un workflow captions ajoute le timing pour afficher ce texte avec la video. C est la vraie difference entre transcription et sous-titres.",
      "stepsTitle": "Comment generer des captions a partir d une video",
      "steps": [
        "Televersez votre video ou son audio source.",
        "Choisissez un format de sous-titres comme SRT ou VTT.",
        "Generez le fichier puis relisez le resultat avant publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Captions pour videos sociales",
        "Publications axees accessibilite",
        "Brouillons rapides pour equipes de montage"
      ],
      "ctaTitle": "Generer des captions automatiquement",
      "ctaBody": "Utilisez le generateur de sous-titres quand votre objectif principal est une sortie synchronisee plutot qu une simple transcription.",
      "ctaLabel": "Generer des captions video",
      "faq": [
        {
          "q": "Quelle difference entre captions et sous-titres ?",
          "a": "En pratique le workflow est proche. La difference tient surtout a l usage et a la publication."
        },
        {
          "q": "Faut-il commencer par transcription ou captions ?",
          "a": "Choisissez directement le workflow captions si vous avez besoin d une sortie synchronisee."
        },
        {
          "q": "Peut-on ensuite traduire ces captions ?",
          "a": "Oui. Des fichiers comme SRT sont une bonne base pour la traduction."
        }
      ]
    },
    "translate-srt": {
      "badge": "Guide sous-titres prioritaire",
      "h1": "Traduire des sous-titres SRT en ligne",
      "metaTitle": "Traduire un SRT en ligne - Sous-titres multilingues",
      "metaDescription": "Traduisez des sous-titres SRT en ligne avec l IA. Creez des fichiers traduits pour publication video multilingue et localisation.",
      "intro": "La recherche traduire SRT est a forte intention car l utilisateur sait deja que l etape suivante est une sortie sous-titres dans une autre langue.",
      "overviewTitle": "Pourquoi la traduction SRT est un bon workflow de localisation",
      "overviewBody": "Une fois le brouillon de sous-titres cree, la traduction est l une des facons les plus rapides d etendre la portee d une video. Un workflow centre sur SRT reste leger et portable.",
      "stepsTitle": "Comment traduire des sous-titres SRT",
      "steps": [
        "Televersez l audio ou la video source.",
        "Choisissez la langue cible de sortie.",
        "Generez le SRT traduit puis relisez le vocabulaire, le timing et les coupures."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Publication video multilingue",
        "Pilotes de localisation et declinaisons regionales",
        "Equipes qui travaillent deja avec le format SRT"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Un passage direct de la source media au sous-titre traduit",
        "Un workflow de localisation plus simple pour YouTube, formation et produit",
        "Un fichier portable a faire relire avant publication"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Gardez une source claire et stable si possible",
        "Relisez la formulation et le timing avant diffusion",
        "Generez d abord un SRT si vous n avez pas encore de brouillon de sous-titres"
      ],
      "ctaTitle": "Generer des sous-titres traduits",
      "ctaBody": "Utilisez ce workflow lorsque la sortie finale doit etre un fichier de sous-titres dans une autre langue.",
      "ctaLabel": "Traduire les sous-titres",
      "faq": [
        {
          "q": "Faut-il deja avoir un fichier SRT ?",
          "a": "Pas forcement. Vous pouvez partir directement de l audio ou de la video source."
        },
        {
          "q": "Quelles langues sont prises en charge ?",
          "a": "Le workflow prend actuellement en charge l anglais, le francais et l espagnol."
        },
        {
          "q": "Les sous-titres traduits doivent-ils etre relus ?",
          "a": "Oui. Il faut verifier la formulation, le timing et les coupures."
        }
      ]
    },
    "remove-background-noise-from-audio": {
      "badge": "Guide nettoyage audio prioritaire",
      "h1": "Supprimer le bruit de fond d un audio",
      "metaTitle": "Supprimer le bruit de fond d un audio en ligne",
      "metaDescription": "Supprimez le bruit de fond d un audio avec l IA. Nettoyez podcasts, interviews, notes vocales et reunions avant transcription ou publication.",
      "intro": "Supprimer le bruit de fond est une recherche a forte intention. L utilisateur a deja un enregistrement bruite et veut un resultat concret: une voix plus claire.",
      "overviewTitle": "Pourquoi la reduction du bruit ameliore tout le reste",
      "overviewBody": "Le bourdonnement de piece, les ventilateurs ou le bruit lointain ne rendent pas seulement l audio moins agreable. Ils compliquent aussi la relecture des transcriptions et des sous-titres. Un nettoyage ameliore donc tout le workflow suivant.",
      "stepsTitle": "Comment reduire le bruit de fond",
      "steps": [
        "Televersez le fichier audio ou video bruite.",
        "Lancez le workflow de nettoyage pour reduire le bruit courant et clarifier la voix.",
        "Telechargez le resultat puis poursuivez vers transcription, sous-titres, edition ou publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Notes vocales avec bruit de piece ou environnemental",
        "Interviews et reunions a nettoyer avant transcription",
        "Fichiers centres sur la parole avant publication"
      ],
      "whatYouGetTitle": "Ce que ce workflow apporte",
      "whatYouGet": [
        "Une voix plus propre avant transcription ou sous-titrage",
        "Une meilleure base de relecture pour les editeurs et chercheurs",
        "Un fichier plus exploitable pour publication ou partage"
      ],
      "beforeYouStartTitle": "Avant de commencer",
      "beforeYouStart": [
        "Utilisez l enregistrement original plutot qu une copie recompressee",
        "Le gain est surtout visible sur des bruits de fond constants",
        "Pensez a transcrire ensuite le fichier nettoye si votre objectif est le texte"
      ],
      "ctaTitle": "Nettoyer un enregistrement bruite avant la suite",
      "ctaBody": "Utilisez l outil IA de nettoyage avant de transcrire, sous-titrer, monter ou partager le fichier.",
      "ctaLabel": "Supprimer le bruit de fond",
      "faq": [
        {
          "q": "Faut-il nettoyer l audio avant transcription ?",
          "a": "Oui pour les enregistrements bruites. Cela facilite souvent la relecture de la transcription."
        },
        {
          "q": "Peut-on supprimer le bruit d une video aussi ?",
          "a": "Oui. Les fichiers video pris en charge passent par le meme workflow."
        },
        {
          "q": "La reduction du bruit corrige-t-elle tous les problemes ?",
          "a": "Non. Elle aide surtout sur le bruit de fond courant, pas sur tous les defauts possibles."
        }
      ]
    },
    "clean-podcast-audio": {
      "badge": "Guide nettoyage audio",
      "h1": "Nettoyer l audio d un podcast",
      "metaTitle": "Nettoyer l audio d un podcast en ligne",
      "metaDescription": "Nettoyez l audio d un podcast avec l IA. Reduisez le bruit de fond avant transcription, sous-titrage ou republication de l episode.",
      "intro": "Le nettoyage de podcast est utile quand vous avez besoin d une meilleure clarte vocale avant transcription, notes d episode, clips ou diffusion.",
      "overviewTitle": "Pourquoi nettoyer l audio d un podcast d abord",
      "overviewBody": "Meme un excellent contenu peut souffrir d un bruit de piece, d un souffle ou d une prise distante inegale. Un nettoyage en amont aide avant transcription et generation de clips ou sous-titres.",
      "stepsTitle": "Comment nettoyer l audio d un podcast",
      "steps": [
        "Televersez le fichier audio ou video du podcast.",
        "Lancez le nettoyage pour reduire les bruits courants.",
        "Exportez le resultat puis passez a la transcription ou a la publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Episodes avec bourdonnement ou souffle",
        "Audio d invites a distance",
        "Workflows de publication centres sur la parole"
      ],
      "ctaTitle": "Nettoyer un podcast avant transcription",
      "ctaBody": "Utilisez l outil de nettoyage avant de generer des transcriptions, sous-titres ou contenus derives.",
      "ctaLabel": "Nettoyer le podcast",
      "faq": [
        {
          "q": "Le nettoyage remplace-t-il le mixage ou mastering ?",
          "a": "Non. C est surtout une reduction de bruit rapide pour faciliter publication et transcription."
        },
        {
          "q": "Faut-il nettoyer avant de faire les notes d episode ?",
          "a": "Oui si l enregistrement est bruite, car la transcription sera plus facile a relire."
        },
        {
          "q": "Peut-on nettoyer un podcast video aussi ?",
          "a": "Oui. Les fichiers video pris en charge passent aussi par ce workflow."
        }
      ]
    },
    "clean-interview-audio": {
      "badge": "Guide nettoyage audio",
      "h1": "Nettoyer l audio d une interview",
      "metaTitle": "Nettoyer l audio d une interview - Clarifier la voix",
      "metaDescription": "Nettoyez l audio d une interview avec l IA. Reduisez le bruit de fond avant transcription, citation, edition ou publication.",
      "intro": "Le nettoyage d interview est utile quand la clarte compte pour la transcription, la citation ou la publication et que l enregistrement a du bruit.",
      "overviewTitle": "Pourquoi l audio d interview a souvent besoin de nettoyage",
      "overviewBody": "Les interviews sont souvent enregistrees a distance ou dans des environnements imparfaits. Un nettoyage aide a retrouver une parole plus claire avant transcription ou extraction de citations.",
      "stepsTitle": "Comment nettoyer l audio d une interview",
      "steps": [
        "Televersez le fichier audio ou video de l interview.",
        "Lancez le nettoyage pour reduire le bruit.",
        "Telechargez le resultat puis poursuivez vers transcription ou relecture editoriale."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Interviews journalistiques ou de recherche",
        "Enregistrements d interview a distance",
        "Nettoyage vocal avant transcription"
      ],
      "ctaTitle": "Ameliorer la clarte d une interview",
      "ctaBody": "Utilisez l outil de nettoyage avant de transformer l interview en texte, notes, captions ou contenu publiable.",
      "ctaLabel": "Nettoyer l interview",
      "faq": [
        {
          "q": "Le nettoyage aide-t-il la transcription ?",
          "a": "Oui. Pour les fichiers bruites, cela facilite souvent la relecture et la publication."
        },
        {
          "q": "Peut-on nettoyer une video d interview sans extraire l audio ?",
          "a": "Oui. Les fichiers video pris en charge passent directement par le workflow."
        },
        {
          "q": "Est-ce utile pour un travail base sur les citations ?",
          "a": "Oui. Une voix plus claire aide a retrouver, verifier et reutiliser les citations."
        }
      ]
    },
    "voice-recording-noise-reduction": {
      "badge": "Guide nettoyage audio",
      "h1": "Reduction du bruit sur un enregistrement vocal",
      "metaTitle": "Reduction du bruit sur un enregistrement vocal",
      "metaDescription": "Reduisez le bruit d un enregistrement vocal avec l IA. Nettoyez notes vocales, memos, reunions et interviews avant utilisation.",
      "intro": "La reduction du bruit sur un enregistrement vocal est utile quand le fichier contient surtout de la parole et que vous voulez une version plus claire pour transcription, partage ou archive.",
      "overviewTitle": "Pourquoi la clarte de la voix change tout",
      "overviewBody": "Plus la voix est claire, plus il est facile de reecouter, resumer, transcrire, sous-titrer ou partager l enregistrement. Ce workflow est tres utile pour notes vocales et prises terrain.",
      "stepsTitle": "Comment reduire le bruit d un enregistrement vocal",
      "steps": [
        "Televersez l enregistrement vocal.",
        "Lancez le nettoyage pour reduire les bruits de fond courants.",
        "Utilisez ensuite le fichier plus propre pour transcription, notes ou publication."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Notes vocales et memos",
        "Enregistrements terrain contenant surtout de la parole",
        "Captation vocale de reunions ou interviews"
      ],
      "ctaTitle": "Nettoyer un enregistrement vocal en une etape",
      "ctaBody": "Utilisez l outil de nettoyage quand l objectif principal est d obtenir une voix plus claire avant la suite du workflow.",
      "ctaLabel": "Reduire le bruit vocal",
      "faq": [
        {
          "q": "Est-ce utile pour des notes vocales mobiles ?",
          "a": "Oui. C est l un des cas les plus evidents pour ce type de nettoyage."
        },
        {
          "q": "Faut-il nettoyer avant de convertir en texte ?",
          "a": "Oui, surtout si l enregistrement contient un bruit de piece ou des interferences."
        },
        {
          "q": "Peut-on l utiliser sur de courts memos ?",
          "a": "Oui. Les messages vocaux courts sont souvent parmi les workflows les plus rapides."
        }
      ]
    },
    "turboscribe-alternative": {
      "badge": "Guide alternative concurrent",
      "h1": "Alternative a TurboScribe",
      "metaTitle": "Alternative a TurboScribe - Transcription et sous-titres IA",
      "metaDescription": "Vous cherchez une alternative a TurboScribe ? Comparez OnlineMediaTools et TurboScribe pour transcription, sous-titres, nettoyage audio et preparation media.",
      "intro": "Les recherches alternative a TurboScribe viennent souvent d utilisateurs qui veulent un workflow plus leger, plus oriente utilitaires media, ou une suite plus large autour de la transcription.",
      "overviewTitle": "Pourquoi chercher une alternative a TurboScribe",
      "overviewBody": "TurboScribe est solide quand la transcription est le centre du workflow. Les utilisateurs qui continuent a comparer cherchent souvent davantage d utilitaires autour: sous-titres, traduction, nettoyage audio et preparation de fichiers dans le meme environnement.",
      "stepsTitle": "Comment evaluer une alternative a TurboScribe",
      "steps": [
        "Listez les vraies taches de votre workflow autour de la transcription.",
        "Comparez la gestion des sous-titres, de la traduction, du nettoyage et de la preparation finale.",
        "Testez chaque outil sur un vrai enregistrement avant de decider."
      ],
      "bestForTitle": "Ideal pour",
      "bestFor": [
        "Equipes qui ont besoin de transcription plus sous-titres et nettoyage",
        "Createurs qui passent d un media source a plusieurs livrables",
        "Utilisateurs qui veulent un ensemble d outils souple autour de la parole"
      ],
      "whatYouGetTitle": "Pourquoi certaines equipes choisissent OnlineMediaTools",
      "whatYouGet": [
        "Un workflow plus large avec transcription, sous-titres, traduction et nettoyage audio",
        "Des outils orient\u00e9s taches pour aller plus vite du fichier au livrable",
        "Une approche boite a outils plus legere qu un produit purement transcription"
      ],
      "beforeYouStartTitle": "Quoi comparer avant de changer",
      "beforeYouStart": [
        "La frequence a laquelle vous avez besoin de sous-titres ou de traduction",
        "Le role du nettoyage audio dans votre workflow",
        "Le choix entre un produit centre transcription et une boite a outils media plus large"
      ],
      "comparisonTitle": "OnlineMediaTools vs TurboScribe en bref",
      "comparisonRows": [
        {
          "label": "Positionnement principal",
          "omt": "Transcription, sous-titres, nettoyage et preparation media dans une meme boite a outils",
          "competitor": "Produit dedie a la transcription IA avec un positionnement plus centre sur la transcription",
          "takeaway": "Choisissez TurboScribe si la transcription est tout votre workflow. Choisissez OnlineMediaTools si la transcription n est qu une etape parmi d autres."
        },
        {
          "label": "Workflow sous-titres",
          "omt": "Pages et outils dedies a la generation et traduction de sous-titres",
          "competitor": "Tres bon pour produire une transcription et des captions, mais avec un cadrage plus transcription",
          "takeaway": "OnlineMediaTools convient mieux si les sous-titres sont une sortie centrale."
        },
        {
          "label": "Preparation audio",
          "omt": "Nettoyage du bruit de fond avant transcription ou sous-titrage",
          "competitor": "Davantage focalise sur le resultat transcriptif que sur les utilitaires de nettoyage media",
          "takeaway": "Si le nettoyage avant transcription compte, OnlineMediaTools offre un chemin plus direct."
        },
        {
          "label": "Workflow de publication",
          "omt": "Utile pour encha\u00eener transcription, sous-titres, traduction et preparation de diffusion",
          "competitor": "Utile quand vous voulez surtout une experience dediee a la transcription",
          "takeaway": "Le bon choix depend de la largeur reelle de votre chaine de production."
        },
        {
          "label": "Profil d utilisateur",
          "omt": "Createurs, petites equipes et operations qui veulent des utilitaires media flexibles",
          "competitor": "Equipes qui veulent un produit davantage specialise autour de la transcription",
          "takeaway": "TurboScribe est plus specialise sur la transcription. OnlineMediaTools est plus large autour du fichier media."
        }
      ],
      "fitTitle": "Quel outil choisir selon votre cas",
      "fitCards": [
        {
          "title": "Choisissez OnlineMediaTools si...",
          "items": [
            "Vous avez besoin de transcription, sous-titres, traduction et nettoyage audio au meme endroit.",
            "Vous publiez videos, podcasts ou clips et avez besoin de plusieurs sorties autour du media.",
            "Vous preferez des outils rapides orientes execution plutot qu une interface purement transcription."
          ]
        },
        {
          "title": "Choisissez TurboScribe si...",
          "items": [
            "Vous voulez une experience plus dediee a la transcription.",
            "Votre besoin principal est le transcript plutot que les utilitaires media voisins.",
            "La production de longues transcriptions est vraiment le coeur de votre usage."
          ]
        }
      ],
      "ctaTitle": "Tester le workflow media plus large",
      "ctaBody": "Si votre transcription mene souvent vers des sous-titres, de la traduction ou du nettoyage, testez OnlineMediaTools sur un enregistrement reel.",
      "ctaLabel": "Essayer la transcription IA",
      "faq": [
        {
          "q": "OnlineMediaTools est-il meilleur que TurboScribe pour tous les cas ?",
          "a": "Non. TurboScribe reste plus fort si vous voulez un produit tres centre sur la transcription. OnlineMediaTools est plus large autour du workflow media."
        },
        {
          "q": "Qui devrait envisager de quitter TurboScribe ?",
          "a": "Les utilisateurs qui ont aussi besoin de generation de sous-titres, de traduction ou de nettoyage audio dans le meme workflow."
        },
        {
          "q": "Peut-on utiliser OnlineMediaTools si le besoin principal est le sous-titrage ?",
          "a": "Oui. C est meme l un des points de difference les plus clairs du produit."
        }
      ]
    }
  },
  "es": {
    "mp3-to-text": {
      "badge": "Guia prioritaria de transcripcion",
      "h1": "Convertir MP3 a texto online",
      "metaTitle": "Convertir MP3 a texto online - Transcripcion IA",
      "metaDescription": "Convierte archivos MP3 a texto con IA. Obtiene transcripciones para podcasts, notas de voz, entrevistas y reuniones.",
      "intro": "La busqueda MP3 a texto tiene una intencion muy fuerte. La persona ya tiene la grabacion final y busca el camino mas rapido hacia una transcripcion util.",
      "overviewTitle": "Por que el flujo MP3 a texto convierte bien",
      "overviewBody": "MP3 es un formato estandar para podcasts, llamadas, notas de voz y entrevistas. Si el archivo ya esta en MP3, la transcripcion directa evita pasos innecesarios y acelera el paso al texto.",
      "stepsTitle": "Como convertir MP3 a texto",
      "steps": [
        "Sube el archivo MP3 directamente sin volver a convertirlo.",
        "Elige TXT para notas legibles o SRT para una salida de subtitulos.",
        "Genera la transcripcion y revisa nombres, terminos y puntuacion antes de publicar."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Episodios de podcast y fragmentos",
        "Notas de voz, llamadas y exportaciones de reuniones",
        "Entrevistas en audio que necesitan transcripcion antes de editar o citar"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Un paso mas rapido del audio final al texto",
        "Una base limpia para resumenes, notas y reutilizacion de contenido",
        "Un punto de partida para subtitulos si eliges SRT"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Usa el archivo mas claro si la calidad de voz varia mucho",
        "Elige TXT para notas y SRT para subtitulado",
        "Preve una revision de nombres propios y cambios de hablante"
      ],
      "ctaTitle": "Usar la herramienta de transcripcion IA",
      "ctaBody": "Nuestra herramienta acepta MP3 directamente y exporta texto plano o un archivo SRT listo para revisar.",
      "ctaLabel": "Transcribir MP3",
      "faq": [
        {
          "q": "Puedo exportar la transcripcion MP3 como subtitulos?",
          "a": "Si. Elige SRT si quieres una salida sincronizada en lugar de solo texto."
        },
        {
          "q": "Conviene limpiar el MP3 antes de transcribirlo?",
          "a": "Si el audio tiene zumbido, ruido constante o poca claridad, si, facilita la revision."
        },
        {
          "q": "Este flujo sirve para podcasts?",
          "a": "Si. Es un muy buen punto de partida para notas del episodio, citas y archivos consultables."
        }
      ]
    },
    "mp4-to-text": {
      "badge": "Guia de transcripcion",
      "h1": "Convertir MP4 a texto online",
      "metaTitle": "Convertir MP4 a texto online - Transcribir video",
      "metaDescription": "Convierte video MP4 a texto con IA. Obtiene archivos TXT o SRT para notas, subtitulos y publicacion.",
      "intro": "MP4 a texto es util cuando la fuente es un video y quieres extraer el contenido hablado en una transcripcion o archivo de subtitulos.",
      "overviewTitle": "Por que convertir MP4 a texto",
      "overviewBody": "Muchas entrevistas, webinars, tutoriales y reuniones se entregan como MP4. Una transcripcion directa ahorra tiempo porque no hace falta extraer el audio primero.",
      "stepsTitle": "Como transcribir un video MP4",
      "steps": [
        "Sube el archivo MP4.",
        "Elige TXT para texto legible o SRT para subtitulos sincronizados.",
        "Genera la transcripcion y revisa el archivo descargado."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Webinars y videos formativos",
        "Videos de entrevistas",
        "Reuniones exportadas en formato MP4"
      ],
      "ctaTitle": "Transcribir MP4 directamente",
      "ctaBody": "La herramienta acepta MP4 para pasar del video al texto o a subtitulos en un solo paso.",
      "ctaLabel": "Transcribir MP4",
      "faq": [
        {
          "q": "Hace falta extraer el audio del MP4 primero?",
          "a": "No. Puedes transcribir el MP4 directamente."
        },
        {
          "q": "TXT o SRT para un MP4?",
          "a": "TXT sirve mejor para notas. SRT es preferible si necesitas subtitulos."
        },
        {
          "q": "MP4 a texto ayuda para subtitular?",
          "a": "Si. Muchas personas lo usan como primera fase antes de editar subtitulos."
        }
      ]
    },
    "video-to-text": {
      "badge": "Guia prioritaria de transcripcion",
      "h1": "Convertir video a texto",
      "metaTitle": "Convertir video a texto - Transcripcion IA",
      "metaDescription": "Convierte video a texto con IA. Transforma MP4, MOV, WebM y otros formatos en transcripciones, notas o borradores de subtitulos.",
      "intro": "Las busquedas video a texto suelen venir de equipos que ya tienen un webinar, tutorial, reunion o entrevista y quieren volver util el contenido hablado.",
      "overviewTitle": "Por que video a texto es mas que una transcripcion",
      "overviewBody": "Un archivo de video suele contener informacion valiosa dificil de reutilizar mientras siga dentro del video. Pasarlo a texto facilita buscar, resumir, citar y reutilizar el contenido.",
      "stepsTitle": "Como convertir un video a texto",
      "steps": [
        "Sube el archivo de video original sin extraer el audio manualmente.",
        "Elige TXT para una transcripcion o SRT para un borrador de subtitulos.",
        "Revisa nombres, transiciones y terminos especificos antes de publicar."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Webinars, demos y videos de producto",
        "Videos de entrevistas e historias de clientes",
        "Grabaciones internas que deben ser consultables"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Un paso directo de video a texto",
        "Texto reutilizable para resumenes, documentacion y captions",
        "Menos preparacion que una extraccion de audio separada"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Usa la exportacion de video mas limpia posible",
        "Elige SRT si los captions forman parte del entregable final",
        "Limpia el audio primero si la voz esta tapada por ruido"
      ],
      "ctaTitle": "Empezar con transcripcion directa de video",
      "ctaBody": "La herramienta acepta formatos comunes de audio y video para ir directamente al texto.",
      "ctaLabel": "Convertir video a texto",
      "faq": [
        {
          "q": "Se puede usar video a texto para preparar subtitulos?",
          "a": "Si. Exportar SRT suele ser el borrador mas rapido para captions."
        },
        {
          "q": "Que formatos de video importan mas?",
          "a": "MP4 es el mas habitual, pero MOV y WebM tambien son frecuentes."
        },
        {
          "q": "Cuando conviene limpiar el audio antes?",
          "a": "Cuando el video tiene ruido ambiente o la voz no es clara."
        }
      ]
    },
    "audio-to-text": {
      "badge": "Guia de transcripcion",
      "h1": "Convertir audio a texto",
      "metaTitle": "Convertir audio a texto - Transcripcion IA",
      "metaDescription": "Convierte audio a texto con IA. Transcribe MP3, WAV, M4A y otros formatos a texto o salida para subtitulos.",
      "intro": "Audio a texto es el flujo general para transformar una grabacion de voz en texto legible, notas estructuradas o borradores de subtitulos.",
      "overviewTitle": "Audio a texto para archivos de voz de uso diario",
      "overviewBody": "Este flujo cubre notas de voz, entrevistas, podcasts, exportaciones de reuniones y grabaciones de campo. Es util cuando tienes contenido hablado y no te importa tanto el formato exacto.",
      "stepsTitle": "Como convertir audio a texto",
      "steps": [
        "Sube un archivo de audio compatible.",
        "Elige el formato de salida que encaje con el siguiente paso.",
        "Genera la salida y revisa la transcripcion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Notas de voz y memos hablados",
        "Grabaciones de entrevistas",
        "Flujos generales de speech-to-text"
      ],
      "ctaTitle": "Usar el flujo audio a texto",
      "ctaBody": "La herramienta de transcripcion admite varios formatos comunes y genera texto o subtitulos sincronizados.",
      "ctaLabel": "Convertir audio a texto",
      "faq": [
        {
          "q": "Que formato de audio debo subir?",
          "a": "Usa el archivo que ya tienes. MP3, WAV y M4A son los mas comunes."
        },
        {
          "q": "Audio a texto tambien puede producir subtitulos?",
          "a": "Si. Elige SRT si necesitas una salida con tiempo."
        },
        {
          "q": "Que diferencia hay entre audio a texto y MP3 a texto?",
          "a": "MP3 a texto es un caso concreto. Audio a texto cubre varios formatos."
        }
      ]
    },
    "interview-transcription": {
      "badge": "Guia de transcripcion",
      "h1": "Transcripcion de entrevistas online",
      "metaTitle": "Transcripcion de entrevistas online - Flujo IA",
      "metaDescription": "Transcribe entrevistas de audio o video con IA. Obtiene notas, citas y transcripciones mas faciles de usar.",
      "intro": "La transcripcion de entrevistas es util cuando necesitas revisar mas rapido, extraer citas, preparar notas o reutilizar conversaciones.",
      "overviewTitle": "Por que transcribir una entrevista",
      "overviewBody": "Las entrevistas suelen reutilizarse en periodismo, investigacion, trabajo editorial o produccion multimedia. Una transcripcion vuelve el contenido buscable y mas facil de citar y resumir.",
      "stepsTitle": "Como transcribir una entrevista",
      "steps": [
        "Sube el archivo de audio o video de la entrevista.",
        "Elige TXT para notas o SRT para salida sincronizada.",
        "Revisa nombres, terminos especificos y partes con voces solapadas."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Entrevistas de investigacion",
        "Conversaciones con invitados de podcast",
        "Sesiones de preguntas y respuestas grabadas"
      ],
      "ctaTitle": "Transcribir entrevistas directamente",
      "ctaBody": "Usa la herramienta de transcripcion para obtener un borrador rapido de entrevista y pulirlo despues.",
      "ctaLabel": "Transcribir entrevista",
      "faq": [
        {
          "q": "Conviene limpiar el audio de la entrevista antes?",
          "a": "Si el archivo tiene ruido, si, facilita la revision y publicacion."
        },
        {
          "q": "Se puede usar la transcripcion para subtitulos?",
          "a": "Si. Exporta en SRT si la entrevista se publicara con captions."
        },
        {
          "q": "Que hay que revisar despues?",
          "a": "Nombres, terminos especializados y secciones con varios hablantes a la vez."
        }
      ]
    },
    "podcast-transcription": {
      "badge": "Guia prioritaria de transcripcion",
      "h1": "Transcripcion de podcast online",
      "metaTitle": "Transcripcion de podcast online - Podcast a texto",
      "metaDescription": "Transcribe podcasts con IA. Convierte episodios en texto para notas del episodio, articulos, citas y subtitulos.",
      "intro": "La transcripcion de podcast interesa a creadores y equipos que ya saben que un episodio hablado puede convertirse en texto reutilizable.",
      "overviewTitle": "Por que la transcripcion de podcast va mas alla de la accesibilidad",
      "overviewBody": "Una transcripcion a\u00f1ade una capa de texto a cada episodio. Eso ayuda con resumenes, newsletters, articulos, captions de clips y archivos consultables.",
      "stepsTitle": "Como transcribir un podcast",
      "steps": [
        "Sube el archivo de audio o video del podcast.",
        "Elige TXT para notas y reutilizacion larga o SRT para captions y subtitulos.",
        "Revisa nombres, cargos de invitados y partes con voces solapadas."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Notas del episodio y reutilizacion en articulo",
        "Resumenes, citas y marcas de tiempo",
        "Borradores de captions para episodios o clips"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Una base de texto reutilizable para marketing y archivo",
        "Captions mas rapidos para podcasts en video y clips",
        "Un mejor punto de partida para resumenes y newsletters"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Usa el audio limpio si el episodio tiene zumbido",
        "Elige SRT si los subtitulos forman parte del plan de publicacion",
        "Preve una revision de nombres de invitados y marcas mencionadas"
      ],
      "ctaTitle": "Transcribir un podcast",
      "ctaBody": "Usa la herramienta para convertir rapidamente un episodio en texto, resumenes, articulos o archivos consultables.",
      "ctaLabel": "Transcribir podcast",
      "faq": [
        {
          "q": "Las transcripciones de podcast sirven para subtitulos?",
          "a": "Si. Un SRT es un buen punto de partida para captions de episodios o clips."
        },
        {
          "q": "Conviene limpiar el audio del podcast antes?",
          "a": "Si el episodio tiene ruido de fondo, grabacion remota irregular o voz poco clara, si."
        },
        {
          "q": "Cual es la principal ventaja?",
          "a": "Convertir audio largo en texto consultable, resumible y reutilizable."
        }
      ]
    },
    "meeting-transcription": {
      "badge": "Guia prioritaria de transcripcion",
      "h1": "Transcripcion de reuniones online",
      "metaTitle": "Transcripcion de reuniones online - Reuniones a texto",
      "metaDescription": "Transcribe reuniones grabadas con IA. Convierte llamadas, webinars, talleres y reuniones con clientes en notas y resumentes.",
      "intro": "La transcripcion de reuniones es un flujo de alta intencion porque la persona ya tiene una grabacion larga y quiere sacar decisiones, tareas o recapitulaciones.",
      "overviewTitle": "Por que transcribir reuniones ahorra tiempo",
      "overviewBody": "Volver a escuchar una llamada completa consume mucho tiempo. Una transcripcion hace que las grabaciones largas sean buscables y mas faciles de resumir para seguimientos internos o con clientes.",
      "stepsTitle": "Como transcribir una reunion",
      "steps": [
        "Sube la grabacion de la llamada, webinar o taller.",
        "Elige TXT para notas o SRT si el video tambien necesita subtitulos.",
        "Revisa la transcripcion y extrae decisiones, acciones y citas importantes."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Llamadas internas y reuniones de proyecto",
        "Webinars y talleres grabados",
        "Reuniones con clientes que necesitan recap"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Un registro buscable sin reproducir toda la reunion",
        "Material de handoff mas rapido para el equipo",
        "Una base para resumenes, notas y documentacion"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Usa la version mas clara de la grabacion",
        "Elige TXT si la salida es sobre todo para notas",
        "Revisa cambios de hablante y jerga antes de compartir"
      ],
      "ctaTitle": "Transcribir reuniones grabadas",
      "ctaBody": "Usa la transcripcion IA para hacer los registros mas faciles de resumir, buscar y compartir.",
      "ctaLabel": "Transcribir reunion",
      "faq": [
        {
          "q": "Se puede transcribir un webinar como reunion?",
          "a": "Si. El flujo es muy parecido y puede salir como texto o subtitulos."
        },
        {
          "q": "TXT o SRT para notas de reunion?",
          "a": "TXT suele servir mejor para notas. SRT es util si el video tambien debe llevar subtitulos."
        },
        {
          "q": "Por que no simplemente volver a escuchar?",
          "a": "Una transcripcion es mucho mas rapida de recorrer, buscar y resumir."
        }
      ]
    },
    "subtitle-generator": {
      "badge": "Guia prioritaria de subtitulos",
      "h1": "Generador de subtitulos online",
      "metaTitle": "Generador de subtitulos online - SRT o VTT",
      "metaDescription": "Genera subtitulos online a partir de audio o video. Crea archivos SRT o VTT para edicion, publicacion y accesibilidad.",
      "intro": "La busqueda generador de subtitulos suele venir de personas que ya saben que necesitan texto sincronizado, no solo una transcripcion.",
      "overviewTitle": "Por que generar subtitulos no es lo mismo que transcribir",
      "overviewBody": "Una transcripcion solo entrega texto legible. Generar subtitulos a\u00f1ade tiempo para mostrar el texto con el video. Por eso es mejor cuando el resultado final es un archivo de captions.",
      "stepsTitle": "Como generar subtitulos",
      "steps": [
        "Sube el archivo de audio o video de origen.",
        "Elige SRT o VTT segun tu destino de publicacion.",
        "Genera el archivo y revisa tiempos, cortes de linea, nombres y puntuacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Borradores de captions para publicar video",
        "Flujos de accesibilidad y cumplimiento",
        "Creacion rapida antes de revisar o traducir"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Una salida sincronizada y no solo texto",
        "Un punto de partida mas rapido para equipos de video",
        "Un archivo listo para traducir, corregir o subir"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Elige SRT si quieres el formato mas portable",
        "Elige VTT si tu distribucion es principalmente web",
        "Revisa longitud de lineas y puntuacion antes de publicar"
      ],
      "ctaTitle": "Generar subtitulos automaticamente",
      "ctaBody": "Usa el generador para producir un borrador SRT o VTT listo para editar, traducir o publicar.",
      "ctaLabel": "Generar subtitulos",
      "faq": [
        {
          "q": "Conviene elegir SRT o VTT?",
          "a": "SRT es la opcion mas portable. VTT suele preferirse para reproduccion web."
        },
        {
          "q": "Funciona tambien con audio sin video?",
          "a": "Si. Puede partir de un archivo de audio o de video."
        },
        {
          "q": "Hay que revisar los subtitulos de todos modos?",
          "a": "Si. Conviene verificar nombres, puntuacion y timing."
        }
      ]
    },
    "srt-generator": {
      "badge": "Guia prioritaria de subtitulos",
      "h1": "Generador SRT online",
      "metaTitle": "Generador SRT online - Crear archivo de subtitulos",
      "metaDescription": "Genera archivos SRT online con IA. Crea subtitulos sincronizados para YouTube, edicion, accesibilidad y traduccion.",
      "intro": "La busqueda generador SRT es muy intencional. La persona ya conoce el formato que necesita para publicar, editar o traducir.",
      "overviewTitle": "Por que SRT sigue siendo el formato por defecto",
      "overviewBody": "SRT es simple, portable y aceptado por la mayoria de plataformas y herramientas. Si dudas entre formatos, SRT suele ser la opcion mas segura.",
      "stepsTitle": "Como crear un archivo SRT",
      "steps": [
        "Sube la fuente de audio o video.",
        "Elige SRT como formato de salida.",
        "Genera el archivo y revisa tiempos, nombres y puntuacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Subida de subtitulos a YouTube y otras plataformas",
        "Edicion de borradores en herramientas de video",
        "Flujos de localizacion que parten de un formato portable"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "El formato de subtitulos mas aceptado",
        "Un paso directo de voz a captions sincronizados",
        "Una base estable para traduccion y publicacion"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Elige SRT si quieres un formato portable por defecto",
        "Revisa el timing antes de subir incluso si el texto se ve correcto",
        "Combina SRT con traduccion si publicaras en varios idiomas"
      ],
      "ctaTitle": "Crear un archivo SRT automaticamente",
      "ctaBody": "Usa el generador de subtitulos para producir un SRT directamente desde audio o video.",
      "ctaLabel": "Generar SRT",
      "faq": [
        {
          "q": "Para que sirve un archivo SRT?",
          "a": "Sirve para captions, subida a plataformas, edicion y traduccion de subtitulos."
        },
        {
          "q": "SRT es mejor que VTT?",
          "a": "No siempre, pero suele ser la opcion mas portable y familiar."
        },
        {
          "q": "Puedo traducir un SRT despues?",
          "a": "Si. Es uno de los mejores puntos de partida para un flujo multilingue."
        }
      ]
    },
    "vtt-generator": {
      "badge": "Guia de subtitulos",
      "h1": "Generador VTT online",
      "metaTitle": "Generador VTT online - Crear archivo WebVTT",
      "metaDescription": "Genera archivos VTT online a partir de audio o video. Crea subtitulos WebVTT para publicacion web y reproduccion en navegador.",
      "intro": "El generador VTT es util cuando el flujo de subtitulos termina en la web y necesitas el formato WebVTT.",
      "overviewTitle": "Cuando elegir VTT",
      "overviewBody": "VTT se usa mucho en reproduccion de video dentro del navegador y en algunos flujos web. Generarlo directamente puede ahorrarte una conversion posterior.",
      "stepsTitle": "Como crear un archivo VTT",
      "steps": [
        "Sube tu archivo de origen.",
        "Elige VTT como formato de salida.",
        "Genera el archivo y pruebalo en el reproductor o flujo final."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Publicacion de video en la web",
        "Flujos de captions en navegador",
        "Equipos que necesitan WebVTT de forma explicita"
      ],
      "ctaTitle": "Generar subtitulos WebVTT",
      "ctaBody": "Usa el generador de subtitulos para crear una salida VTT directamente desde audio o video.",
      "ctaLabel": "Generar VTT",
      "faq": [
        {
          "q": "Que diferencia hay entre VTT y SRT?",
          "a": "Ambos son formatos de subtitulos, pero VTT se usa mucho en reproduccion web."
        },
        {
          "q": "Conviene VTT para YouTube?",
          "a": "SRT suele ser la opcion mas segura para YouTube."
        },
        {
          "q": "Se puede generar VTT desde audio sin video?",
          "a": "Si. El flujo funciona con archivos de audio y video compatibles."
        }
      ]
    },
    "youtube-subtitle-generator": {
      "badge": "Guia prioritaria de subtitulos",
      "h1": "Generador de subtitulos para YouTube",
      "metaTitle": "Generador de subtitulos para YouTube - SRT rapido",
      "metaDescription": "Genera subtitulos para YouTube online. Crea archivos SRT a partir de audio o video para accesibilidad y publicacion multilingue.",
      "intro": "Esta busqueda suele venir de creadores que quieren llegar mas rapido a un archivo de captions antes de subir el video a YouTube.",
      "overviewTitle": "Por que este flujo para YouTube es practico",
      "overviewBody": "Escribir captions manualmente lleva mucho tiempo. Un generador entrega un borrador SRT para revisar antes de publicar y acelera tanto la accesibilidad como las versiones traducidas.",
      "stepsTitle": "Como generar subtitulos para YouTube",
      "steps": [
        "Sube el archivo fuente del video.",
        "Elige SRT para un flujo compatible con YouTube.",
        "Genera el archivo y revisa tiempos, longitud de linea, nombres y puntuacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Borradores de captions antes de publicar en YouTube",
        "Creadores que publican entrevistas, podcasts, tutoriales o explicaciones",
        "Equipos que tambien preparan versiones traducidas"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Un punto de partida mucho mas rapido que escribir todo a mano",
        "Un archivo SRT portable para YouTube y otras plataformas",
        "Un camino mas simple hacia subtitulos traducidos"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Elige SRT salvo que tu flujo final exija otro formato",
        "Planifica una revision de puntuacion y cortes de linea",
        "Limpia el audio antes si la voz queda tapada por ruido"
      ],
      "ctaTitle": "Crear un primer borrador para YouTube",
      "ctaBody": "Usa el generador para obtener un archivo SRT que puedas revisar antes de subirlo a YouTube.",
      "ctaLabel": "Generar subtitulos para YouTube",
      "faq": [
        {
          "q": "Que formato es mejor para YouTube?",
          "a": "SRT suele ser la opcion mas segura y mas comun."
        },
        {
          "q": "Hay que revisar los subtitulos generados?",
          "a": "Si. Conviene revisar nombres, puntuacion, timing y cortes."
        },
        {
          "q": "Puedo traducirlos despues?",
          "a": "Si. Tener un borrador SRT facilita mucho la traduccion posterior."
        }
      ]
    },
    "video-caption-generator": {
      "badge": "Guia de subtitulos",
      "h1": "Generador de captions para video",
      "metaTitle": "Generador de captions para video - Flujo IA",
      "metaDescription": "Genera captions de video online con IA. Crea archivos de subtitulos a partir de audio o video en pocos pasos.",
      "intro": "Este flujo es util cuando quieres texto sincronizado listo para convertirse en captions publicables sin empezar desde cero.",
      "overviewTitle": "Captions frente a transcripcion general",
      "overviewBody": "Una transcripcion entrega texto legible. Un flujo de captions a\u00f1ade tiempo para mostrar ese texto con el video. Esa es la gran diferencia entre transcribir y subtitular.",
      "stepsTitle": "Como generar captions desde un video",
      "steps": [
        "Sube tu video o el audio de origen.",
        "Elige un formato de subtitulos como SRT o VTT.",
        "Genera el archivo y revisa el resultado antes de publicar."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Captions para videos sociales",
        "Publicaciones orientadas a la accesibilidad",
        "Borradores rapidos para equipos de edicion"
      ],
      "ctaTitle": "Generar captions automaticamente",
      "ctaBody": "Usa el generador de subtitulos cuando la meta principal sea una salida sincronizada y no solo texto.",
      "ctaLabel": "Generar captions",
      "faq": [
        {
          "q": "Que diferencia hay entre captions y subtitulos?",
          "a": "En la practica el flujo es muy parecido. La diferencia suele estar en el uso y la publicacion."
        },
        {
          "q": "Conviene empezar por transcripcion o por captions?",
          "a": "Si necesitas salida sincronizada, usa directamente el flujo de captions."
        },
        {
          "q": "Se pueden traducir estos captions despues?",
          "a": "Si. Archivos como SRT son una buena base para traduccion."
        }
      ]
    },
    "translate-srt": {
      "badge": "Guia prioritaria de subtitulos",
      "h1": "Traducir subtitulos SRT online",
      "metaTitle": "Traducir SRT online - Subtitulos multilingues",
      "metaDescription": "Traduce subtitulos SRT online con IA. Crea archivos traducidos para publicacion de video multilingue y localizacion.",
      "intro": "La busqueda traducir SRT tiene alta intencion porque el usuario ya sabe que el siguiente paso es un archivo de subtitulos en otro idioma.",
      "overviewTitle": "Por que la traduccion SRT es un buen flujo de localizacion",
      "overviewBody": "Una vez creado el borrador de subtitulos, traducirlo es una de las formas mas rapidas de ampliar el alcance de un video. Un flujo centrado en SRT es ligero y portable.",
      "stepsTitle": "Como traducir subtitulos SRT",
      "steps": [
        "Sube el audio o video de origen.",
        "Elige el idioma objetivo.",
        "Genera el SRT traducido y revisa vocabulario, tiempos y cortes antes de publicar."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Publicacion de video en varios idiomas",
        "Pilotos de localizacion y lanzamientos regionales",
        "Equipos que ya trabajan con SRT como formato base"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Un paso directo del media de origen al subtitulo traducido",
        "Un flujo de localizacion mas simple para YouTube, formacion o producto",
        "Un archivo portable listo para revision final"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Mantener una fuente clara ayuda a la calidad final",
        "Revisa expresiones y timing antes de la publicacion",
        "Genera primero un SRT si todavia no tienes un borrador"
      ],
      "ctaTitle": "Generar subtitulos traducidos",
      "ctaBody": "Usa este flujo cuando la salida final deba ser un archivo de subtitulos en otro idioma.",
      "ctaLabel": "Traducir subtitulos",
      "faq": [
        {
          "q": "Hace falta tener ya un archivo SRT?",
          "a": "No necesariamente. Puedes partir directamente del audio o video original."
        },
        {
          "q": "Que idiomas admite el flujo?",
          "a": "Actualmente admite salida en ingles, frances y espanol."
        },
        {
          "q": "Hay que revisar los subtitulos traducidos?",
          "a": "Si. Conviene revisar formulacion, tiempos y cortes de linea."
        }
      ]
    },
    "remove-background-noise-from-audio": {
      "badge": "Guia prioritaria de limpieza de audio",
      "h1": "Quitar ruido de fondo de un audio",
      "metaTitle": "Quitar ruido de fondo de un audio online",
      "metaDescription": "Quita ruido de fondo de audio con IA. Limpia podcasts, entrevistas, notas de voz y reuniones antes de transcribir o publicar.",
      "intro": "Quitar ruido de fondo es una busqueda de alta intencion. La persona ya tiene una grabacion ruidosa y busca un resultado concreto: una voz mas clara.",
      "overviewTitle": "Por que reducir ruido mejora todo lo que viene despues",
      "overviewBody": "El zumbido de sala, ventiladores o ruido lejano no solo hacen el audio menos agradable. Tambien dificultan revisar transcripciones y subtitulos. Por eso una limpieza mejora el resto del flujo.",
      "stepsTitle": "Como reducir el ruido de fondo",
      "steps": [
        "Sube el archivo de audio o video con ruido.",
        "Ejecuta la limpieza para reducir ruido habitual y mejorar la claridad de la voz.",
        "Descarga el resultado y continua con transcripcion, subtitulado, edicion o publicacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Notas de voz con ruido ambiental o de sala",
        "Entrevistas y reuniones antes de transcribir",
        "Archivos centrados en voz antes de publicar"
      ],
      "whatYouGetTitle": "Lo que aporta este flujo",
      "whatYouGet": [
        "Una se\u00f1al de voz mas limpia antes de transcribir o subtitular",
        "Una mejor base de revision para editores e investigadores",
        "Un archivo mas util para publicar o compartir"
      ],
      "beforeYouStartTitle": "Antes de empezar",
      "beforeYouStart": [
        "Usa la grabacion original y no una copia recompresada",
        "La mejora es mayor con ruido de fondo constante",
        "Piensa en transcribir despues el archivo limpio si tu objetivo es texto"
      ],
      "ctaTitle": "Limpiar una grabacion con ruido antes del siguiente paso",
      "ctaBody": "Usa la herramienta IA de limpieza antes de transcribir, subtitular, editar o compartir el archivo.",
      "ctaLabel": "Quitar ruido de fondo",
      "faq": [
        {
          "q": "Conviene limpiar el audio antes de transcribir?",
          "a": "Si para grabaciones ruidosas. Suele facilitar la revision de la transcripcion."
        },
        {
          "q": "Se puede quitar ruido de un video tambien?",
          "a": "Si. Los archivos de video compatibles usan el mismo flujo."
        },
        {
          "q": "La reduccion de ruido corrige todos los problemas?",
          "a": "No. Ayuda sobre todo con ruido de fondo habitual, no con todos los fallos posibles."
        }
      ]
    },
    "clean-podcast-audio": {
      "badge": "Guia de limpieza de audio",
      "h1": "Limpiar audio de podcast",
      "metaTitle": "Limpiar audio de podcast online",
      "metaDescription": "Limpia audio de podcast con IA. Reduce ruido de fondo antes de transcribir, subtitular o volver a publicar el episodio.",
      "intro": "La limpieza de podcast es util cuando necesitas mejor claridad de voz antes de transcribir, crear notas del episodio o publicar clips.",
      "overviewTitle": "Por que limpiar el audio del podcast primero",
      "overviewBody": "Incluso un gran contenido puede sufrir por ruido de sala, siseo o grabaciones remotas desiguales. Limpiar antes ayuda a transcribir, subtitular y republicar mejor.",
      "stepsTitle": "Como limpiar audio de podcast",
      "steps": [
        "Sube el archivo de audio o video del podcast.",
        "Ejecuta la limpieza para reducir ruido comun.",
        "Exporta el resultado y continua con transcripcion o publicacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Episodios con zumbido o siseo",
        "Audio de invitados remotos",
        "Flujos de publicacion centrados en voz"
      ],
      "ctaTitle": "Limpiar podcast antes de transcribir",
      "ctaBody": "Usa la herramienta de limpieza antes de generar transcripciones, subtitulos o contenido derivado.",
      "ctaLabel": "Limpiar podcast",
      "faq": [
        {
          "q": "La limpieza sustituye mezcla o mastering?",
          "a": "No. Es sobre todo una reduccion de ruido rapida para facilitar publicacion y transcripcion."
        },
        {
          "q": "Conviene limpiar antes de hacer notas del episodio?",
          "a": "Si el audio tiene ruido, si. La transcripcion sera mas facil de revisar."
        },
        {
          "q": "Se puede limpiar tambien un podcast en video?",
          "a": "Si. Los archivos de video compatibles pasan por el mismo flujo."
        }
      ]
    },
    "clean-interview-audio": {
      "badge": "Guia de limpieza de audio",
      "h1": "Limpiar audio de entrevista",
      "metaTitle": "Limpiar audio de entrevista - Mejorar la voz",
      "metaDescription": "Limpia audio de entrevista con IA. Reduce el ruido de fondo antes de transcribir, citar, editar o publicar.",
      "intro": "La limpieza de entrevistas es util cuando la claridad importa para transcripcion, citas o publicacion y la grabacion tiene ruido.",
      "overviewTitle": "Por que el audio de entrevista suele necesitar limpieza",
      "overviewBody": "Las entrevistas se graban a menudo a distancia o en entornos imperfectos. Una limpieza ayuda a recuperar una voz mas clara antes de transcribir o extraer citas.",
      "stepsTitle": "Como limpiar audio de entrevista",
      "steps": [
        "Sube el archivo de audio o video de la entrevista.",
        "Ejecuta la limpieza para reducir ruido.",
        "Descarga el resultado y continua con transcripcion o revision editorial."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Entrevistas periodisticas o de investigacion",
        "Grabaciones remotas de entrevistas",
        "Limpieza de voz antes de transcribir"
      ],
      "ctaTitle": "Mejorar la claridad de una entrevista",
      "ctaBody": "Usa la herramienta de limpieza antes de convertir la entrevista en texto, notas, captions o contenido publicable.",
      "ctaLabel": "Limpiar entrevista",
      "faq": [
        {
          "q": "La limpieza ayuda a la transcripcion?",
          "a": "Si. En archivos ruidosos suele facilitar la revision y publicacion."
        },
        {
          "q": "Se puede limpiar un video de entrevista sin extraer audio?",
          "a": "Si. Los archivos compatibles van directo al mismo flujo."
        },
        {
          "q": "Es util para trabajos basados en citas?",
          "a": "Si. Una voz mas clara ayuda a encontrar, verificar y reutilizar citas."
        }
      ]
    },
    "voice-recording-noise-reduction": {
      "badge": "Guia de limpieza de audio",
      "h1": "Reducir ruido en una grabacion de voz",
      "metaTitle": "Reducir ruido en una grabacion de voz",
      "metaDescription": "Reduce ruido en grabaciones de voz con IA. Limpia notas de voz, memos, reuniones e entrevistas antes de usarlas.",
      "intro": "La reduccion de ruido en grabaciones de voz es util cuando el archivo contiene sobre todo habla y quieres una version mas clara para transcribir o compartir.",
      "overviewTitle": "Por que la claridad de la voz cambia todo",
      "overviewBody": "Cuanto mas clara es la voz, mas facil resulta escuchar, resumir, transcribir, subtitular o compartir la grabacion. Este flujo es especialmente util para notas de voz y grabaciones de campo.",
      "stepsTitle": "Como reducir ruido en grabaciones de voz",
      "steps": [
        "Sube la grabacion de voz.",
        "Ejecuta la limpieza para reducir el ruido de fondo habitual.",
        "Usa el archivo limpio para transcripcion, notas o publicacion."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Notas de voz y memos",
        "Grabaciones de campo centradas en la voz",
        "Capturas de reuniones o entrevistas"
      ],
      "ctaTitle": "Limpiar una grabacion de voz en un paso",
      "ctaBody": "Usa la herramienta de limpieza cuando la meta principal sea conseguir una voz mas clara antes del resto del flujo.",
      "ctaLabel": "Reducir ruido de voz",
      "faq": [
        {
          "q": "Esto sirve para notas de voz del movil?",
          "a": "Si. Es uno de los casos de uso mas claros para este tipo de limpieza."
        },
        {
          "q": "Conviene limpiar antes de convertir a texto?",
          "a": "Si, sobre todo si hay ruido ambiente o interferencias."
        },
        {
          "q": "Se puede usar con memos cortos?",
          "a": "Si. Los mensajes de voz cortos suelen ser de los flujos mas rapidos."
        }
      ]
    },
    "turboscribe-alternative": {
      "badge": "Guia de alternativa competitiva",
      "h1": "Alternativa a TurboScribe",
      "metaTitle": "Alternativa a TurboScribe - Transcripcion y subtitulos IA",
      "metaDescription": "Buscas una alternativa a TurboScribe? Compara OnlineMediaTools y TurboScribe en transcripcion, subtitulos, limpieza de audio y preparacion multimedia.",
      "intro": "Las busquedas alternativa a TurboScribe suelen venir de usuarios que quieren un flujo mas ligero, mas orientado a utilidades multimedia, o una caja de herramientas mas amplia alrededor de la transcripcion.",
      "overviewTitle": "Por que buscar una alternativa a TurboScribe",
      "overviewBody": "TurboScribe es fuerte cuando la transcripcion es el centro del proceso. Quienes siguen comparando suelen buscar mas utilidades alrededor: subtitulos, traduccion, limpieza de audio y preparacion final en el mismo entorno.",
      "stepsTitle": "Como evaluar una alternativa a TurboScribe",
      "steps": [
        "Haz una lista de las tareas reales de tu flujo alrededor de la transcripcion.",
        "Compara como cada producto gestiona subtitulos, traduccion, limpieza y entrega final.",
        "Prueba ambos con una grabacion real antes de decidir un cambio."
      ],
      "bestForTitle": "Mejor para",
      "bestFor": [
        "Equipos que necesitan transcripcion mas subtitulos y limpieza en un mismo flujo",
        "Creadores que convierten un media fuente en varios entregables",
        "Usuarios que prefieren una caja de herramientas flexible alrededor de la voz"
      ],
      "whatYouGetTitle": "Por que algunos equipos eligen OnlineMediaTools",
      "whatYouGet": [
        "Un flujo mas amplio con transcripcion, subtitulos, traduccion y limpieza de audio",
        "Herramientas orientadas a tareas para pasar del archivo al entregable mas rapido",
        "Un enfoque de caja de herramientas mas ligero que un producto centrado solo en transcripcion"
      ],
      "beforeYouStartTitle": "Que comparar antes de cambiar",
      "beforeYouStart": [
        "La frecuencia con la que necesitas subtitulos o traduccion",
        "El papel de la limpieza de audio en tu flujo real",
        "La diferencia entre un producto centrado en transcripcion y una caja de herramientas multimedia"
      ],
      "comparisonTitle": "OnlineMediaTools vs TurboScribe de un vistazo",
      "comparisonRows": [
        {
          "label": "Enfoque principal",
          "omt": "Transcripcion, subtitulos, limpieza y preparacion multimedia en una sola caja de herramientas",
          "competitor": "Producto dedicado a transcripcion IA con un posicionamiento mas centrado en la transcripcion",
          "takeaway": "Elige TurboScribe si la transcripcion lo es todo en tu flujo. Elige OnlineMediaTools si la transcripcion es solo una etapa."
        },
        {
          "label": "Flujo de subtitulos",
          "omt": "Paginas y herramientas centradas en generar y traducir subtitulos",
          "competitor": "Muy bueno para producir transcripciones y captions, pero con un marco mas de transcripcion",
          "takeaway": "OnlineMediaTools encaja mejor cuando los subtitulos son una salida central."
        },
        {
          "label": "Preparacion de audio",
          "omt": "Limpieza de ruido antes de transcribir o subtitular",
          "competitor": "Mas centrado en el resultado de la transcripcion que en utilidades de limpieza multimedia",
          "takeaway": "Si limpiar antes de transcribir importa, OnlineMediaTools ofrece un camino mas directo."
        },
        {
          "label": "Flujo de publicacion",
          "omt": "Util para encadenar transcripcion, subtitulos, traduccion y preparacion de entrega",
          "competitor": "Util cuando quieres sobre todo una experiencia dedicada a la transcripcion",
          "takeaway": "La mejor opcion depende de la amplitud real de tu cadena de produccion."
        },
        {
          "label": "Tipo de usuario",
          "omt": "Creadores, equipos pequenos y operaciones que quieren utilidades multimedia flexibles",
          "competitor": "Equipos que quieren un producto mas especializado en torno a la transcripcion",
          "takeaway": "TurboScribe es mas especializado en transcripcion. OnlineMediaTools es mas amplio alrededor del archivo multimedia."
        }
      ],
      "fitTitle": "Que herramienta elegir segun tu caso",
      "fitCards": [
        {
          "title": "Elige OnlineMediaTools si...",
          "items": [
            "Necesitas transcripcion, subtitulos, traduccion y limpieza de audio en el mismo lugar.",
            "Publicas videos, podcasts o clips y necesitas varias salidas alrededor del archivo.",
            "Prefieres herramientas rapidas orientadas a ejecutar tareas y no solo una interfaz de transcripcion."
          ]
        },
        {
          "title": "Elige TurboScribe si...",
          "items": [
            "Quieres una experiencia mas dedicada a la transcripcion.",
            "Tu necesidad principal es el transcript y no las utilidades multimedia de alrededor.",
            "La produccion de transcripciones largas es el centro real de tu uso."
          ]
        }
      ],
      "ctaTitle": "Probar el flujo multimedia mas amplio",
      "ctaBody": "Si tu transcripcion suele terminar en subtitulos, traduccion o limpieza, prueba OnlineMediaTools con una grabacion real.",
      "ctaLabel": "Probar transcripcion IA",
      "faq": [
        {
          "q": "OnlineMediaTools es mejor que TurboScribe para todos los casos?",
          "a": "No. TurboScribe sigue siendo mas fuerte si quieres un producto muy centrado en transcripcion. OnlineMediaTools es mas amplio alrededor del flujo multimedia."
        },
        {
          "q": "Quien deberia plantearse cambiar desde TurboScribe?",
          "a": "Usuarios que tambien necesitan generacion de subtitulos, traduccion o limpieza de audio dentro del mismo flujo."
        },
        {
          "q": "Se puede usar OnlineMediaTools si la necesidad principal es subtitular?",
          "a": "Si. De hecho es una de las diferencias mas claras del producto."
        }
      ]
    }
  }
};

export const TOOL_TO_GUIDE_MAP: Record<string, string[]> = {
  'transcribe-audio': ['mp3-to-text', 'mp4-to-text', 'video-to-text', 'audio-to-text', 'podcast-transcription', 'meeting-transcription', 'turboscribe-alternative'],
  'auto-subtitle': ['subtitle-generator', 'srt-generator', 'youtube-subtitle-generator', 'translate-srt', 'turboscribe-alternative'],
  'translate-subtitles': ['translate-srt', 'subtitle-generator', 'youtube-subtitle-generator', 'turboscribe-alternative'],
  'clean-audio': ['remove-background-noise-from-audio', 'clean-podcast-audio', 'clean-interview-audio', 'voice-recording-noise-reduction'],
};

export function getSeoClusterLocalizedSlug(slug: string, locale: Locale) {
  if (locale === 'en') return slug;
  return SEO_CLUSTER_LOCALIZED_SLUGS[locale][slug] || slug;
}

export function resolveSeoClusterSlug(pathSlug: string, locale: Locale) {
  const direct = SEO_CLUSTER_PAGES.find(page => page.slug === pathSlug);
  if (direct) return direct.slug;
  if (locale === 'en') return undefined;
  const localized = Object.entries(SEO_CLUSTER_LOCALIZED_SLUGS[locale]).find(([, value]) => value === pathSlug);
  return localized?.[0];
}

export function getSeoClusterPath(slug: string, locale: Locale) {
  return `/${getSeoClusterLocalizedSlug(slug, locale)}`;
}

function languageAlternates(slug: string) {
  return {
    en: absoluteUrl(getSeoClusterPath(slug, 'en'), 'en'),
    fr: absoluteUrl(getSeoClusterPath(slug, 'fr'), 'fr'),
    es: absoluteUrl(getSeoClusterPath(slug, 'es'), 'es'),
    'x-default': absoluteUrl(getSeoClusterPath(slug, 'en'), 'en'),
  };
}

export function getSeoClusterBySlug(slug: string, locale: Locale = 'en') {
  const resolvedSlug = resolveSeoClusterSlug(slug, locale) || slug;
  const page = SEO_CLUSTER_PAGES.find(item => item.slug === resolvedSlug);
  if (!page) return undefined;
  if (locale === 'en') return page;
  const overrides = LOCALIZED_SEO_CLUSTER_OVERRIDES[locale]?.[resolvedSlug];
  return overrides ? { ...page, ...overrides } : page;
}

export function getSeoClusterSlugs() {
  return SEO_CLUSTER_PAGES.map(page => page.slug);
}

export function getSeoClusterLocalizedSlugs(locale: Locale) {
  return getSeoClusterSlugs().map(slug => getSeoClusterLocalizedSlug(slug, locale));
}

export function getSeoClustersBySlugs(slugs: string[], locale: Locale = 'en') {
  return slugs.map(slug => getSeoClusterBySlug(slug, locale)).filter(Boolean) as SeoClusterPage[];
}

export function buildSeoClusterMetadata(slug: string, locale: Locale = 'en') {
  const resolvedSlug = resolveSeoClusterSlug(slug, locale) || slug;
  const page = getSeoClusterBySlug(resolvedSlug, locale);
  if (!page) return {};
  const url = absoluteUrl(getSeoClusterPath(resolvedSlug, locale), locale);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates(resolvedSlug),
    },
    openGraph: {
      title: `${page.metaTitle} | ${SITE_NAME}`,
      description: page.metaDescription,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: OPEN_GRAPH_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | ${SITE_NAME}`,
      description: page.metaDescription,
    },
  };
}
