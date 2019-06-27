import speech_recognition as sr

print("Running Python speech_recognition version:", sr.__version__)


r = sr.Recognizer()


harvard = sr.AudioFile('audio_files/frankfurt.wav')
with harvard as source:
    audio = r.record(source) # Use duration=4 argument to only capture the first 4 seconds
print(audio)

print(r.recognize_google(audio))