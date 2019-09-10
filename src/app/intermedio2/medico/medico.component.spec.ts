import { TestBed, ComponentFixture } from '@angular/core/testing';

// ComponentFixture nos va a permitir controlar o tener acceso a todo el html

import { MedicoComponent } from './medico.component';


describe('Medico componet', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ]
        });
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it( '', () => {

    });
});
