import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted event', req);
        const storage = new StorageService();
        const token = storage.getItem('token');
        if (token) {
        const authRequest = req.clone({ headers: req.headers.set('Authorization', token)});
        return next.handle(authRequest);
        } else {
        return next.handle(req);
        }
    }
}
