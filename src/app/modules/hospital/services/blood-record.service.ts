import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBloodRecordDTO } from '../model/createBloodRecord.modleDTO';

@Injectable({
    providedIn: 'root'
})
export class BloodRecordService {
    apiHost: string = 'http://localhost:5000'
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'})

    constructor(private http: HttpClient) { }
}