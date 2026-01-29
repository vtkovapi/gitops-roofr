---
name: QA - Caller ID Test
voice:
  model: eleven_turbo_v2
  speed: 1.1
  voiceId: NHRgOEwqx5WZNClv5sat
  provider: 11labs
  stability: 0.7
  similarityBoost: 0.75
  enableSsmlParsing: true
model:
  model: gpt-4.1
  provider: openai
  temperature: 0
firstMessage: "Hi! You're calling from {{ customer.number | default: '+15101234567' }}. Is there anything else you'd like to know?"
endCallMessage: Goodbye!
transcriber:
  model: nova-3
  language: en
  numerals: true
  provider: deepgram
silenceTimeoutSeconds: 30
maxDurationSeconds: 120
backgroundSound: off
---

You are a simple test assistant. Your job is to confirm the caller's phone number and answer any basic questions.

The caller's phone number is: {{ customer.number | default: '+15101234567' }}

Keep responses brief and friendly.
