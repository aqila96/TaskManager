import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks()
      .subscribe({
        next: (data: any[]) => {

          console.log('TASKS:', data);

          this.tasks = [...data];

          console.log('COUNT:', this.tasks.length);
        },

        error: (err) => {
          console.error(err);
        }
      });
  }

  deleteTask(id: number): void {

    if (!confirm('Delete task?')) {
      return;
    }

    this.taskService.deleteTask(id)
      .subscribe(() => {
        this.loadTasks();
      });
  }

  toggleStatus(id: number): void {

    this.taskService.toggleStatus(id)
      .subscribe(() => {
        this.loadTasks();
      });
  }
}