import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SpiderlyClass } from '../../entities/entities';

@Injectable({
    providedIn: 'root'
})
export class PlaygroundSidebarMenuService {
    private menuSource = new Subject<SpiderlyClass>();

    menuSource$ = this.menuSource.asObservable();

    onMenuStateChange(event: SpiderlyClass) {
        this.menuSource.next(event);
    }
}