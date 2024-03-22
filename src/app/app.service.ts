import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category, Product } from './app.models';
import { environment } from 'src/environments/environment';
import { EnvironmentUrlService } from './services/env-url';

export class Data {
  constructor() { }
}

@Injectable()
export class AppService {
  public Data = new Data(
  )

  public url = environment.url + '/assets/data/';

  constructor(public http: HttpClient, public snackBar: MatSnackBar, private _envUrl: EnvironmentUrlService) { }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  ///SuperAdmin///

  //Adduser
  public AddUser = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }

  //Edituser
  public edituser = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }

  //getuserbyid
  public getById = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  //getalluserlist
  public getUserList = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  //deleteuser
  public deleteuser = (route: string, body: any) => {
    return this.http.delete(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  //adduseplayer
  public AddUserPlayer = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
  //Getuserplayerdetails
  public getAllPlayerDetail = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

    //Edituser
    public edituserplayer = (route: string, body: any) => {
      return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    }

  //GetAllUserPlayer
  public GetAllUserPlayer = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  public getfilteruserId = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  ///Content Admin///

  public getContentList = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public getcontentList = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public editplayer = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }


  public getAllRoles = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  public getAllCategory = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public getAllSports = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public getsubAllCategory = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  public getsubAllcontenttype = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  //deleteuserplayer
  public deleteuserplayer = (route: string, body: any) => {
    return this.http.delete(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  //ChangePassword
  public changepassword = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }

  public getUserId = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  //getuserbyid
  public getPlayerById = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  //AddContent
  public AddContent = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
  //Editcontent
  public editcontent = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }

  //getcontentbyid
  public getContentById = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  //getcontentbyid
  public getContentByPlayerId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  //GetAllContentUpdate
  public GetAllContentUpdate = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  //AddContentUpdate
  public AddContentUpdate = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
  //getContentUpdateBycontentIdId
  public getContentUpdateBycontentIdId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  ///QAAdmin

  //ApproveContent
  public ApproveContent = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }


  //ApproveAdvContent
  public ApproveAdvContent = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }


  //Editcontent
  public ApproveUpdateContent = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }


  ///Salesperson admin

  //getcontentbyid
  public getAdvContentByPlayerId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

  public getsubAllcountry = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  public getStateById = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }
  public getCityById = (route: string) => {
    return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  //     //AddContent
  // public AddAdvContent = (route: string, body: any) => {
  //   return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  // }

  public AddAdvContent = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
  //getcontentbyid
  public getAdvContentById = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

    //Edituser
    public denyapprovecontent = (route: string, body: any) => {
      return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    }

    public Addlisting = (route: string, body: any) => {
      return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    }
      //getcontentbyid
  public getAdvtContentByPlayerId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }
  public getPlayerDetailsById = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }
    //getContentUpdateByPlayerId
    public getContentUpdateByPlayerId = (path, serviceId) => {
      return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
    }
    //getPlatyerbyid
  public getPlatyerbyid = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }
  //getCommentByPlayerId
  public getCommentByPlayerId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

    //  //Edituser
    //  public AddComment = (route: string, body: any) => {
    //   return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    // }
    public AddComment = (route: string, body: any) => {
      return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    }
///get error / issue log list
    public getallerrorissuelog = (route: string) => {
      return this.http.get<any>(this.createCompleteRoute(route, this._envUrl.urlAddress));
    }

      //AddContentUpdate
  public AddCampaign = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
    
  ///Endorsment admin

    //getcontentbyid
    public getCompanyPlayerId = (path, serviceId) => {
      return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
    }

    public AddPlayerEndorsment = (route: string, body: any) => {
      return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
    }
      //getPlayerEndorsmentPlayerId
  public getPlayerEndorsmentPlayerId = (path, serviceId) => {
    return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
  }

    //getPlayerEndorsementById
    public getPlayerEndorsementById = (path, serviceId) => {
      return this.http.get<any>(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
    }

      //editPlayerEndorsement
  public editPlayerEndorsement = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
  }
} 