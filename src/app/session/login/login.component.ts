import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/model/User';
import { NotificationService } from '../../shared/services/notification.service';
import { GithubService } from '../../shared/services/github.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private githubService: GithubService,
    private notificationService: NotificationService,

  ) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  handleUserSearch() {
    this.githubService.fetch(this.user.login).subscribe(
      user => {
        this.userService.fetchAll().subscribe(
          users => {
            const findByIndex = users.findIndex(u => u.login === user.login);
            console.log(findByIndex);

            if (findByIndex < 0) {
              this.userService.insert(user).subscribe(
                user => {
                  this.notificationService.success(`Usuário ${user.name} cadastrado!`);
                  this.router.navigate(['home', user.id]);
                }
              );
            } else {
              this.router.navigate(['home', user.id]);
            }
          }
        );
      }
    )
  }
}
