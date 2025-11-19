import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {
  id!: number;
  person?: Person;
  loading = false;
  error = '';
  constructor(private route: ActivatedRoute, private svc: PeopleService, private router: Router) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.get(this.id).subscribe({
      next: p => { this.person = p; this.loading = false; },
      error: () => { this.error = 'Failed to load'; this.loading = false; }
    });
  }
  confirm(): void {
    this.svc.delete(this.id).subscribe({
      next: () => this.router.navigate(['/people']),
      error: () => this.error = 'Delete failed'
    });
  }
  cancel(): void { this.router.navigate(['/people']); }
}
