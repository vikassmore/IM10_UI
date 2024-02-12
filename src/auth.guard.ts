// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from './app/shared/services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole =this.tokenStorage.getUser().roleId;
debugger
    if (userRole) {
      if (route.data.allowedRoles.includes(userRole)) {
        return true;
      } else {
        // Redirect to login if user not have access to page
        // this.router.navigate(['/login']);
        return false;
      }
    }
    // Redirect to login if user not authenticated
    this.router.navigate(['/login']);
    return false;
  }
}
