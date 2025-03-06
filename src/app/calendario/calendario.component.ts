import { Component } from '@angular/core';
import { EventoService } from '../evento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  constructor(private eventoService: EventoService) {}

  openSaveDialog() {
    Swal.fire({
      title: 'Detalles del evento',
      html: `
        <div class="mb-4 flex flex-col justify-center items-center">
          <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre:</label>
          <input id="first-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">
        </div>
        <div class="mb-4 flex flex-col justify-center items-center">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido:</label>
          <input id="last-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">
        </div>
        <div class="mb-4 flex flex-col justify-center items-center">
          <label class="block text-sm font-medium text-gray-700">Asistencia:</label>
          <div class="flex items-center">
            <input type="radio" id="yes" name="attendance" value="yes" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
            <label for="yes" class="ml-2 block text-sm font-medium text-gray-700">Sí</label>
          </div>
          <div class="flex items-center mt-2">
            <input type="radio" id="no" name="attendance" value="no" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
            <label for="no" class="ml-2 block text-sm font-medium text-gray-700">No</label>
          </div>
        </div>
        <div class="mb-4 flex flex-col justify-center items-center">
          <label for="attendees" class="block text-sm font-medium text-gray-700">Número de asistentes:</label>
          <input id="attendees" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="number" min="0">
        </div>
      `,
      showDenyButton: true,
      denyButtonText: 'No guardar',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      customClass: {
        popup: 'px-6 py-4 rounded-lg shadow-lg border border-gray-300',
        title: 'text-xl font-medium text-gray-700',
        confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
        denyButton: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
        cancelButton: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
      },
      width: '100%',
      padding: '1rem',
      background: 'white',
      preConfirm: () => {
        const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
        const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
        const attendance = (document.querySelector('input[name="attendance"]:checked') as HTMLInputElement)?.value;
        const attendees = (document.getElementById('attendees') as HTMLInputElement).value;
        
        if (!firstName || !lastName || !attendance || !attendees) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }
        
        return { firstName, lastName, attendance, attendees };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.showLoading();
        this.saveFile(result.value);
      } else if (result.isDenied) {
        this.handleDenial();
      } else {
        this.handleDismiss(result.dismiss);
      }
    });
  }

  showLoading() {
    Swal.fire({
      title: 'Guardando...',
      html: 'Por favor espere mientras se guardan los datos.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  saveFile(data: any) {
    this.eventoService.createEvento(data).subscribe(
      response => {
        console.log('Datos guardados:', response);
        Swal.close(); // Cerrar el mensaje de carga
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        console.error('Error al guardar los datos:', error);
        Swal.close(); // Cerrar el mensaje de carga
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un problema con los datos, por favor vuelva a llenar el formulario',
          showConfirmButton: true
        }).then(() => {
          this.openSaveDialog();
        });
      }
    );
  }

  handleDenial() {
    console.log('No se guardó la información');
  }

  handleDismiss(reason: any) {
    console.log('Se canceló el diálogo:', reason);
  }
}
