import { Injectable } from '@angular/core';
import { StorageTypes } from './models/storage-types.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public getItem(key: string): string {
    return this.getStorageByType(StorageTypes.local).getItem(key)
      ? this.getStorageByType(StorageTypes.local).getItem(key)
      : this.getStorageByType(StorageTypes.session).getItem(key);
  }

  public setItem(type: StorageTypes, key: string, value: string): void {
    return this.getStorageByType(type).setItem(key, value);
  }

  public removeItem(key: string): void {
    this.getStorageByType(StorageTypes.local).removeItem(key);
    this.getStorageByType(StorageTypes.session).removeItem(key);
  }

  private getStorageByType(type: string): Storage {
    try {
      if (!localStorage || !sessionStorage) {
        throw new Error('exception');
      }
      this.setSafariPrivateModeWorkaround();
      return type === StorageTypes.local ? localStorage : sessionStorage;
    } catch (error) {
      return sessionStorage;
    }
  }

  private setSafariPrivateModeWorkaround(): void {
    localStorage.setItem('storageTest', 'tested');
    localStorage.removeItem('storageTest');
  }

}
