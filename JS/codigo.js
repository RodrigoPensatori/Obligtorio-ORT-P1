window.addEventListener('load',inicio);

//Veriables Globales
let Admins = new Array();
let Personas = new Array();
let Empresas = new Array();
let Pedidos = new Array();

let AdminPrueba = new Admin("Admin","Admin01");
Admins.push(AdminPrueba);
let UsuarioPrueba = new Persona('32131','Admin','Admin','Persona','Persona01');
Personas.push(UsuarioPrueba);
let UsuarioPrueba2 = new Persona('32131','Admin','Admin','Persona2','Persona01');
Personas.push(UsuarioPrueba2);
let EmpresaPrueba = new Empresa('123','aaaa','PruebaEmpresa','Empresa','123','MOTO');
Empresas.push(EmpresaPrueba);
let PedidoPrueba = new Pedido('Persona','MOTO','1000','PRUEBA','A','Empresa');
Pedidos.push(PedidoPrueba);
let PedidoPrueba2 = new Pedido('Persona2','MOTO','1000','PRUEBA','A','Empresa');
Pedidos.push(PedidoPrueba2);
Pedidos.push(PedidoPrueba2);
let PedidoPrueba3 = new Pedido('Admin3','MOTO','1000','PRUEBA','A','Empresaaaa');
Pedidos.push(PedidoPrueba3);

let CantIntentos = 0;
let UsuarioLogeado;


function inicio()
{
   
    

    document.querySelector('#btnLogin').addEventListener('click',Login);
    document.querySelector('#btnRegistrar').addEventListener('click',MostrarRegistrar);
    document.querySelector('#btnVolver').addEventListener('click',VolverAlMenu);
    document.querySelector('#btnSalir').addEventListener('click',Salir);
    document.querySelector('#TipoUsuario').addEventListener('click',SeleccionarTipoUsr);
    document.querySelector('#btnCrearUsr').addEventListener('click',agregarUsuario);
    document.querySelector('#btnMenuEmpresaVerSolicitudesPend').addEventListener('click',MostrarEmpresaSolicitudesPendientes);
    document.querySelector('#btnMenuEmpresaVerEstadistica').addEventListener('click',MostrarEmpresaEstadisticas);
    document.querySelector('#btnBuscarEmpresaPedidos').addEventListener('click',ObtenerCantidadDeEnviosPorEstado);
    document.querySelector('#btnMenuEmpresaVerSolicitudesEnTransito').addEventListener('click',MostrarEmpresaSolicitudesEnTransito);
    
    
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

// function ObtenerTipoDeUsuario(NomUsuario)
// { 
//     //Verificar si usuario es Persona
//     for(let i=0;i<Personas.length;i++)
//     {
//         let Usuario = Personas[i];
         
//         if (Usuario.Usuario.toUpperCase() == NomUsuario.toUpperCase() )
//         {
             
//             TipoDeUsuario = 'PERSONA';
             
//         }
         
//     }
 
 
     
//     //Verificar si usuario es Empresa
//     for(let i=0;i<Empresas.length;i++)
//         {
             
//             let Empresa = Empresas[i];
             
//             if (Empresa.Usuario.toUpperCase() == NomUsuario.toUpperCase())
//             {
                 
//                 TipoDeUsuario = 'EMPRESA';
                 
//             }
            
//         }

//         if (TipoDeUsuario =='')
//         {
//             TipoDeUsuario = 'ADMINISTRADOR'
//         }
//         return TipoDeUsuario;

// }

function VolverAlMenu()
{
    Ocultar('divEmpresaVerSolicitudes,divEmpresaVerSolicitudesTomadas,divEmpresaVerEstadisticas');
    Mostrar('divMenu')
    MostrarMenus();
}

function Salir()
{
    UsuarioLogeado ='';
    Ocultar('divMenu,divEmpresaVerSolicitudes,divEmpresaVerSolicitudesTomadas,divEmpresaVerEstadisticas');
    Mostrar('divLogin,btnVolver,btnSalir');
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
    
    let NomUsuario ='';
    let PswUsuario ='';
    
    if(TipoUsuario == 'PERSONA')
    {
        
        NomUsuario = document.querySelector('#txtNombreUsuarioPersona').value;
        PswUsuario = document.querySelector('#txtContraseñaPersona').value;
        
    }

    if(TipoUsuario == 'EMPRESA')
    {
        NomUsuario = document.querySelector('#txtNombreDeUsuarioEmpresa').value;
        PswUsuario = document.querySelector('#txtContraseñaEmpresa').value;
    }


    if(VerificarRegistro(NomUsuario,PswUsuario,TipoUsuario))
    {
        
        crearUsuario(TipoUsuario)
    }
    
    
}

function VerificarRegistro(VerUsuario,PswUsuario,TipoUsuario)
{
    
    let isAgregar = false;
    isAgregar = VerificarContraseña(PswUsuario);
    
    if(isAgregar == true)
    {
        let auxRut = '';
        let auxRazonSocial = '';
        
        if (TipoUsuario == 'EMPRESA')
        {
            auxRut = document.querySelector('#txtRut').value;
            auxRazonSocial = document.querySelector('#txtRazonSocial').value;
        }
        
        
        //Verificar si usuario a Registrar es Persona
        for(let i=0;i<Personas.length;i++)
        {
            let Usuario = Personas[i];
            
            if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() )
            {
                
                isAgregar =  false;
                document.querySelector('#MensajeRegistro').innerHTML = 'Usuario Invalido.'
                break;
                
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
                
                if (Empresa.Usuario.toUpperCase() == VerUsuario.toUpperCase() || Empresa.Rut == auxRut || Empresa.RazonSocial == auxRazonSocial)
                {
                    
                    isAgregar =  false;
                    document.querySelector('#MensajeRegistro').innerHTML = 'Usuario Invalido.'
                    break;
                    
                }
                else
                {
                    
                    isAgregar =  true;
                }
            }
        }
    }
    
    else
    {
        document.querySelector('#MensajeRegistro').innerHTML = 'Contraseña Invalida : La contraseña debe tener UNA Mayuscula,UNA Minuscula y un Numero.'
    }

    return isAgregar;
}

