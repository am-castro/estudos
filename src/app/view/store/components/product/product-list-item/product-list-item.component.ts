import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from '../../../../../shared/providers/services/store.service';
import { ConfirmationComponent } from '../../../../../shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent  implements OnInit {
  @Input() product: any;
  
  public stars = [true, true, true, true, false];

  constructor(
    private dialog: MatDialog,
    private _store: StoreService
  ) { }

  ngOnInit(): void {
    this.validateStars(this.product.stars);
  }

  public validateStars(stars: number): void {
    this.stars = this.stars.map((star, index) => index < stars);
  }

  public getStarsQuantity(): number {
    return this.stars.filter((star: boolean) => star === true).length;
  }

  public onAddProduct(product: any) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {title: "Adicionar produto", message: "Deseja adicionar o produto ao carrinho?"},
      width: '400px',
      maxHeight: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.product.quantity += 1;
        this._store.addProductOnCart(product);
      }
    });
  }

  public changeQuantity(change: '+' | '-'): void {
    const quantity = change === '+' ? 1 : -1;
    if (this.product.quantity === 0 && quantity === -1) return;
    this.product.quantity += quantity;
    if (change === '-') this._store.removeProductOnCart(this.product);
    if (change === '+') this._store.addProductOnCart(this.product);
  }
}