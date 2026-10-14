import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /*private apiUrl = 'https://localhost:7035/api/tasks'; */
  private apiUrl = 'http://localhost:8080/api/tasks';   
 

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  toggleStatus(id: number) {
  return this.http.patch(
    `${this.apiUrl}/${id}/status`,
    {}
  );
}
	createTask(task: any) {
	  return this.http.post(
		this.apiUrl,
		task
	  );
	}
	getTaskById(id: number) {
  return this.http.get<any>(
    `${this.apiUrl}/${id}`
  );
}

updateTask(id: number, task: any) {
  return this.http.put(
    `${this.apiUrl}/${id}`,
    task
  );
}

}