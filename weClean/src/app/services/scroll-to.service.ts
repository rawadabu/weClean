import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
  private targetSection = new BehaviorSubject<string>('');
  public targetSection$ = this.targetSection.asObservable();

  constructor() {}

  public scrollToSection(sectionId: string): void {
    this.targetSection.next(sectionId);
  }
}
