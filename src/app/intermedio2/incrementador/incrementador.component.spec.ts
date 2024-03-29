import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        // Obteniendo el elemento html del fixure que es el elemento compilado de angular

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el imput el valor de progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input') );

            const elem = input.nativeElement;

            expect(elem.value).toBe('55');
        });

    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);

        expect(component.progreso).toBe(50);
    });


    it('Debe de mostar la progreso en el titulo', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges(); // disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        // Obteniendo el elemento html del fixure que es el elemento compilado de angular

        expect( elem.innerHTML ).toContain('45');

    });

});
