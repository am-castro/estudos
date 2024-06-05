import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  template: `
  <div class="p-6">
    <h1 class="text-center">{{data.title}}</h1>
    <p class="text-center py-3 w-full">{{data.message}}</p>
    <div class="w-full flex justify-between items-center">
      <button mat-button color="primary" class="bg-orange-400" [mat-dialog-close]="true">Sim</button>
      <button mat-button [mat-dialog-close]="false">Não</button>
    </div>
  </div>
  `,
  styleUrl: './confirmation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
