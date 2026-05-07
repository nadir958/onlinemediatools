import argostranslate.package
import argostranslate.translate
import pysrt
from faster_whisper import WhisperModel

_whisper_model = None


def get_whisper():
    global _whisper_model
    if _whisper_model is None:
        _whisper_model = WhisperModel("base", device="cpu", compute_type="int8")
    return _whisper_model


def format_timestamp(seconds: float) -> str:
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    millis = int((seconds - int(seconds)) * 1000)
    return f"{hours:02}:{minutes:02}:{secs:02},{millis:03}"


def format_vtt_timestamp(seconds: float) -> str:
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    millis = int((seconds - int(seconds)) * 1000)
    return f"{hours:02}:{minutes:02}:{secs:02}.{millis:03}"


def transcribe_audio(file_path: str, output_path: str, out_format: str = "srt", language: str | None = None, task: str = "transcribe"):
    model = get_whisper()
    segments, _info = model.transcribe(file_path, beam_size=5, language=language, task=task)
    segments = list(segments)

    if out_format == "txt":
        with open(output_path, "w", encoding="utf-8") as f:
            for segment in segments:
                f.write(segment.text.strip() + " ")
        return

    if out_format == "vtt":
        with open(output_path, "w", encoding="utf-8") as f:
            f.write("WEBVTT\n\n")
            for i, segment in enumerate(segments, start=1):
                f.write(f"{i}\n")
                f.write(f"{format_vtt_timestamp(segment.start)} --> {format_vtt_timestamp(segment.end)}\n")
                f.write(f"{segment.text.strip()}\n\n")
        return

    with open(output_path, "w", encoding="utf-8") as f:
        for i, segment in enumerate(segments, start=1):
            f.write(f"{i}\n")
            f.write(f"{format_timestamp(segment.start)} --> {format_timestamp(segment.end)}\n")
            f.write(f"{segment.text.strip()}\n\n")


def ensure_argos_package(from_code: str, to_code: str):
    argostranslate.package.update_package_index()
    available_packages = argostranslate.package.get_available_packages()
    package_to_install = next(
        filter(lambda x: x.from_code == from_code and x.to_code == to_code, available_packages),
        None,
    )
    if package_to_install:
        argostranslate.package.install_from_path(package_to_install.download())


def translate_srt(input_srt_path: str, output_srt_path: str, target_lang: str):
    ensure_argos_package("en", target_lang)
    subs = pysrt.open(input_srt_path, encoding="utf-8")
    for sub in subs:
        if sub.text.strip():
            sub.text = argostranslate.translate.translate(sub.text, "en", target_lang)
    subs.save(output_srt_path, encoding="utf-8")
