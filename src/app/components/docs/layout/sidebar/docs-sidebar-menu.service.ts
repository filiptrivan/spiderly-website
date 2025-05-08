import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {
    private menuSource = new Subject();

    menuSource$ = this.menuSource.asObservable();

    onMenuStateChange(event) {
        this.menuSource.next(event);
    }
}