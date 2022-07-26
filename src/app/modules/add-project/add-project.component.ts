import { Component } from '@angular/core';
import { ProjectService } from '@core/services/impl/project.service';
import { Project } from '@data/project';
import { dataMock } from '@data/mocks/dataMock';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { StepperOrientation } from '@angular/material/stepper';
import { Appsettings } from '@data/constants/appsettings';
import { ProvinciasService } from '@core/services/provincias.service';
//import * as provinciasEcuador from '@data/constants/provincias.json';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {

  data!: Project;
  categorias = Appsettings.CATEGORIAS;
  ecuador!: any[];
  provincias: string[]=[];
  //PROGRESS
  tipoFormGroup = this.formBuilder.group({
    tipo: ['', Validators.required]
  })

  detalleFormGroup = this.formBuilder.group({
    area: ['', [Validators.required, Validators.min(0)]],
    avaluoInicial: ['', [Validators.required, Validators.min(0)]],
    precioOportunidad: ['', [Validators.required, Validators.min(0)]],
    provincia: ['', [Validators.required]],
  })

  ///
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  constructor(private projectService: ProjectService, 
    private formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver, 
    private provinciasService: ProvinciasService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

      
    this.provinciasService.obtenerProvincias().subscribe((res:any)=>{
      this.ecuador = res;
      for (const key in this.ecuador) {
        this.provincias.push(this.ecuador[key].provincia);
      }
    });
    
   }

  onSubmit(): void {
    alert('Thanks!');
  }

  addProject(): void {
    //TO DO Form data project
    this.data = dataMock;
    this.projectService.addData(this.data)
      .then(res => console.log('Proyecto guardado correctamente!'))
      .catch(err => console.error('Error al guardar la información. Intente más tarde! ', err));
  }

  // deleteProject(): void {

  //   this.projectService.deleteData('5Z1llBpjTNRL6RaZkB3c')
  //     .then(res => console.log('Proyecto eliminado correctamente'))
  //     .catch(err => console.error('Error al eliminar projecto. Intente más tarde!'));
  // }
}
