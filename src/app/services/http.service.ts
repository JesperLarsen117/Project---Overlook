import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://api.mediehuset.net/overlook/news');
  }
  getRoom(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/rooms/${id}`);
  }
  getCountrys() {
    return this.http.get(`https://api.mediehuset.net/overlook/countries`);
  }
  getCitys(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/cities/by_country/${id}`);
  }
  getCity(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/cities/${id}`);
  }
  getHotel(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/hotels/${id}`);
  }
  gethotels(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/hotels/by_city/${id}`);
  }
  getLogin(loginInfo) {
    return this.http.post('https://api.mediehuset.net/token', loginInfo);
  }
  submitResevation(formData, header) {
    return this.http.post('https://api.mediehuset.net/overlook/reservations', formData, header);
  }
  getResevation(id, header) {
    return this.http.get(`https://api.mediehuset.net/overlook/reservations/list_by_user/${id}`, header);
  }
  deleteResevation(id, header) {
    return this.http.delete(`https://api.mediehuset.net/overlook/reservations/${id}`, header);
  }
}
