class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre,
        this.sueldo = sueldo
    }

    obtenerDetalles(){
        return ` Empleado: nombre: ${this.nombre}, sueldo ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento = departamento;

    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto : ${this.departamento}`
    }
}
let empleado1= new Empleado( 'Ernesto Arrieta', 145000);
console.log(empleado1.obtenerDetalles()) 

let gerente1 = new Gerente ( 'Carlos Fernandez', 200000, 'Sistemas');
console.log(gerente1)