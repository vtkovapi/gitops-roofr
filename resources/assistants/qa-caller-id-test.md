---
name: QA - Caller ID Test
backgroundSound: off
endCallMessage: Goodbye!
firstMessage: "Hi! You're calling from {{ customer.number | default: '+15101234567' }}. Is there anything else you'd like to know?"
maxDurationSeconds: 120
model:
  model: gpt-4.1
  provider: openai
  temperature: 0
silenceTimeoutSeconds: 30
transcriber:
  language: en
  model: nova-3
  numerals: true
  provider: deepgram
voice:
  enableSsmlParsing: true
  model: eleven_turbo_v2
  provider: 11labs
  similarityBoost: 0.75
  speed: 1.1
  stability: 0.7
  voiceId: NHRgOEwqx5WZNClv5sat
---

You are a simple test assistant. Your job is to confirm the caller's phone number and answer any basic questions.

The caller's phone number is: {{ customer.number | default: '+15101234567' }}

Keep responses brief and friendly.
