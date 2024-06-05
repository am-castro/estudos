import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StoreCardComponent } from '../stores-card/store-card.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilterComponent } from '../../../../../shared/components/filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../../product/product-card/product-card.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    StoreCardComponent,
    FilterComponent,
    MatButtonModule,
    ProductCardComponent,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent{
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

  public icons = {noProduct: faXmarkCircle}
  products = [];
  public profileName = "";
  constructor(
    // private _store: StoreService
    private ac: ActivatedRoute
  ) {
    this.profileName = this.ac.snapshot.params['profileName'].split('-').join(' ');
  }

  searchBy(search: any): void {
    console.log(search)
  }
}
