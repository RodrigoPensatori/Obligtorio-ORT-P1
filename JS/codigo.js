window.addEventListener('load',inicio);

//Veriables Globales
let Admins = new Array();
let Personas = new Array();
let Empresas = new Array();

let CantIntentos = 0;
let UsuarioLogeado;


function inicio()
{
    let AdminPrueba = new Admin("Admin","Admin01");
    Admins.push(AdminPrueba);
    let UsuarioPrueba = new Persona('32131','Admin','Admin','Persona','Persona01');
    Personas.push(UsuarioPrueba);
    let EmpresaPrueba = new Empresa('123','aaaa','PruebaEmpresa','EmpresaAdmin','admin','MOTO');
    Empresas.push(EmpresaPrueba);
    
    document.querySelector('#btnLogin').addEventListener('click',Login);
    document.querySelector('#btnRegistrar').addEventListener('click',MostrarRegistrar);
    document.querySelector('#TipoUsuario').addEventListener('click',SeleccionarTipoUsr);
    document.querySelector('#btnCrearUsr').addEventListener('click',agregarUsuario);
}
/*FUNCIONES GENERALES*/
function Ocultar(componentes)
{
    
    let objOcultar = '';
    for(let i=0;i<componentes.length;i++)
    {
        let letra = componentes[i];
        
        if (letra !=',')
        {
            objOcultar += letra;
        }
        else
        {

            let IdObjOcultar = document.getElementById(objOcultar)
            
            IdObjOcultar.style.display = 'none';
            objOcultar = ''
        }

        if (i + 1 == componentes.length)
        {
            let IdObjOcultar = document.getElementById(objOcultar)
            
            IdObjOcultar.style.display = 'none';
            objOcultar = ''
        }
        
    }
}

function Mostrar(componentes)
{
    let objMostrar = '';
    for(let i=0;i<componentes.length;i++)
    {
        let a = componentes[i];
        
        if (a !=',')
        {
            objMostrar += a;
        }
        else
        {

            let IdObjMostrar = document.getElementById(objMostrar)
            
            IdObjMostrar.style.display = 'block';
            objMostrar = ''
        }

        if (i + 1 == componentes.length)
        {
            let IdObjMostrar = document.getElementById(objMostrar)
            
            IdObjMostrar.style.display = 'block';
            objMostrar = ''
        }
        
    } 
}

function ObtenerTipoDeUsuario(NomUsuario)
{ 
    //Verificar si usuario es Persona
    for(let i=0;i<Personas.length;i++)
    {
        let Usuario = Personas[i];
         
        if (Usuario.Usuario.toUpperCase() == NomUsuario.toUpperCase() )
        {
             
            TipoDeUsuario = 'PERSONA';
             
        }
         
    }
 
 
     
    //Verificar si usuario es Empresa
    for(let i=0;i<Empresas.length;i++)
        {
             
            let Empresa = Empresas[i];
             
            if (Empresa.Usuario.toUpperCase() == NomUsuario.toUpperCase())
            {
                 
                TipoDeUsuario = 'EMPRESA';
                 
            }
            
        }

        if (TipoDeUsuario =='')
        {
            TipoDeUsuario = 'ADMINISTRADOR'
        }
        return TipoDeUsuario;

}




/* REGISTRARSE */

function MostrarRegistrar()
{
   
    Ocultar('divLogin,btnCrearUsr');
    Mostrar('divRegistro');
    
    document.querySelector('#Titulo').innerHTML = 'REGISTRO';
    document.querySelector('#TipoUsuario').value = 'NINGUNO';
}


function SeleccionarTipoUsr()
{
    let TipoUsuario = document.querySelector('#TipoUsuario').value;
   

    switch(TipoUsuario)
    {
        case 'EMPRESA':
            Ocultar('divRegistrarPersona');
            Mostrar('divRegistrarEmpresa,btnCrearUsr');
            break;

        case 'PERSONA':
            Ocultar('divRegistrarEmpresa');
            Mostrar('divRegistrarPersona,btnCrearUsr');
            break;
        
        default:
            Ocultar('divRegistrarEmpresa,divRegistrarPersona,btnCrearUsr');   
            break; 

    }
    

}

function agregarUsuario()
{
    let TipoUsuario = document.querySelector('#TipoUsuario').value;
    
    let Usuario ='';
    
    if(TipoUsuario == 'PERSONA')
    {
        
        Usuario = document.querySelector('#txtNombreUsuarioPersona').value;
        
    }

    if(TipoUsuario == 'EMPRESA')
    {
        Usuario = document.querySelector('#txtNombreDeUsuarioEmpresa').value;
    }


    if(VerificarRegistro(Usuario))
    {
        
        crearUsuario(TipoUsuario)
    }
    else
    {
        document.querySelector('#MensajeRegistro').innerHTML = 'Usuario Invalido.'
    }
    
}

function VerificarRegistro(VerUsuario)
{
    
    let isAgregar = false;
    
    
    //Verificar si usuario a Registrar es Persona
    for(let i=0;i<Personas.length;i++)
    {
        let Usuario = Personas[i];
        
        if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() )
        {
            
            isAgregar =  false;
            
        }
        else
        {
            
            isAgregar =  true;
        }
    }


    //Verificar si usuario a Registrar es Empresa
    if (isAgregar == true)
    {
        
        for(let i=0;i<Empresas.length;i++)
        {
            
            let Empresa = Empresas[i];
            
            if (Empresa.Usuario.toUpperCase() == VerUsuario.toUpperCase())
            {
                
                isAgregar =  false;
                
            }
            else
            {
                
                isAgregar =  true;
            }
        }
    }


    return isAgregar;
}


