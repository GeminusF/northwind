import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProductsByUnitPrice(min:number, max: number){
    this.productService.getProductsByUnitPrice(min, max).subscribe((response) =>{
      this.products = response.data
    })
  }

}
