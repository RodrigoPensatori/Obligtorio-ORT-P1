
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
        this.Estado = 1;
        this.Algo = 1;
        this.actualizacion = 0;
        
        
    }
    
}

