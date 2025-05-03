import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    PanelModule,
],
})
export class FAQComponent {

  constructor(
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly FAQ - Frequently Asked Questions');
    this.metaService.updateTag({ name: 'description', content: 'Explore the Spiderly Library Playground to instantly generate .NET (C#) + Angular web apps from your C# classes. Test and experiment with automatic boilerplate code updates.' });
  }

  ngOnInit(){
    
  }

}
