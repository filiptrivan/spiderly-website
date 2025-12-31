import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DocsStep } from '../layout/docs-layout.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DocsTemplateComponent } from '../docs-template/docs-template.component';

@Component({
  selector: 'app-translate-spiderly-app',
  templateUrl: './translate-spiderly-app.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [CommonModule, RouterModule, ButtonModule, HighlightModule, DocsTemplateComponent],
})
export class TranslateSpiderlyAppComponent {
  steps: DocsStep[];
  gradientTitle = 'Translate Spiderly App';
  textBelowTitle = `
Spiderly supports internationalization out of the box. On the frontend, translations are powered by <a href="https://github.com/jsverse/transloco" target="_blank" rel="noopener nofollow noreferrer">Transloco</a> with <span class="code-block">.json</span> files.  
On the backend, it uses standard <span class="code-block">.resx</span> resource files in C#. <br/> <br/>

Whether you're customizing labels in generated Angular forms, naming Excel exports, or displaying localized validation messages —  
Spiderly helps you streamline and unify translations across your full stack.
`;

  constructor() {}

  ngOnInit() {
    this.steps = [
      {
        title: 'Translating Entities and Properties',
        fragment: 'translating-entities-and-properties',
        description: `
Spiderly lets you customize how entity and property names appear across the app — not just for multilingual support, but also for customizing labels in <strong>generated Angular components</strong>, 
<strong>Excel export filenames</strong>, and <strong>validation messages</strong>. <br/><br/>
These translations are automatically integrated into Spiderly's generated code, but you can also use them freely throughout your custom logic wherever needed. <br/><br/>

<h3>Built-in Supported Languages:</h3>
<ul>
  <li>English</li>
  <li>Serbian (Latin)</li>
</ul>

ℹ️ You can still add any other language manually — but you'll need to manage the translation keys and values yourself, without the help of Spiderly attributes or auto-generation.<br/><br/>

<h3><span class="code-block">[Translate{LanguageTag}]</span> Attribute</h3>
This attribute applies to both <strong>entity classes</strong> and their <strong>properties</strong>. <br/><br/>

<h4>When Applied to an Entity Class:</h4>
<ul>
  <li>Generates translations for the <span class="code-block">YourEntityName</span> key on both the frontend and backend.</li>
</ul>
<br/>

<h4>When Applied to a Property:</h4>
<ul>
  <li>Generates translations for the <span class="code-block">YourPropertyName</span> key on both the frontend and backend.</li>
  <li>Used as the default input field label in the generated Angular form component.</li>
  <li>Used in both server and client-side validation messages (e.g., <i>Field 'Email address' can not be empty"</i>).</li>
</ul>
<br/>

<h4>Example:</h4>
`,
        codeExample: `
[TranslateEn("User")]
[TranslateSrLatnRS("Korisnik")]
public class UserExtended : BusinessObject<long>
{
    [TranslateEn("Email address")]
    [TranslateSrLatnRS("Email adresa")]
    public string Email { get; set; }
}
`,
        description2: `
<br/>
<h3><span class="code-block">[TranslatePlural{LanguageTag}]</span> Attribute</h3>
This attribute is applied <strong>only to entity classes</strong> and defines the plural form of the entity's name for use throughout your app. <br/><br/>

<h4>Usage:</h4>
<ul>
  <li>Generates translations for the <span class="code-block">YourEntityNameList</span> key on both the frontend and backend.</li>
  <li>Table titles (used by default when generating pages with the 'add-new-page' Spiderly command; this can be customized).</li>
  <li>Excel export filenames (when <span class="code-block">[TranslateExcel{LanguageTag}]</span> value is not specified).</li>
</ul>
<br/>

<h4>Example:</h4>
`,
        codeExample2: `
[TranslatePluralEn("User points")]
[TranslatePluralSrLatnRS("Korisnički poeni")]
public class UserPoint : BusinessObject<long>
{
    // Entity properties
}
`,
        description3: `
<br/>
<h3><span class="code-block">[TranslateExcel{LanguageTag}]</span> Attribute</h3>
This attribute is applied <strong>only to entity classes</strong> and specifies the filename used for exporting <strong>that entity's data</strong> to Excel throughout your app (e.g., from a Spiderly-generated data table view). <br/><br/>

<h4>Fallback Behavior:</h4>
<ul>
  <li>First tries to use <span class="code-block">[TranslatePlural{LanguageTag}]</span> value.</li>
  <li>If <span class="code-block">[TranslatePlural{LanguageTag}]</span> value is not available, uses <span class="code-block">'YourEntityNameList'</span>.</li>
</ul>
<br/>

<h4>Example:</h4>
`,
        codeExample3: `
[TranslateExcelEn("Users_Excel")] // Will generate: Users_Excel.xlsx
public class User : BusinessObject<long>
{
    // Entity properties
}
`,
      },
      {
        title: 'Changing Default Language',
        fragment: 'changing-default-language',
        description: `
By default, Spiderly uses English (<span class="code-block">en</span>) as the primary language.  
If you want to change the default language, you'll need to update the <a href="https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags" target="_blank" rel="noopener nofollow noreferrer">language tag</a> in both your <strong>backend</strong> and <strong>frontend</strong> configurations. <br/><br/>

<h3>Built-in Supported Language Tags:</h3>
<ul>
  <li><span class="code-block">en</span></li>
  <li><span class="code-block">sr-Latn-RS</span></li>
</ul>

ℹ️ You can still add any other language tag manually — but you'll need to manage the translation keys and values yourself, without the help of Spiderly attributes or auto-generation.<br/><br/>

<h3>Language Tag Update:</h3>
1. In the backend project opened with Visual Studio, open the <span class="code-block">YourAppName.WebAPI\\Startup.cs</span> file and
update the <span class="code-block">SpiderlyConfigureServices</span> call by passing your desired language tag: <br/><br/>
`,
        codeExample: `
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.SpiderlyConfigureServices<YourAppNameApplicationDbContext>("your-language-tag");
    }
}
`,
        description2: `
<br/>
2. In the frontend project opened with Visual Studio Code, open the <span class="code-block">src\\app\\app.config.ts</span> file and
update the <span class="code-block">provideSpiderlyTransloco</span> configuration: <br/><br/>
`,
        codeExample2: `
export const appConfig: ApplicationConfig = {
  providers: [
    provideSpiderlyTransloco({
      preloadLangs: ['your-language-tag'],
      availableLangs: [
        'your-language-tag', 
        'your-language-tag.generated',
      ],
      defaultLang: 'your-language-tag',
      fallbackLang: 'your-language-tag.generated',
    }),
  ]
};
`,
      },
      {
        title: 'Custom Frontend Translations for Multilingual Apps',
        fragment: 'custom-frontend-translations',
        description: `
ℹ️ You only need to add custom frontend translations if your app supports <strong>multiple languages</strong>.  
If you're only using a single language, you can simply use hardcoded strings.<br/><br/>

<h3>Add a Translation Key-Value Pair</h3>
In the frontend project opened with Visual Studio Code, open the appropriate language file under <span class="code-block">src\\assets\\i18n</span> folder,
for example: <span class="code-block">en.json</span>. 

Then, add a new key-value entry like this anywhere in the file: <span class="code-block">"KeyForTranslation": "Translated text"</span>. <br/><br/>

You can now reference this key in your TypeScript or HTML files. <br/><br/>

<h3>Use Translation in TypeScript (<span class="code-block">.ts</span>)</h3>
Inject the <span class="code-block">TranslocoService</span> and use its <span class="code-block">translate</span> method: <br/> <br/>
`,
        codeExample: `
// ... other imports
import { TranslocoService } from '@jsverse/transloco';

@Component({
  templateUrl: './your.component.html',
})
export class YourComponent {

  constructor(
    // ... other injections
    private translocoService: TranslocoService
  ) {}
  
  ngOnInit() {
    const translatedText = this.translocoService.translate('KeyForTranslation');
  }
}
`,
        description2: `
<br/>
<h3>Use Translation in HTML (<span class="code-block">.html</span>)</h3>
Add <span class="code-block">TranslocoDirective</span> into Angular component imports: <br/> <br/>
`,
        codeExample2: `
@Component({
  templateUrl: './your.component.html',
  imports: [
    // ... other imports
    TranslocoDirective,
  ],
})
export class YourComponent {
  // ...
}
`,
        description3: `
<br/>
Use the directive with Angular's <span class="code-block">*transloco</span> syntax: <br/><br/>
`,
        codeExample3: `
<ng-container *transloco="let t">
    {{t('KeyForTranslation')}}
</ng-container>
`,
      },
      {
        title: 'Custom Backend Translations for Multilingual Apps',
        fragment: 'custom-backend-translations',
        description: `
ℹ️ You only need to add custom backend translations if your app supports <strong>multiple languages</strong>.  
If you're only using a single language, you can simply use hardcoded strings.<br/><br/>

<h3>Use Case Example</h3>
Let's say you want to throw a translated exception message, based on the active culture (e.g., English): <br/><br/>
`,
        codeExample: `
throw new Exception(Terms.YourExceptionKey);
`,
        description2: `
<br/>
If that's the case, in the backend project opened with Visual Studio, open the <span class="code-block">YourAppName.Shared\\Resources\\Terms.resx</span> file and
add a new entry with the key <span class="code-block">YourExceptionKey</span> and a culture-specific value, for example: <span class="code-block">Your exception message.</span>
<br/> <br/>

Spiderly will automatically pick the correct translation at runtime based on the active culture settings.<br/><br/>

ℹ️ For easier management of translation keys across multiple <span class="code-block">.resx</span> files, you can use  
<a href="https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager" target="_blank" rel="noopener nofollow noreferrer">ResXManager</a> - a Visual Studio extension that simplifies working with localization resources.
`,
      },
    ];
  }
}
