import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private currentRoute: ActivatedRoute,
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    if (this.currentRoute.snapshot.paramMap.has('id')) {
      const id = Number(this.currentRoute.snapshot.paramMap.get('id'));

      this.userService.fetch(id).subscribe(
        user => this.user = user
      );
    }
  }
}
