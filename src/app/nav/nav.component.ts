import { Component, OnInit, Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
  constructor(
    private _elementRef: ElementRef,
    public authService: AuthService
  ) {}

  isExpanded = false;
  isExpandedTwo = false;
  isAuthenticated: Boolean;

  @Output()
    public clickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
            this.isExpanded = false;
            this.isExpandedTwo = false;
        }
    }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  logout() {
    this.isAuthenticated = this.authService.logout();
  }

  collapse() {
    this.isExpanded = false;
    this.isExpandedTwo = false;
  }

  toggle() {
    this.isExpandedTwo = false;
    this.isExpanded = !this.isExpanded;
  }
  toggletwo() {
    this.isExpanded = false;
    this.isExpandedTwo = !this.isExpandedTwo;
  }
}