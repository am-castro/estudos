import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { StoreService } from '../../../../../shared/providers/services/store.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/521991/Desktop-Lenovo-ThinkCentre-M75s-Ryzen-7-5700G-16GB-RAM-256GB-SSD-Windows-Home-11-R90014BO_1709125697_m.jpg',
      description: 'Desktop Lenovo ThinkCentre M75s Ryzen 7-5700G, 16GB RAM, 256GB SSD, Windows Home 11 - R90014BO',
      type: 'Bolo',
      price: 1732.43,
      freeShip: true,
      quantity: 0,
      stars: 0
    },{
      id: 2,
      image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/379053/Computador-Completo-F-cil-Amd-Ryzen-5-5600g-Vega-7-Graphics-16GB-RAM-DDR4-SSD-480GB-Monitor-19-Polegadas-Led-Windows-10-Trial-Preto-Teclado-E-Mouse_1706190494_m.jpg',
      description: 'Computador Completo Fácil Amd Ryzen 5 5600g ,Vega 7 Graphics, 16GB RAM DDR4, SSD 480GB, Monitor 19 Polegadas Led, Windows 10 Trial, Preto, Teclado E Mouse',
      type: 'Bolo',
      price: 7777.77,
      freeShip: false,
      quantity: 0,
      stars: 1
    }
  ];

  constructor(
    private _store: StoreService,
    // private ac: ActivatedRouteSnapshot
  ) {
    // console.log(this.ac.data)
    // console.log("miau")
    this.changeProductsQuantity();
  }

  private changeProductsQuantity(): void {
    const products = this._store.getProductsOnCart();
    if (products && products.length > 0) {
      this.products = this.products.map((product) => {
        const productExist = products.find((p: any) => p.id === product.id);
        if (productExist) {
          product.quantity = productExist.quantity;
        }
        return product;
      });
    }
  }
}
