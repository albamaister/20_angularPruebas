import { TestBed, ComponentFixture } from '@angular/core/testing';

// ComponentFixture nos va a permitir controlar o tener acceso a todo el html

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico componet', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [HttpClientModule]
        });
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it( 'Debe de crearse el componente', () => {

        expect(component).toBeTruthy();

    });


    it( 'Debe de retornar el nombre del medico', () => {

        const nombre = 'Juan';
        const res = component.saludarMedico( nombre );

        expect(res).toContain(nombre);

    });
});
