import { Component, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { DocsAppTopBarComponent } from './topbar/docs-topbar.component';
import { DocsLayoutService } from './docs-layout.service';
import { CommonModule } from '@angular/common';
import { DocsSidebarMenuComponent, DocsSpiderlyMenuItem } from './sidebar/docs-sidebar-menu.component';
import { Meta, SafeHtml, Title } from '@angular/platform-browser';
import { GettingStartedComponent } from "../getting-started/getting-started.component";
import { AttributesDocsComponent } from "../attributes/attributes.component";
import { kebabToTitleCase } from '../../playground/web-app/entity-details/services/helper-functions';
import { TerminalMessage } from '../terminal/terminal.component';
import { EntityAuthorizationComponent } from "../entity-authorization/entity-authorization.component";
import { UICustomizationComponent } from "../ui-customization/ui-customization.component";
import { AddNewEntityComponent } from '../add-new-entity/add-new-entity.component';
import { TranslateSpiderlyAppComponent } from '../translate-spiderly-app/translate-spiderly-app.component';
import { EntityValidationComponent } from '../entity-validation/entity-validation.component';

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
    AttributesDocsComponent,
    EntityAuthorizationComponent,
    UICustomizationComponent,
    AddNewEntityComponent,
    TranslateSpiderlyAppComponent,
    EntityValidationComponent,
]
})
export class DocsLayoutComponent implements OnDestroy {
    @Input() menu: DocsSpiderlyMenuItem[] = [];

    overlayMenuOpenSubscription: Subscription;
    navigationEndSubscription: Subscription;

    menuOutsideClickListener: any;

    animateSidebar: boolean = true;
    @ViewChild(DocsSidebarMenuComponent) appSidebar!: DocsSidebarMenuComponent;

    @ViewChild(DocsAppTopBarComponent) appTopbar!: DocsAppTopBarComponent;

    isGettingStartedPage: boolean;
    isAddNewEntity: boolean;
    isEntityValidation: boolean;
    isEntityAuthorization: boolean;
    isUiCustomization: boolean;
    isTranslateSpiderlyApp: boolean;
    isAttributesDocsPage: boolean;

    constructor(
        protected layoutService: DocsLayoutService,
        protected renderer: Renderer2,
        protected router: Router,
        private route: ActivatedRoute,
        private title: Title,
        private meta: Meta,
    ) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.layoutService.isDesktop() && !this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(
                        this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                        this.appSidebar.el.nativeElement.contains(event.target) ||
                        this.appTopbar.menubutton.nativeElement.isSameNode(event.target) ||
                        this.appTopbar.menubutton.nativeElement.contains(event.target)
                    );

                    if (isOutsideClicked) {
                        this.closeSidebar();
                    }
                });
            }
        });

        this.navigationEndSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                if (this.layoutService.isDesktop()) {
                    this.animateSidebar = false;
                    setTimeout(() => this.animateSidebar = true, 10);
                }
                else {
                    this.closeSidebar();
                }
            });
    }

    ngOnInit() {
        const slug = this.route.snapshot.url[this.route.snapshot.url.length - 1]?.path ?? '';

        const metaDescriptions: Record<string, string> = {
            'getting-started': `Follow this quick start guide to configure and initialize your Spiderly app. Once complete, you'll be ready to use all features and build with its full power.`,
            'add-new-entity': `The EF Core entity and its attributes are the core of Spiderly. In this step-by-step guide, you'll learn how to create a new entity in your project.`,
            'entity-authorization': `Configure entity authorization by adding permissions and assigning them to roles, or disable authorization using the [DoNotAuthorize] attribute.`,
            'entity-validation': `How to use Spiderly and EF Core validation attributes to automate backend, frontend, and database validation for your entity classes, with examples.`,
            'ui-customization': `This step-by-step guide will show you how to customize key UI elements of your Spiderly app, including: app name, logo, favicon, and theme colors.`,
            'translate-spiderly-app': `Spiderly enables full-stack multilingual app translation. Customize input field labels, validation messages, and Excel export filenames.`,
            'attributes': `Learn how to use Spiderly Attributes on EF Core entities to auto-generate CRUD logic, auth, validations, mappings, and UI for your web apps.`,
        };

        if (slug === 'getting-started') {
            this.isGettingStartedPage = true;
        }
        else if (slug === 'add-new-entity') {
            this.isAddNewEntity = true;
        } 
        else if (slug === 'entity-validation') {
            this.isEntityValidation = true;
        } 
        else if (slug === 'entity-authorization') {
            this.isEntityAuthorization = true;
        } 
        else if (slug === 'ui-customization') {
            this.isUiCustomization = true;
        } 
        else if (slug === 'translate-spiderly-app') {
            this.isTranslateSpiderlyApp = true;
        } 
        else if (slug === 'attributes') {
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
        return `${kebabToTitleCase(slug)} | Spiderly Docs`;
    }

    closeSidebar() {
        this.layoutService.closeSidebar();
        
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.navigationEndSubscription) {
            this.navigationEndSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}

export interface DocsStep {
  title: string;
  fragment: string;
  description: SafeHtml;
  description2?: SafeHtml;
  description3?: SafeHtml;
  terminalMessages?: TerminalMessage[];
  terminalMessages2?: TerminalMessage[];
  terminalMessages3?: TerminalMessage[];
  prerequisites?: boolean;
  video?: SafeHtml;
  codeExample?: string;
  codeExample2?: string;
  codeExample3?: string;
}
