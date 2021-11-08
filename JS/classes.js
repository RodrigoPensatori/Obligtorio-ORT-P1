
class Persona
{
    constructor(Documento,Nombre,Apellido,Usuario, Contraseña)
     {
        this.TipoUsuario = 1;
        this.Documento = Documento;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Usuario = Usuario;
        this.Contraseña = Contraseña;
        
    }
    
}


class Empresa
{
    constructor(Rut,RazonSocial,NomFantasia,Usuario, Contraseña,TipoVehiculo)
     {
        this.TipoUsuario = 2;
        this.Rut = Rut;
        this.RazonSocial = RazonSocial;
        this.NomFantasia = NomFantasia;
        this.Usuario = Usuario;
        this.Contraseña = Contraseña;
        this.TipoVehiculo = TipoVehiculo;
        this.Estado = 'A';
        
        
    }
    
}

class Admin
{
    constructor(Usuario,Contraseña)
    {
        this.TipoUsuario = 0;
        this.Usuario = Usuario;
        this.Contraseña = Contraseña;
    }
}

class Pedido
{
    constructor(Usuario,TipoDeVehiculo,Distancia,Descripcion,foto,Empresa)
    {
        this.UsuarioDePedido = Usuario;
        this.TipoDeVehiculo = TipoDeVehiculo;
        this.Distancia = Distancia;
        this.Descripcion = Descripcion;
        this.foto = foto;
        this.Estado = 'PENDIENTE';
        this.EmpresaEncargada = Empresa;
    }
}

class Vehiculo
{
    constructor(Id,Nombre)
    {
        this.Id = Id;
        this.NombreVehiculo=Nombre;
    }
}