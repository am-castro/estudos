import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StoreService } from '../../providers/services/store.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightToBracket, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit{
  private quantityOnCart = 0;
  public icons = { logon: faRightToBracket, user: faUserCircle, search: faSearch, chat: faComment };

  get totalQuantityOnCart(): number {
    return this.quantityOnCart;
  }
  constructor(
    private _store: StoreService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this._store.quantityOnCart().subscribe({
      next: (data: any) => {
        this.quantityOnCart = data;
        this.cd.detectChanges();
      }
    });
  }
}