function crearUsuario(TipoUsuario)
{
    
    if (TipoUsuario == 'PERSONA')
    {
       
        let Documento = document.querySelector('#txtDocumento').value;
        let Nombre = document.querySelector('#txtNombre').value;
        let Apellido = document.querySelector('#txtApellido').value;
        let NombreUsuario = document.querySelector('#txtNombreUsuarioPersona').value;
        let ContraseñaPersona = document.querySelector('#txtContraseñaPersona').value;
        
        if(Documento != '' || Nombre != '' || Apellido != '' || NombreUsuario != '' || ContraseñaPersona != '')
        {
            
            let UsuarioAgregar = new Persona(Documento,Nombre,Apellido,NombreUsuario,ContraseñaPersona);
            Personas.push(UsuarioAgregar);
            alert('Usuario Creado Correctamente.');
            
            
            Ocultar('divRegistro');
            Mostrar('divLogin');
        }
        else
        {
            document.querySelector('#MensajeRegistro').innerHTML = 'Ingrese Todos los campos.'
        }
    }

    if(TipoUsuario == 'EMPRESA')
    {
        let Rut = document.querySelector('#txtRut').value;
        let RazonSocial = document.querySelector('#txtRazonSocial').value;
        let NombreFantasia = document.querySelector('#txtNombreFantasia').value;
        let NombreDeUsuarioEmpresa = document.querySelector('#txtNombreDeUsuarioEmpresa').value;
        let ContraseñaEmpresa = document.querySelector('#txtContraseñaEmpresa').value;
        let TipoVehiculo = document.querySelector('#TipoVehiculo').value;

        if(Rut != '' || RazonSocial != '' || NombreFantasia != '' || NombreDeUsuarioEmpresa != '' || ContraseñaEmpresa != '' || TipoVehiculo != '')
        {
            let EmpresaAgregar = new Empresa(Rut,RazonSocial,NombreFantasia,NombreDeUsuarioEmpresa,ContraseñaEmpresa,TipoVehiculo);
            Empresas.push(EmpresaAgregar);

            alert('Usuario Creado Correctamente.');
            
            
            Ocultar('divRegistro');
            Mostrar('divLogin');
            
        }
        else
        {
            document.querySelector('#MensajeRegistro').innerHTML = 'Ingrese Todos los campos.'
        }

    }

    

}

/*   FIN REGISTRO   */



/* INICIAR SESION  */




    
function Login()
{
    let VerUsuario = document.querySelector('#txtUsuario').value;
    let VerContraseña = document.querySelector('#txtPassword').value;
    
    CantIntentos += 1;

    if(CantIntentos < 5)
    {
        
        isOK = VerificarLogin(VerUsuario,VerContraseña);
        if(isOK)
        {
            
            CantIntentos = 0
            document.querySelector('#Mensaje').innerHTML = 'Correctoo' 
            Ocultar('divLogin');
            Mostrar('divMenu');
            document.querySelector('#Titulo').innerHTML = 'Inicio';

            MostrarMenus();
        }
        else
        {   
            
            switch(CantIntentos)
            {
                case 3:
                    document.querySelector('#IntentosLogin').innerHTML = 'Quedan 2 intentos de Login'
                    break;
                case 4:
                    document.querySelector('#IntentosLogin').innerHTML = 'Queda 1 intentos de Login'
                    break;
                    
            }
            
            document.querySelector('#Mensaje').innerHTML = 'ERROR: Usuario o Contraseña invalidos.' 
        }
    
    }
    else
    {
        document.querySelector('#IntentosLogin').innerHTML = ''
        document.querySelector('#Mensaje').innerHTML = 'ERROR : Maximo numero de intentos superado.'
    } 
    
}

function VerificarLogin(VerUsuario,VerContraseña)
{
    
    let admitido = false;
    
    
    //Verificar si usuario a logearse es Persona
    for(let i=0;i<Personas.length;i++)
    {
        let Usuario = Personas[i];
         
        if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Usuario.Contraseña.toUpperCase() == VerContraseña.toUpperCase())
        {
            
            admitido =  true;
            UsuarioLogeado = Usuario;

        }
        else
        {
            
            admitido =  false;
        }
    }
    
    //Verificar si usuario a logearse es Empresa
    if (admitido == false)
    {
        
        for(let i=0;i<Empresas.length;i++)
        {
                let Empresa = Empresas[i];
            
            if (Empresa.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Empresa.Contraseña.toUpperCase() == VerContraseña.toUpperCase())
            {
                
                admitido =  true;
                UsuarioLogeado = Empresa;
                
            }
            else
            {
                
                admitido =  false;
            }
        }
        //Verificar si usuario a logearse es Admin
    for(let i=0;i<Admins.length;i++)
    {
        let Usuario = Admins[i];
         
        if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Usuario.Contraseña.toUpperCase() == VerContraseña.toUpperCase())
        {
            
            admitido =  true;
            UsuarioLogeado = Usuario;

        }
        else
        {
            
            admitido =  false;
        }
    }

    }

    
    return admitido;

}

/* FIN INICIAR SESION  */


/*MENU*/

function MostrarMenus()
{

    
    switch(UsuarioLogeado.TipoUsuario)
            {
                case 0:

                    Ocultar("divMenuEmpresa,divMenuPersona");//Admin
                    break;
                case 1:
                
                    Ocultar('divMenuEmpresa,divMenuAdmin');//PERSONA
                    break;
                
                case 2:
                    Ocultar('divMenuPersona,divMenuAdmin');//ESMPRESA
                    break;

               // case 'ADMINISTRADOR':
                 //   Ocultar('divMenuPersona,divMenuEmpresa')   
                   // break;
            
            }




}