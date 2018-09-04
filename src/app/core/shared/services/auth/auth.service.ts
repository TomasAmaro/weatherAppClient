import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { StorageTypes } from '../storage/models/storage-types.enum';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoginSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private storage: StorageService) {
    this.isLoginSubject.next(this.isLoggedIn());
  }

  public login(body: any, storageType: StorageTypes): any {
    return this.http.post<any>(`${environment.apiUrl}/user/login`, body)
    .pipe(
      tap(
        (res) => {
          this.setSession(res, storageType);
          this.isLoginSubject.next(true);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  private setSession(token, type: StorageTypes): void {
    if (token) {
      this.storage.setItem(type, 'id_token', token);
    }
  }

  public logout(): void {
    this.storage.removeItem('id_token');
    this.storage.removeItem('expires_at');
    this.isLoginSubject.next(false);
  }

  public isLoggedIn(): boolean {
    const loginStatus: boolean = !!this.getToken();
    this.isLoginSubject.next(loginStatus);
    return loginStatus;
  }

  private getToken(): string {
    return this.storage.getItem('token');
  }

  public isSubjectLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

}
