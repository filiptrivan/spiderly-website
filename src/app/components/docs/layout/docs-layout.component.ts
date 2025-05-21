import { Component, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, of, Subscription, switchMap } from 'rxjs';
import { DocsAppTopBarComponent } from './topbar/docs-topbar.component';
import { DocsLayoutService } from './docs-layout.service';
import { CommonModule } from '@angular/common';
import { DocsSidebarMenuComponent, DocsSpiderlyMenuItem } from './sidebar/docs-sidebar-menu.component';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { capitalizeFirstChar } from '../../playground/web-app/entity-details/services/helper-functions';
import { GettingStartedComponent } from "../getting-started/getting-started.component";
import { AttributesDocsComponent } from "../attributes/attributes.component";

@Component({
    selector: 'app-docs-layout',
    templateUrl: './docs-layout.component.html',
    styleUrl: './docs-layout.component.scss',
    imports: [
    CommonModule,
    RouterModule,
    DocsAppTopBarComponent,
    DocsSidebarMenuComponent,
    GettingStartedComponent,
    AttributesDocsComponent
]
})
export class DocsLayoutComponent implements OnDestroy {
    @Input() menu: DocsSpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    @ViewChild(DocsSidebarMenuComponent) appSidebar!: DocsSidebarMenuComponent;

    @ViewChild(DocsAppTopBarComponent) appTopbar!: DocsAppTopBarComponent;

    isGettingStartedPage: boolean;
    isAttributesDocsPage: boolean;

    constructor(
        protected layoutService: DocsLayoutService,
        protected renderer: Renderer2,
        protected router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private title: Title,
        private meta: Meta,
        private sanitizer: DomSanitizer,
    ) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(
                        this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                        this.appSidebar.el.nativeElement.contains(event.target) ||
                        this.appTopbar.menubutton.nativeElement.isSameNode(event.target) ||
                        this.appTopbar.menubutton.nativeElement.contains(event.target)
                    );

                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.hideMenu();
            });
    }

    ngOnInit() {
        const slug = this.route.snapshot.url[this.route.snapshot.url.length - 1]?.path ?? '';

        const metaDescriptions: Record<string, string> = {
            'getting-started': `Discover Spiderly prerequisites, installation steps, and structure setup using Spiderly.CLI. Start building fast, scalable web apps with ease.`,
            'attributes': `Learn how to use Spiderly Attributes on EF Core entities to auto-generate CRUD logic, auth, validations, mappings, and UI for your web apps.`,
        };

        if (slug === 'getting-started') {
            this.isGettingStartedPage = true;
        } else if (slug === 'attributes') {
            this.isAttributesDocsPage = true;
        }

        if (metaDescriptions[slug]) {
            this.meta.updateTag({
                name: 'description',
                content: metaDescriptions[slug],
            });
        }

        this.title.setTitle(this.formatTitle(slug));
    }

    formatTitle(slug: string): string {
        return `${capitalizeFirstChar(slug.replace('-', ' '))} | Spiderly Docs`;
    }

    hideMenu() {
        this.layoutService.state.staticMenuMobileActive = false;
        this.layoutService.state.overlayMenuActive = false;

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
    }

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig.menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig.menuMode === 'static',
            'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.layoutConfig.menuMode === 'static',
            'layout-overlay-active': this.layoutService.state.overlayMenuActive,
            'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
            'p-ripple-disabled': true
        }
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}