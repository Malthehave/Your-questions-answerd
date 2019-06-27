'''
This is Project-Spot
The idea is that you sit down and having a normal conversation.
At some point in your conversation you will probably come to an unagreement or want to know thew answer to a simple question.
Examples include info about book availability at library, math problem, president of Uganda or the price of an iPad.
The program will automatacly record audio files of your conversation and use Wit.ai to gather information about your problem
The program will then give you an answer based on the DuckDuckGo Answer API.

(
    Thoughts:
    Maybe this should just act as an API for a mobile device.
    The audio recording part would be done by the phone

)
'''
from wit import Wit


print("Project-Spot © Malthe Have Musaeus")

# Wit.ai Server Access Token
client = Wit('KDNTFQX5RKNOIKPNN2HTTJPKGROCFH2V')

# We set our question in JSON response from Wit.ai:
# resp = client.message('What is 5€')
# print(str(resp))

# Declare the resp var
resp = None

# Read the audio file and get a response from Wit.ai
with open('audio_files/frankfurt.wav', 'rb') as f:
  resp = client.speech(f, None, {'Content-Type': 'audio/wav'})

# prints out 'value' from resp
# print(resp['entities']['amount_of_money'])

# We need to know what entiti it is
for item in resp['entities']:
    entiti = item
    # print(item)
# print(resp['entities'][entiti][0])
print(resp['entities'][entiti][0]['value'])


