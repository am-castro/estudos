import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreCardComponent } from '../stores-card/store-card.component';
import { StoreService } from '../../../../../shared/providers/services/store.service';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [
    CommonModule,
    StoreCardComponent
  ],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresComponent {
  storeItems = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15fMzzurgJSQYnccfGdQj9DOoyU9IM87FPQsdxfvS9w&s',
      description: 'G3 Gamer Store',
      type: 'Informática',
      price: 10.00,
      quantity: 0,
      stars: 4
    },{
      id: 2,
      image: 'https://m.media-amazon.com/images/G/32/social_share/amazon_logo._CB633267191_.png',
      description: 'Amazon',
      type: 'Informática',
      price: 20.00,
      quantity: 0,
      stars: 5
    }
  ];

  constructor(
    private _store: StoreService
  ) {
    this.changeProductsQuantity();
  }

  private changeProductsQuantity(): void {
    const products = this._store.getProductsOnCart();
    if (products && products.length > 0) {
      this.storeItems = this.storeItems.map((store) => {
        const productExist = products.find((p: any) => p.id === store.id);
        if (productExist) {
          store.quantity = productExist.quantity;
        }
        return store;
      });
    }
  }
}
