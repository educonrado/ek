import { Injectable } from '@angular/core';
import { Appsettings } from '@data/constants/appsettings';
import { Project } from '@data/project';
import { map, Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private collectionProject = Appsettings.PATH_COLLECTION_PROJECTS;
  constructor(private firebaseService: FirebaseService) {    
  }

  getData(): Observable<any[]> {
    return this.firebaseService.col$(this.collectionProject);
  }

  addData(data: Project): Promise<any> {
    return this.firebaseService.add(this.collectionProject, data);
  }

  deleteData(ref: any) {
    return this.firebaseService.delete(this.collectionProject+`/${ref}`);
  }

}
