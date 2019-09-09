import { mensaje } from './string';


// describe('Pruebas de strings'); // sirve para agrupar pruebas


// it('Debe de regresar un string'); // es una prueba, es para hacer una evalucion

describe('Pruebas de string', () => {
    it( 'Debe de regresar un string', () => {
        // aqui se debe disparar el codigo necesario pra evaluar la funcion
        // para usar la funcion, se debe de importar
        const resp = mensaje('Andres');

        expect(  typeof resp ).toBe('string'); // evaluar que sea un string

    } );


    it( 'Debe de retorna un saludo con el nombre enviado', () => { // 
        // aqui se debe disparar el codigo necesario pra evaluar la funcion
        // para usar la funcion, se debe de importar
        const nombre = 'Juan';
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre); // la prueba va a pasar si ese es el resultado

    } );
});