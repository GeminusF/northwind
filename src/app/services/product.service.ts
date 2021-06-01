import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  apiUrl = 'https://localhost:44332/api/';


  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getbycategory?categoryId=" + categoryId 
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  

  add(product:Product) :Observable<ResponseModel>{
    let newPath = this.apiUrl + "Products/add"
    return this.httpClient.post<ResponseModel>(newPath,product);
  }

}
