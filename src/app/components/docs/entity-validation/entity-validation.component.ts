import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DocsStep } from '../layout/docs-layout.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DocsTemplateComponent } from '../docs-template/docs-template.component';

@Component({
  selector: 'app-entity-validation',
  templateUrl: './entity-validation.component.html',
  styleUrl: '../layout/docs-layout.component.scss',
  imports: [CommonModule, RouterModule, ButtonModule, HighlightModule, DocsTemplateComponent],
})
export class EntityValidationComponent {
  steps: DocsStep[];
  gradientTitle = 'Entity Validation ';
  whiteTitle = 'With Spiderly Attributes';
  textBelowTitle = `
  Spiderly simplifies validation across your application by allowing you to annotate your entity classes with attributes. <br/> <br/>

  <b>Validation attributes fall into two categories:</b>
  <ul>
    <li>Spiderly custom validation attributes</li>
    <li>EF Core attributes from <span class="code-block">System.ComponentModel.DataAnnotations</span></li>
  </ul>

  <br/>
  <b>Validation attributes are used to:</b>
  <ul>
    <li>Automatically generate backend (DTO-level) validation.</li>
    <li>Automatically generate frontend form validation rules.</li>
    <li>Leave database validation to EF Core.</li>
  </ul>

  <br/>
  <b>Behavior Based on Attribute Type:</b>
  <ul>
    <li>EF Core attributes will result in database schema changes. When you use them, remember to run <span class="code-block">Add-Migration</span> and <span class="code-block">Update-Database</span>.</li>
    <li>Spiderly backend validation attributes require rebuilding the backend to take effect.</li>
  </ul>
  `;

  constructor() {}

  ngOnInit() {
    this.steps = [
      {
        title: 'CustomValidatorAttribute',
        fragment: 'custom-validator-attribute',
        description: `
    <h3>Usage</h3>
    Defines custom validation rules for the decorated property or class (can be used on DTOs as well as entities). <br/>
    Supports chaining of multiple rules using dot notation, e.g., <span class="code-block">EmailAddress().Length(5, 50)</span>. <br/> <br/>
    
    <h3>Examples:</h3>
  `,
        codeExample: `
// Class-level validation
[CustomValidator("RuleFor(x => x.Email).EmailAddress().Length(5, 50);")]
[CustomValidator("RuleFor(x => x.Name).Length(2, 100);")]
public class User : BusinessObject<long>
{
  public string Email { get; set; }
  public string Name { get; set; }
}

// Property-level validation
public class User : BusinessObject<long>
{
  [CustomValidator("EmailAddress()")]
  [CustomValidator("Length(5, 50)")]
  public string Email { get; set; }
}
  `,
      },
      {
        title: 'GreaterThanOrEqualToAttribute',
        fragment: 'greater-than-or-equal-to-attribute',
        description: `
<h3>Usage</h3> 
Validates that a numeric property value is greater than or equal to a specified number.
This attribute provides both <b>server-side</b> and <b>client-side</b> validation.
<br/><br/>

<h3>Example:</h3>
  `,
        codeExample: `
public class Product : BusinessObject<long>
{
    [GreaterThanOrEqualTo(0)] // StockQuantity must be 0 or higher
    public int StockQuantity { get; set; }
}
`,
      },
      {
        title: 'PrecisionAttribute',
        fragment: 'precision-attribute',
        description: `
<h3>Usage</h3> 
Specifies the precision and scale for a decimal property. <br/>
Useful for controlling how many digits are stored in total (<span class="code-block">precision</span>) and how many of them are after the decimal point (<span class="code-block">scale</span>).<br/><br/>

ℹ️ Applies to the server-side, client-side validation and affects the EF Core model and will generate corresponding SQL column definition.<br/><br/>

<h3>Example:</h3>
      `,
        codeExample: `
public class Product : BusinessObject<long>
{
    [Precision(18, 2)] // Allows up to 18 digits total, with 2 after the decimal point
    public decimal Price { get; set; }
}
`,
      },
      {
        title: 'RangeAttribute',
        fragment: 'range-attribute',
        description: `
<h3>Usage</h3> 
Validates that a numeric value falls within a specified inclusive range.<br/><br/>

ℹ️ Applies to the server-side, client-side validation and affects the EF Core model and will generate corresponding SQL column definition.<br/><br/>

<h3>Example:</h3>
  `,
        codeExample: `
public class Product : BusinessObject<long>
{
    [Range(1, 1000)] // Price must be between 1 and 1000 (inclusive)
    public decimal Price { get; set; }
}
`,
      },
      {
        title: 'RequiredAttribute',
        fragment: 'required-attribute',
        description: `
<h3>Usage</h3> 
Specifies that a value must be provided for the decorated property, enforcing non-null values.<br/><br/>

ℹ️ Applies to the server-side, client-side validation and affects the EF Core model and will generate corresponding SQL column definition.<br/><br/>

<h3>Example:</h3>
  `,
        codeExample: `
public class User : BusinessObject<long>
{
    [Required] // Name cannot be null or empty
    public string Name { get; set; }
}
`,
      },
      {
        title: 'StringLengthAttribute',
        fragment: 'string-length-attribute',
        description: `
<h3>Usage</h3> 
Specifies the minimum and/or maximum length for a string property.<br/><br/>

ℹ️ Applies to the server-side, client-side validation and affects the EF Core model and will generate corresponding SQL column definition.<br/><br/>

<h3>Best Practice</h3> 
💡 Always apply <span class="code-block">StringLength</span> to string properties. If omitted, EF Core will map them to <span class="code-block">NVARCHAR(MAX)</span> by default, which can negatively impact performance.<br/><br/>

<h3>Example:</h3>
  `,
        codeExample: `
public class User : BusinessObject<long>
{
    [StringLength(50, MinimumLength = 2)] // Name must be between 2 and 50 characters
    public string Name { get; set; }
}
`,
      },
    ];
  }
}
