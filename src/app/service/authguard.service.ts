import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class Authguard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let local = localStorage.getItem('login');
        if (local) { return true; }
        else {
            alert('bitch')
            this.router.navigate(['/login'])
            return false;
        }
    }

}
