
export interface Instructor {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  objectPosition?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
