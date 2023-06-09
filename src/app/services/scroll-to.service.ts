import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollToService {
  constructor() {}

  private scrollToSource = new Subject<string>();
  scrollTo$ = this.scrollToSource.asObservable();

  scrollTo(section: string) {
    this.scrollToSource.next(section);
  }
}
