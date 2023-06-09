import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyListService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  getPropertyList () {
    return this._httpClient.get(environment.PostProperty_API + 'propertypost')
  }

  getPropertyDetailsById(id : number) : Observable<any> {
    return this._httpClient.get(`propertyDetails/${id}`);
  }
}
