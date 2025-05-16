import { Component, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, of, Subscription, switchMap } from 'rxjs';
import { DocsAppTopBarComponent } from './topbar/docs-topbar.component';
import { DocsLayoutService } from './docs-layout.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DocsSidebarMenuComponent, DocsSpiderlyMenuItem } from './sidebar/docs-sidebar-menu.component';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/common';
import { capitalizeFirstChar } from '../../playground/web-app/entity-details/services/helper-functions';

@Component({
    selector: 'app-docs-layout',
    templateUrl: './docs-layout.component.html',
    styleUrl: './docs-layout.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        DocsAppTopBarComponent,
        DocsSidebarMenuComponent,
    ]
})
export class DocsLayoutComponent implements OnDestroy {
    @Input() menu: DocsSpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    @ViewChild(DocsSidebarMenuComponent) appSidebar!: DocsSidebarMenuComponent;

    @ViewChild(DocsAppTopBarComponent) appTopbar!: DocsAppTopBarComponent;

    @ViewChild('HTMLContainer') HTMLContainer!: ElementRef;

    docsHTML: SafeHtml;

    constructor(
        protected layoutService: DocsLayoutService, 
        protected renderer: Renderer2, 
        protected router: Router,
        @Inject(PLATFORM_ID) private platformId: Object,
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
        this.route.paramMap
            .pipe(
                switchMap((params) => {
                    const slug = params.get('slug')!;
                    // return of('<div>test</div>');
                    return this.http.get(`assets/docs/${slug}.html`, { responseType: 'text' });
                })
            )
            .subscribe((docsHTML) => {
                this.docsHTML = this.sanitizer.bypassSecurityTrustHtml(docsHTML);

                const slug = this.route.snapshot.paramMap.get('slug');
                this.title.setTitle(this.formatTitle(slug));
                this.meta.updateTag({
                    name: 'description',
                    content: `Documentation page for ${slug}`,
                });

                if (isPlatformBrowser(this.platformId)) {
                    this.highlightCode();
                }
            });
    }

    formatTitle(slug: string | null): string {
        return slug ? `${capitalizeFirstChar(slug.replace('-', ' '))} | Spiderly Docs` : 'Spiderly Docs';
    }

    highlightCode() {
        setTimeout(() => {
            const codeBlocks = this.HTMLContainer.nativeElement.querySelectorAll('pre code');
            codeBlocks.forEach((block: HTMLElement) => hljs.highlightElement(block));
        }, 500);
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