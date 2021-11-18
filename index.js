//desafio alumno Martin Flecha
//Simulador cajero de un banco
//Teniendo en cuenta que en operaciones de depositos y extraccion los atributos son los mismos, creo una interfaz cajero con 3 propiedades y 1 método con sus respectivos tipados
//Luego creo las 2 clases Extraccion y Deposito donde se diferencian mayormente en el método imprimir
var Extraccion = /** @class */ (function () {
    function Extraccion(p, t, m) {
        this.pin = p;
        this.tipoCuenta = t;
        this.monto = m;
    }
    Extraccion.prototype.imprimir = function () {
        console.log("Usuario:" + this.pin + ", TipoCuenta:" + this.tipoCuenta + ", extrae $" + this.monto + ".");
    };
    return Extraccion;
}());
var Deposito = /** @class */ (function () {
    function Deposito(p, t, m) {
        this.pin = p;
        this.tipoCuenta = t;
        this.monto = m;
    }
    Deposito.prototype.imprimir = function () {
        console.log("Usuario:" + this.pin + ", TipoCuenta:" + this.tipoCuenta + ", deposita $" + this.monto + ".");
    };
    return Deposito;
}());
//creo diferentes instancias
var extraccion1 = new Extraccion(1111, 'cuenta corriente', 1000);
extraccion1.imprimir();
//Usuario:1111, TipoCuenta:cuenta corriente, extrae $1000.
var extraccion2 = new Extraccion(2222, 'caja de ahorro', 2000);
extraccion2.imprimir();
//Usuario:2222, TipoCuenta:caja de ahorro, extrae $2000.
var deposito1 = new Deposito(3333, 'cuenta corriente', 3000);
deposito1.imprimir();
//Usuario:3333, TipoCuenta:cuenta corriente, deposita $3000.
var deposito2 = new Deposito(4444, 'caja de ahorro', 4000);
deposito2.imprimir();
//Usuario:4444, TipoCuenta:caja de ahorro, deposita $4000.
