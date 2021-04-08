import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private router: Router) { }
    postForms($obj: any) {
        let keys = Object.keys($obj);
        let data = new FormData();
        for (let i = 0; i < keys.length; i++) { data.append(keys[i], $obj[keys[i]]); };
        return data;
    }
    postData(_Obj: any) {
    }
    Login(_loginData: any) {
        this.http.get('assets/json/login.json').subscribe((el: any) => {
            let username = el.map(res => { return res.username }).indexOf(_loginData.username) !== -1;
            let password = el.map(res => { return res.password }).indexOf(_loginData.password) !== -1;
            if (username && password) { localStorage.setItem('login', 'OK'); }
            else { localStorage.removeItem('login'); }
            this.router.navigate(['/index']);
        })
    }
}
