// src/services/VoiceService.ts
declare global {
    interface Window {
      SpeechRecognition: typeof SpeechRecognition;
      webkitSpeechRecognition: typeof SpeechRecognition;
    }
  }
  
  class VoiceService {
    private recognition: SpeechRecognition | null = null;
    private isListening = false;
  
    constructor() {
      if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        console.error("Speech Recognition not supported in this browser.");
        return;
      }
  
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = "en-US";
    }
  
    async listen(): Promise<string> {
      return new Promise((resolve, reject) => {
        if (!this.recognition) {
          reject("Speech recognition not available");
          return;
        }
  
        if (this.isListening) {
          reject("Already listening");
          return;
        }
  
        this.recognition.start();
        this.isListening = true;
  
        this.recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript.trim();
          this.stop();
          resolve(transcript);
        };
  
        this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          this.stop();
          reject(event.error);
        };
  
        this.recognition.onend = () => {
          this.isListening = false;
        };
      });
    }
  
    stop(): void {
      if (this.recognition && this.isListening) {
        this.recognition.stop();
        this.isListening = false;
      }
    }
  
    async speak(text: string): Promise<void> {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        
        return new Promise((resolve) => {
          utterance.onend = () => resolve();
          window.speechSynthesis.speak(utterance);
        });
      }
      return Promise.resolve();
    }
  }
  
  export default new VoiceService();