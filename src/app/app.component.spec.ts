import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  it('Debe de tener un router-outet', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive( RouterOutlet ));

    expect(debugElement).not.toBeNull();

  });

  it('Debe de tener un link a la pagina de metodos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;
    for (const elem of debugElements) {
      if ( elem.attributes['routerLink'] === '/medicos' ) {
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy();
  });

});