function VerificarContraseña(PswUsuario)
{
    isContraseñaValida = false;
    
    if (/[a-z]/.test(PswUsuario) && /[A-Z]/.test(PswUsuario) && /[0-9]/.test(PswUsuario))
    {
        isContraseñaValida = true;    
    }
    else
    {
        isContraseñaValida = false;
    }

    return isContraseñaValida;
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
            let EmpresaAgregar = new Empresa(Rut,RazonSocial,NombreFantasia,NombreDeUsuarioEmpresa,ContraseñaEmpresa,TipoVehiculo,2);
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
            
            Ocultar('divLogin');
            Mostrar('divMenu,btnVolver,btnSalir');
            

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
         
        if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Usuario.Contraseña == VerContraseña)
        {
            
            admitido =  true;
            UsuarioLogeado = Usuario;
            break;

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
            
            if (Empresa.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Empresa.Contraseña == VerContraseña && Empresa.Estado == 'A')
            {
                
                admitido =  true;
                UsuarioLogeado = Empresa;
                break;
                
            }
            else
            {
                
                admitido =  false;
            }
        }

        if (admitido == false)
        {
            //Verificar si usuario a logearse es Admin
            for(let i=0;i<Admins.length;i++)
            {
                let Usuario = Admins[i];
                
                if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Usuario.Contraseña == VerContraseña)
                {
                    
                    admitido =  true;
                    UsuarioLogeado = Usuario;
                    break;

                }
                else
                {
                    
                    admitido =  false;
                }
            }
        }
    
    }

    
    return admitido;

}

/* FIN INICIAR SESION  */


/*MENU*/

function MostrarMenus()
{

    document.querySelector('#Titulo').innerHTML = 'Inicio';
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
                    Mostrar('divMenuEmpresa');
                    break;

            
            }




}

function MostrarEmpresaSolicitudesPendientes()
{
    document.querySelector('#Titulo').innerHTML = 'Solicitudes Pendientes';
    document.querySelector('#divEmpresaVerSolicitudes').innerHTML =''
    Ocultar('divMenu');
    Mostrar('divEmpresaVerSolicitudes');

    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        
        if(Pedido.Estado == 'PENDIENTE')
        {
        
            document.querySelector('#divEmpresaVerSolicitudes').innerHTML +=  "<div class ='rectangulogris'>Nombre<label class='texto'> " + Pedido.UsuarioDePedido +"</label class='texto'> Distancia<label class='texto'> " + Pedido.Distancia +"</label> <input type='button' name='Boton' class='boton' id='btnCrearUsr' value='Asignar'></div>";

        }
        
        
    }

}

