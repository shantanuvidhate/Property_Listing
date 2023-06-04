import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

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
}
