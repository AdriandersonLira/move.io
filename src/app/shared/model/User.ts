export class User {
  id?: number;
  login: string;
  avatar_url?: string;
  name?: string;
  location?: string;
  created_at?: string;
  updated_at?: string;

  constructor() {
    this.login = '';
  }
}
