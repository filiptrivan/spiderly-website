import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGeneratedService } from './api.service.generated';
import { ConfigService } from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService extends ApiGeneratedService {

    constructor(
        protected override http: HttpClient,
        protected override config: ConfigService,
    ) {
        super(http, config);
    }

}
