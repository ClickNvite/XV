import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NameCheckService } from '../name-check.service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verifi',
  templateUrl: './verifi.component.html',
  styleUrls: ['./verifi.component.css']
})

export class VerifiComponent implements OnInit {
  name: string = '';

  constructor(private nameCheckService: NameCheckService, private router: Router) { }

  ngOnInit(): void {
    // Simulando una espera de 2 segundos antes de redirigir
    setTimeout(() => {
      this.checkName();
    }, 8000); 
  }

  checkName() {
    console.log('Nombre ingresado:', this.name);
    if (this.nameCheckService.isNameAllowed(this.name)) {
      console.log('Nombre permitido');
      this.router.navigateByUrl('/inicio');
    } else {
      console.log('Nombre no permitido');
      alert('Nombre no permitido');
    }
  }
}