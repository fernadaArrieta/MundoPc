
class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca
    }

    get tipoEntrada(){
        
        return this._tipoEntrada;
       
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        
        return this._marca;
       
    }
    set marca(marca){
        this._marca = marca
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super( tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
        
    }
    toString(){
        return `Raton: [ idRaton : ${this._idRaton}, tipoEntrada: ${ this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1= new Raton( 'USB', 'HP');
console.log(raton1.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return ` Teclado: ¨[ idTeclado: ${this._idTeclado}, tipoEntrada: ${ this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado('mecanico', 'Exo');
console.log(teclado1.toString())

class Monitor {
    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++ Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;        
    }
 get idMonitor(){
    return this._idMonitor;
 }
 get marca(){
     return this._marca;
 }
 set marca(marca){
    this._marca = marca;
 }
 get tamaño(){
    return this._tamaño;
 }
 set tamaño(tamaño){
    this._tamaño = tamaño
 }

 toString(){
    return ` Monitor[idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}] `
 }
    
}

let monitor1 = new Monitor('LG', '19 pulgadas');
console.log(monitor1.toString());
let monitor2 = new Monitor('HP', '27 pulgadas');
console.log(monitor2.toString())

class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, monitor,teclado, raton){
        this._idComoputadora = ++ Computadora.contadorComputadora,
        this._nombre = nombre,
        this._monitor = monitor,
        this._teclado = teclado,
        this._raton = raton
    }

    toString(){
        return ` Computadora[ idComputadora: ${this._idComoputadora}, nombre: ${this._monitor} \n monitor: ${this._monitor} \n ${this._teclado} \n raton: ${this._raton}]`

    }
}

let computadora1 = new Computadora('Hp', monitor1, teclado1, raton1)
console.log(`${computadora1}`) 

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes,
        this._computadoras = []
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden ='';
        for(let computadora of this._computadoras){
            computadorasOrden += ` \n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, computadoras: ${this._computadoras}`)
    }
}
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden()