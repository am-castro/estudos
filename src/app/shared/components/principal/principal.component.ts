import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../../../view/store/components/product/products/products.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    RouterModule,
    FooterComponent,
    ProductsComponent
  ],
  template: `
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  `,
  styleUrl: './principal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrincipalComponent { }
