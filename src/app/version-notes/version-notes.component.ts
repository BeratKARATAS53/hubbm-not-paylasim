import { Component, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-version-notes',
  templateUrl: './version-notes.component.html',
  styleUrls: ['./version-notes.component.scss'],
  standalone: false
})
export class VersionNotesComponent {
  @Output() closeEvent = new EventEmitter<void>();

  constructor(public translationService: TranslationService) {}

  close() {
    this.closeEvent.emit();
  }
}
