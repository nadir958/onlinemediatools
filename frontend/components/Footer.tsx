import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background:'#0c3a96'}} className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-lg font-black text-white">OnlineMedia<span style={{color:'#4ade80'}}>Tools</span></span>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">Free online video &amp; audio tools. Convert, compress, extract, and optimize your media files.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Video Tools</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {[['WebM to MP4','/webm-to-mp4'],['MOV to MP4','/mov-to-mp4'],['Compress Video','/compress-video'],['Trim Video','/trim-video'],['Video Converter','/video-converter']].map(([l,h]) => (
              <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Audio Tools</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {[['MP4 to MP3','/mp4-to-mp3'],['Video to MP3','/video-to-mp3'],['Extract Audio','/extract-audio'],['Remove Audio','/remove-audio-from-video'],['Audio Converter','/audio-converter']].map(([l,h]) => (
              <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Legal</h3>
          <p className="text-xs text-white/50 leading-relaxed">By using this service, you confirm that you own or have permission to process all uploaded files. All uploads are automatically deleted after 2 hours.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} OnlineMediaTools — Free Media Conversion Tools
      </div>
    </footer>
  );
}
