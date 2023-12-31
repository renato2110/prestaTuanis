import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface DropdownValue {
  id: string;
  text: string;
  tabindex: number;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() primary: boolean = false;
  @Input() large: boolean = false;
  @Input() disabled: boolean = false;
  @Input() tabindex: number = 0;

  @Input() dropdown: boolean = false;
  @Input() dropdownValues: DropdownValue[] = [];
  @Output() onSelectDropdownOption = new EventEmitter<DropdownValue>();
  showDropdown: boolean = false;

  openDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectDropdownOption(event: DropdownValue) {
    this.onSelectDropdownOption.emit(event);
    this.showDropdown = false;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as Element).className.includes('dropdown-button')) {
      this.showDropdown = false;
    }
  }
}
