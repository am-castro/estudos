import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreService } from '../../../../shared/providers/services/store.service';
import { MatButtonModule } from '@angular/material/button';
import { ProductListItemComponent } from '../../../store/components/product/product-list-item/product-list-item.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ProductListItemComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  public productsList: any[] = [];

  constructor(
    private _store: StoreService
  ) {
    this.productsList = this._store.getProductsOnCart();
  }

  public getTotalPrice(): number {
    return this.productsList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
