import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html'
})
export class TaskForm implements OnInit {

  taskForm: FormGroup;
  taskId = 0;
  isEditMode = false;

  constructor(
  private fb: FormBuilder,
  private taskService: TaskService,
  private router: Router,
  private route: ActivatedRoute
) {

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Medium'],
      dueDate: [''],
      status: ['Todo']
    });
  }
  
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEditMode = true;
      this.taskId = Number(id);

      this.taskService
        .getTaskById(this.taskId)
        .subscribe({
          next: (task) => {

            this.taskForm.patchValue({
              title: task.title,
              description: task.description,
              priority: task.priority,
              dueDate: task.dueDate
                ? task.dueDate.split('T')[0]
                : '',
              status: task.status
            });
          }
        });
    }
  }

  save() {

  if (this.taskForm.invalid) {
    return;
  }

  if (this.isEditMode) {

    this.taskService
      .updateTask(
        this.taskId,
        this.taskForm.value
      )
      .subscribe({
        next: () => {

          console.log('Task Updated');

          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error(err);
        }
      });

  } else {

    this.taskService
      .createTask(this.taskForm.value)
      .subscribe({
        next: () => {

          console.log('Task Created');

          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
}