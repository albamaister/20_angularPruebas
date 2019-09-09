import { Jugador } from './clase';

describe( 'pruebas de clase', () => {
    let jugador = new Jugador();

    // beforeAll(); antes de que se ejecute las pruebas
    // beforeEach(); se ejecuta despues de cada una de las pruebas
    // afterAll(); se ejecuta cuando todas las pruebas se finalizan
    // afterEach(); se ejecuta antes de cada prueba

    beforeAll(() => {
        // console.log('beforeAll');
    });
    beforeEach(() => {
        // console.log('beforeEach');
        jugador = new Jugador();
    });
    afterAll(() => {
        // console.log('afterAll');
    });
    afterEach(() => {
        // console.log('afterEach');
    });




    it('Debe de retornar 80 de hp, si recibe 20 de danio', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });


    it('Debe de retornar 50 de hp, si recibe 50 de danio', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
} );
