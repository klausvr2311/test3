import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { categories } from './class/categories';


@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(public http:HttpClient) { }

  apiCategories = "https://localhost:44378/api/categories";

  GetCategories():Observable<categories[]>
  {
    return this.http.get<categories[]>(this.apiCategories);
  }
  PostCategories(cate:categories):Observable<categories>
  {
    return this.http.post<categories>(this.apiCategories,cate);
  }
  PutCategories(cate:categories):Observable<categories>
  {
    return this.http.put<categories>(this.apiCategories+`${"/"+cate.CategoryId}`,cate);
  }
  DeleteCategories(id:string):Observable<categories>
  {
    return this.http.delete<categories>(this.apiCategories+`${"/"+id}`);
  }
}
