import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = '';
  id!: number;
  constructor(private route: ActivatedRoute, private svc: PeopleService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      id: [{value:0, disabled:true}],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      phone: ['']
    });
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.get(this.id).subscribe({
      next: (p: Person) => { this.form.patchValue(p); this.loading = false; },
      error: () => { this.error = 'Failed to load person'; this.loading = false; }
    });
  }
  save(): void {
    if (this.form.invalid) return;
    const payload: Person = {
      id: this.id,
      firstName: this.form.get('firstName')!.value,
      lastName: this.form.get('lastName')!.value,
      email: this.form.get('email')!.value,
      phone: this.form.get('phone')!.value
    };
    this.svc.update(payload).subscribe({
      next: () => this.router.navigate(['/people']),
      error: () => this.error = 'Save failed'
    });
  }
  cancel(): void { this.router.navigate(['/people']); }
}
