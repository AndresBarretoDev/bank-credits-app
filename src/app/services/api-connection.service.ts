import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  
  private API_URL = 'https://cms.qailumno.com/servicios';


  constructor(private http:HttpClient) { }
  getNews(){
    return this.http.get(`${this.API_URL}/noticias`)
  }
  getPrograms(){
    return this.http.get(`${this.API_URL}/programas`)
  }
  saveRegister(params){
    const { program } = params;
    const objTemp = {
      ...params, 
      program:program.toString()
    }
    return this.http.post(`${this.API_URL}/registro`,objTemp)
  }
}
