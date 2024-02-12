import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { UserEditRegistration, UserForRegistration } from 'src/app/interfaces/user/UserForRegistration.model';
import { RegistrationResponse } from 'src/app/interfaces/Responses/RegistrationResponse.model';
import { UserForAuthenticationDto } from 'src/app/interfaces/user/UserForAuthenticationDto.model';
import { AuthResponseDto } from 'src/app/interfaces/Responses/AuthResponseDto.model';
import { Subject } from 'rxjs/internal/Subject';
import { UserForgotpassword } from 'src/app/interfaces/user/UserForgotpassword.model';
import { ForgotResponse } from 'src/app/interfaces/Responses/ForgotResponse.model';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { IncidentEditRegistration } from 'src/app/interfaces/Incident/IncidentForRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private formData: FormData = new FormData()
  constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService, private token: TokenStorageService) { }





//Login
private createCompleteRoute = (route: string, envAddress: string) => {
  return `${envAddress}/${route}`;
}


//LoginUser
public loginUser = (route: string, body: UserForAuthenticationDto) => {
  return this._http.post<AuthResponseDto>(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'json' });
}

//ForgotPassword
public forgotUser = (route: string, body: any) => {
  return this._http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body,{ responseType: 'text' });
}

public addUser = (route: string, body: any) => {
  return this._http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
}


  getUserId(): string {
    // Retrieve the userId from the session storage or local storage
    return sessionStorage.getItem('userId');
    
  }
  

  //Logoutuser
  public logout = () => {
    this.token.signOut();
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    sessionStorage.clear();
    this.sendAuthStateChangeNotification(false);
  }

  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

}
