import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backoffice/header-admin/header-admin.component';
import { SidebarAdminComponent } from './backoffice/sidebar-admin/sidebar-admin.component';
import { FooterAdminComponent } from './backoffice/footer-admin/footer-admin.component';
import { AllTemplateAdminComponent } from './backoffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backoffice/body-admin/body-admin.component';
import { HeaderUserComponent } from './frontoffice/header-user/header-user.component';
import { BodyUserComponent } from './frontoffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontoffice/all-template-user/all-template-user.component';
import { FooterUserComponent } from './frontoffice/footer-user/footer-user.component';
import { ActiviteAdminComponent } from './backoffice/activite-admin/activite-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostAdminComponent } from './backoffice/post-admin/post-admin.component';
import { ForumCommentAdminComponent } from './backoffice/forum-comment-admin/forum-comment-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    FooterAdminComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    HeaderUserComponent,
    BodyUserComponent,
    AllTemplateUserComponent,
    FooterUserComponent,
    ActiviteAdminComponent,
    PostAdminComponent,
    ForumCommentAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
