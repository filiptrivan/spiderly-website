"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlaygroundComponent = void 0;
var base_form_service_1 = require("../../components/playground/web-app/entity-details/services/base-form.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var section_wrapper_component_1 = require("../../components/section-wrapper/section-wrapper.component");
var button_1 = require("primeng/button");
var router_1 = require("@angular/router");
var layout_component_1 = require("../../components/playground/web-app/layout/layout.component");
var entities_1 = require("../../components/playground/entities/entities");
var menu_1 = require("primeng/menu");
var index_card_component_1 = require("../../components/playground/index-card/index-card.component");
var select_1 = require("primeng/select");
var panel_1 = require("primeng/panel");
var spiderly_controls_module_1 = require("../../components/playground/web-app/entity-details/controls/spiderly-controls.module");
var class_form_component_1 = require("../../components/playground/class-form/class-form.component");
var helper_functions_1 = require("../../components/playground/web-app/entity-details/services/helper-functions");
var rxjs_1 = require("rxjs");
var class_code_editor_component_1 = require("../../components/playground/class-code-editor/class-code-editor.component");
var get_options_functions_1 = require("../../components/playground/class-form/services/get-options-functions");
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(baseFormService, messageService) {
        this.baseFormService = baseFormService;
        this.messageService = messageService;
        this.lastEntitiesMenuIconIndexClicked = new base_form_service_1.LastMenuIconIndexClicked({});
        this.entitiesCrudMenuRemoveHandler = new rxjs_1.Subject();
        this.entities = [];
        this.menu = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home'
            },
            {
                separator: true
            }
        ];
        this.cSharpDataTypeOptions = get_options_functions_1.getCSharpDataTypeOptions();
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userEntity = new entities_1.SpiderlyClass({
            name: 'User',
            attributes: [
                { name: get_options_functions_1.EntityAttributeCodes.TranslatePluralEn, value: 'Users' }
            ],
            properties: [
                { name: 'Id', dataType: get_options_functions_1.CSharpDataTypeCodes.Long, attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.Required }] },
                { name: 'Name', dataType: get_options_functions_1.CSharpDataTypeCodes.String, attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.DisplayName }, { name: get_options_functions_1.PropertyAttributeCodes.Required }] },
                { name: 'Gender', dataType: 'Gender', attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.UIControlWidth, value: get_options_functions_1.UIControlWidthCodes._12 }] },
                { name: 'Logo', dataType: get_options_functions_1.CSharpDataTypeCodes.String, attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.UIControlType, value: get_options_functions_1.UIControlTypeCodes.File }] },
            ],
            data: [
                { Id: 1, Name: 'John', Gender: '0' },
                { Id: 2, Name: 'Alice', Gender: '1' },
                { Id: 3, Name: 'Bob' }
            ],
            collapsed: true
        });
        var genderEntity = new entities_1.SpiderlyClass({
            name: 'Gender',
            attributes: [
                { name: get_options_functions_1.EntityAttributeCodes.TranslatePluralEn, value: 'Genders' }
            ],
            properties: [
                { name: 'Id', dataType: get_options_functions_1.CSharpDataTypeCodes.Long, attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.Required }] },
                { name: 'Name', dataType: get_options_functions_1.CSharpDataTypeCodes.String, attributes: [{ name: get_options_functions_1.PropertyAttributeCodes.DisplayName }, { name: get_options_functions_1.PropertyAttributeCodes.Required }] },
            ],
            data: [
                { Id: 1, Name: 'Male' },
                { Id: 2, Name: 'Female' },
            ],
            collapsed: true
        });
        this.saveEntity(userEntity, null);
        this.saveEntity(genderEntity, null);
        this.entitiesFormArray = this.baseFormService.initFormArray(new entities_1.SpiderlyClass({}), this.entities);
        this.entitiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(new entities_1.SpiderlyClass({}), this.entitiesFormArray, this.lastEntitiesMenuIconIndexClicked, this.entitiesCrudMenuRemoveHandler);
        this.entitiesCrudMenuRemoveHandler.subscribe(function (index) {
            _this.removeEntity(index);
        });
    };
    PlaygroundComponent.prototype.saveEntityFormGroup = function (formGroup, index) {
        if (this.baseFormService.checkFormGroupValidity(formGroup) === false) {
            return;
        }
        this.saveEntity(formGroup.value, index);
    };
    PlaygroundComponent.prototype.saveEntity = function (entity, index) {
        var _a;
        var sameNameDifferentIndexEntity = this.entities.find(function (x, i) { return x.name === entity.name && i !== index; });
        if (sameNameDifferentIndexEntity != null) {
            this.messageService.add(helper_functions_1.getWarningMessageOptions('You already have class with the same name.'));
            return;
        }
        if (entity.properties.length !== new Set(entity.properties.map(function (x) { return x.name; })).size) {
            this.messageService.add(helper_functions_1.getWarningMessageOptions('You have multiple properties with the same name.'));
            return;
        }
        var entityAlreadyExists = this.entities.some(function (_, i) { return i === index; });
        if (entityAlreadyExists) {
            this.removeEntity(index);
            this.cSharpDataTypeOptions = this.cSharpDataTypeOptions.filter(function (dataType) { return dataType.label !== entity.name; });
        }
        entity.data = (_a = entity.data) !== null && _a !== void 0 ? _a : [];
        var menuLabel = helper_functions_1.getEntityPluralName(entity);
        var menuIcon = 'pi pi-list';
        if (index != null) {
            this.entities.splice(index, 0, entity);
            this.menu.splice(index + 2, 0, {
                label: menuLabel,
                icon: menuIcon,
                entity: entity
            });
        }
        else {
            this.entities.push(entity);
            this.menu.push({
                label: menuLabel,
                icon: menuIcon,
                entity: entity
            });
        }
        if (index != null) { // FT: index is null only when we manually push new entity at the begining of the program
            this.messageService.add(helper_functions_1.getSuccessMessageOptions('Successfully saved'));
        }
        this.cSharpDataTypeOptions.push({ label: entity.name, value: entity.name });
    };
    PlaygroundComponent.prototype.removeEntity = function (index) {
        var entityForDelete = this.entities.find(function (_, i) { return i === index; });
        this.entities = this.entities.filter(function (_, i) { return i !== index; });
        this.entities.forEach(function (entity) {
            entity.properties = entity.properties.filter(function (property) { return property.dataType !== entityForDelete.name; });
        });
        this.entitiesFormArray.controls.forEach(function (entityFormGroup) {
            var propertiesFormArray = entityFormGroup.controls.properties;
            for (var i = propertiesFormArray.length - 1; i >= 0; i--) {
                var propertyFormGroup = propertiesFormArray.at(i);
                var dataType = propertyFormGroup.controls.dataType.value;
                if (dataType === entityForDelete.name) {
                    propertiesFormArray.removeAt(i);
                }
            }
        });
        this.menu = this.menu.filter(function (_, i) { return i !== index + 2; }); // FT: Because we always have home and separator as default ones
    };
    PlaygroundComponent.prototype.getFormArrayGroups = function (formArray) {
        return this.baseFormService.getFormArrayGroups(formArray);
    };
    PlaygroundComponent.prototype.addNewEntity = function () {
        this.baseFormService.addNewFormGroupToFormArray(this.entitiesFormArray, new entities_1.SpiderlyClass({}), null);
    };
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: 'app-playground',
            templateUrl: './playground.component.html',
            styleUrl: './playground.component.scss',
            imports: [
                common_1.CommonModule,
                section_wrapper_component_1.SectionWrapperComponent,
                button_1.ButtonModule,
                router_1.RouterModule,
                layout_component_1.LayoutComponent,
                spiderly_controls_module_1.SpiderlyControlsModule,
                layout_component_1.LayoutComponent,
                menu_1.MenuModule,
                index_card_component_1.IndexCardComponent,
                select_1.SelectModule,
                panel_1.PanelModule,
                class_form_component_1.ClassFormComponent,
                class_code_editor_component_1.ClassCodeEditorComponent,
            ]
        })
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
