import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    async get(url: string) {
        try {
            const resp = await this.http.get(url).toPromise();
            return resp;
        } catch (e) {
            return null;
        }
    }


    async post(url: string, data?: any) {
        try {
            const resp = await this.http.post(url, data, {
                headers: {},
            }).toPromise();
            return resp;
        } catch (e) {
            return null;
        }
    }
    // checkusernameandpassword(u: string, p: string) {
    //     if (u == "abcdef" && p == "abcd123456") {
    //         localStorage.setItem('username', u);
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
}
