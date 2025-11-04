import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ConfigBaseService } from 'spiderly';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends ConfigBaseService
{
    override production: boolean = environment.production;
    override apiUrl: string = environment.apiUrl;
    override frontendUrl: string = environment.frontendUrl;
    override GoogleClientId: string = environment.GoogleClientId;
    override companyName: string = 'Spiderly';
    override loginSlug: string = '/';

    /* URLs */
    administrationSlug: string = 'administration';

    constructor(
    ) {
        super();
    }
}
