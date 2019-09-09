import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {
    it('Debe de retoenar almenos 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir megaman y ultrom', () => {
        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Jarvis');
    });
});
