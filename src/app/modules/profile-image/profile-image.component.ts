import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {
  @Input() first_name: string;
  @Input() last_name: string;
  @Input() small = false;
  constructor() { }

  ngOnInit() {
  }

}
