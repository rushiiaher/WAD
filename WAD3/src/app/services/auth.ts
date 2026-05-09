import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSignal = signal<any>(null);

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser));
    }
  }

  get currentUser() {
    return this.currentUserSignal();
  }

  register(userData: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === userData.email);
    if (exists) {
      return false; // User already exists
    }
    
    // Add new user with a mock token and id
    const newUser = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
      token: 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9)
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Log them in immediately
    this.login(userData.email, userData.password);
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      // Don't store the password in the current user session
      const { password, ...userWithoutPassword } = user;
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      this.currentUserSignal.set(userWithoutPassword);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSignal.set(null);
  }

  isAuthenticated(): boolean {
    return this.currentUserSignal() !== null;
  }
}
