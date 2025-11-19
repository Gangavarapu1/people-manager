import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  loading = false;
  error = '';
  constructor(private svc: PeopleService, private router: Router) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: data => { this.people = data; this.loading = false; },
      error: () => { this.error = 'Failed to load'; this.loading = false; }
    });
  }
  edit(id: number){ this.router.navigate(['/people/edit', id]); }
  del(id: number){ this.router.navigate(['/people/delete', id]); }
}
