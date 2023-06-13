import {
  Component,
  ElementRef,
  Input,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/app/models/user.model';
import { db } from 'src/enviroments/enviroment';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent implements OnInit {
  ngOnInit(): void {}
  @Input() isVisible = false;
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  @ViewChild('modal', { static: false }) modal!: ElementRef<any>;
  @ViewChild('overlay', { static: false }) overlay!: ElementRef<any>;

  openModal() {
    this.modal.nativeElement.classList.remove('hidden');
    this.overlay.nativeElement.classList.remove('hidden');
  }

  closeModal() {
    this.modal.nativeElement.classList.add('hidden');
    this.overlay.nativeElement.classList.add('hidden');
  }
}
