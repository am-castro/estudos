import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    MatDatepickerModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Output() filter = new EventEmitter();

  public filterFG = new FormGroup({
    // type:       new FormControl({value: '', disabled: false}),
    sendFree:   new FormControl({value: false, disabled: false}),
    used:       new FormControl({value: false, disabled: false}),
    tech:       new FormControl({value: false, disabled: false}),
    startPrice: new FormControl({value: 0, disabled: false}),
    endPrice:   new FormControl({value: 200, disabled: false}),
    categories: new FormControl({value: [], disabled: false}),
    date:       new FormControl({value: new Date(), disabled: false}),
  });

  public categories = [
    { value: 'Bolo', viewValue: 'Computadores' },
    { value: 'Torta', viewValue: 'Notebooks' },
    { value: 'Doce', viewValue: 'Celulares' },
    { value: 'Salgado', viewValue: 'Mouses' },
    { value: 'Salgado', viewValue: 'Teclados' },
  ];

  constructor() {
    this.filterFG.valueChanges.subscribe((value) => {
      this.filter.emit(this.filterFG.value);
    });
  }
}
