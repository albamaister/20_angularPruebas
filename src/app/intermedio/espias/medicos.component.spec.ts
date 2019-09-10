import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from} from 'rxjs/index';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {

        componente = new MedicosComponent(servicio);

    });


    it('Init: debe de cargar los medicos', () => {
        // instruccion que permite hacer peticiones falsas cuando algo suceda.
        // aqui se espia a servicio y cuando alquien llame al getMedicos se va a llamar y ejecutar
        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [medicos] );
        } );

        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);


    });


});