function MostrarEmpresaEstadisticas()
{
    document.querySelector('#EmpresaEstadoEstadisticas').innerHTML ='';
    document.querySelector('#EmpresaCanidadEstadisticas').innerHTML = '';
    Ocultar('CantidadPedidosPorEstado');
    document.querySelector('#Titulo').innerHTML = 'Estadisticas';
    document.querySelector('#lblUsuarioConMasPedidos').innerHTML ='Usuario/s con mas Envios: ';
    
    Ocultar('divMenu');
    Mostrar('divEmpresaVerEstadisticas');

    let NombrePersonaConMasEnvios = ObtenerNombreDePersonaConMasEnvios();
    console.log(NombrePersonaConMasEnvios);
    
    let NombrePersonaConMasEnviosCorregido = new Set(NombrePersonaConMasEnvios);
    
    

    for(let item of NombrePersonaConMasEnviosCorregido)
    {
        document.querySelector('#lblUsuarioConMasPedidos').innerHTML += item +'  ';
    }

    

}

function ObtenerNombreDePersonaConMasEnvios()
{
    let contador = 0;
    let CantEnvios=0;
    let NomDelUsuario = new Array();
    
    for(let i=0;i<Personas.length;i++)
    {
        let ObjPersona = Personas[i];
        contador = 0;
        
            for(let i=0;i<Pedidos.length;i++)
            {
                let VerificarPedido = Pedidos[i];
                console.log('----------------');
                console.log('ObjPersona.Usuario ' + ObjPersona.Usuario);
                console.log('VerificarPedido.UsuarioDePedido ' + VerificarPedido.UsuarioDePedido);
                console.log('VerificarPedido.EmpresaEncargada ' + VerificarPedido.EmpresaEncargada);
                console.log('UsuarioLogeado.Usuario ' + UsuarioLogeado.Usuario);

                if(ObjPersona.Usuario == VerificarPedido.UsuarioDePedido && VerificarPedido.EmpresaEncargada == UsuarioLogeado.Usuario)
                {
                    console.log('ENTRE') 
                    contador +=1
        
                }
                        
                       
            }
            
            console.log('contador ' + contador)
            console.log('CantEnvios ' + CantEnvios)
            
            if (contador > CantEnvios)
            {
                CantEnvios = contador;
                NomDelUsuario = [];
                NomDelUsuario.push(ObjPersona.Usuario);
            }

            if(contador == CantEnvios)
            {
                
                NomDelUsuario.push(ObjPersona.Usuario);
            }

        
                
               
    }

    return NomDelUsuario;
    

}

function ObtenerCantidadDeEnviosPorEstado()
{
    
    


    let FiltroEstado = document.querySelector('#PedidosEmpresaEstado').value;
    let contador = 0;
    for(let i=0;i<Pedidos.length;i++)
    {
        let PedidoAVerificar = Pedidos[i];

        if (PedidoAVerificar.EmpresaEncargada == UsuarioLogeado.Usuario && PedidoAVerificar.Estado == FiltroEstado)
        {
            
            contador++;
        }

    }
    Mostrar('CantidadPedidosPorEstado');
    document.querySelector('#EmpresaEstadoEstadisticas').innerHTML = FiltroEstado;
    document.querySelector('#EmpresaCanidadEstadisticas').innerHTML = contador;
}

function MostrarEmpresaSolicitudesEnTransito()
{
    document.querySelector('#Titulo').innerHTML = 'Solicitudes Tomadas';
    Ocultar('divMenu');
    Mostrar('divEmpresaVerSolicitudesTomadas');

    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        console.log('Pedido.Estado' + Pedido.Estado);
        console.log('Pedido.EmpresaEncargada ' + Pedido.EmpresaEncargada);
        if(Pedido.Estado == 'EN TRANSITO' && Pedido.EmpresaEncargada == UsuarioLogeado.Usuario)
        {
            console.log('ENTRE')
            document.querySelector('#divEmpresaVerSolicitudesTomadas').innerHTML +=  "<div class ='rectangulogris'>Nombre<label class='texto'> " + Pedido.UsuarioDePedido +"</label class='texto'> Distancia<label class='texto'> " + Pedido.Distancia +"</label> <input type='button' name='Boton' class='boton' id='btnCrearUsr' value='Finalizar'></div>";

        }
        
        
    }
}