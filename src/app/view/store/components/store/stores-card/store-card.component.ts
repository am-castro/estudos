import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../../../shared/components/confirmation/confirmation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreService } from '../../../../../shared/providers/services/store.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-store-card',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ConfirmationComponent,
    RouterModule,
    MatTooltipModule
  ],
  templateUrl: './store-card.component.html',
  styleUrl: './store-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreCardComponent implements OnInit {
  @Input() store: any;
  
  public stars = [true, true, true, true, false];

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private _store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateStars(this.store.stars);
  }

  public validateStars(stars: number): void {
    this.stars = this.stars.map((star, index) => index < stars);
  }

  public getStarsQuantity(): number {
    return this.stars.filter((star: boolean) => star === true).length;
  }

  public onAddProduct(product: any) {
    const dialogRef = this.dialog.open(ConfirmationComponent,{
      data: {title: "Adicionar produto", message: "Deseja adicionar o produto ao carrinho?"},
      width: '400px',
      maxHeight: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.quantity += 1;
        this._store.addProductOnCart(product);
        this.cd.detectChanges();
      }
    });
  }

  public redirectTo(): void {
    const description = this.store.description.replace(/ /g, '-');
    this.router.navigate(['/stores', 'profile', description], { queryParams: { sid: this.store.id } });
  }

  public changeQuantity(change: '+' | '-'): void {
    const quantity = change === '+' ? 1 : -1;
    if (this.store.quantity === 0 && quantity === -1) return;
    this.store.quantity += quantity;
    if (change === '-') this._store.removeProductOnCart(this.store);
    if (change === '+') this._store.addProductOnCart(this.store);
  }
}
