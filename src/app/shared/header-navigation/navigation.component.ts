import { Component,Inject, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication.service';
import { ServiceService } from '../../dashboard/service.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  range: FormGroup;
  dateRange:any;
  start:any;
  end:any;

  // range = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];



  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

  constructor(
    private authService: AuthenticationService,
    private dashboardService: ServiceService,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private _document: Document
  ) {
    translate.setDefaultLang('en');
  this.dateRange = JSON.parse(localStorage.getItem('dateRange'));

  }

  tempDate = new Date().setMonth(new Date().getMonth() - 1);



  ngOnInit(): void {
    this.start = this.dateRange ? this.dateRange.start : new Date().setMonth(new Date().getMonth() - 1);
    this.end =  this.dateRange?.end ? this.dateRange.end: new Date();
    this.range = this.formBuilder.group({
      start: new FormControl(new Date(this.start), Validators.required),
      end: new FormControl(new Date(this.end), Validators.required)
    });
    this.dashboardService.submitDateRange(this.formatDate(this.range.value.start), this.formatDate(this.range.value.end))
  }

  onFormSubmit() {

    if (this.range.invalid) {
      return;
    }
    const start = this.formatDate(this.range.value.start);
    const end = this.formatDate(this.range.value.end);
    this.dashboardService.submitDateRange(start, end);
    this._document.defaultView.location.reload();
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }

  ngAfterViewInit() { }

  logout() {
    this.authService.logout()
  }
}
