import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameCheckService {
  private allowedNames: string[] = 
  ['J261024L'];

  constructor() { }

  isNameAllowed(name: string): boolean {
    return this.allowedNames.includes(name);
  }
}
