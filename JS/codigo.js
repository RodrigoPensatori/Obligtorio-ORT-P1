window.addEventListener('load',inicio);

//Veriables Globales
let Admins = new Array();
let Personas = new Array();
let Empresas = new Array();
let Pedidos = new Array();
let Vehiculos = new Array();

let AdminPrueba = new Admin("Admin","Admin01");
Admins.push(AdminPrueba);
let UsuarioPrueba = new Persona('321321','RICARDO','PEPE','Admin3','Persona01');
Personas.push(UsuarioPrueba);
let UsuarioPrueba2 = new Persona('32132','JOSE','LORES','PersonaPRUEBA','Persona01');
Personas.push(UsuarioPrueba2);
let EmpresaPrueba = new Empresa('1234','aaa','PruebaEmpresa','Empresa','123','1');
Empresas.push(EmpresaPrueba);
let EmpresaPrueba2 = new Empresa('123','aaaa','PruebaEmpresa','Empresa2','123','1');
Empresas.push(EmpresaPrueba2);
let EmpresaPrueba3 = new Empresa('123','aaaa','PruebaEmpresa','Empresa2','123','1');
Empresas.push(EmpresaPrueba3);
let PedidoPrueba = new Pedido('PersonaPRUEBA','2','1000','PRUEBA','moto.jpg','Empresa');
Pedidos.push(PedidoPrueba);
let PedidoPrueba2 = new Pedido('Persona2','1','1000','PRUEBA','moto3.jpg','Empresa');
Pedidos.push(PedidoPrueba2);
let PedidoPrueba3 = new Pedido('Admin3','1','1000','PRUEBA','auto.jpg','Empresaaaa');
Pedidos.push(PedidoPrueba3);
let Vehiculo1 = new Vehiculo('1','MOTO');
Vehiculos.push(Vehiculo1);
let Vehiculo2 = new Vehiculo('2','AUTO');
Vehiculos.push(Vehiculo2);

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
    document.querySelector('#btnMenuPersonaRealizarEnvios').addEventListener('click',RealizarEnvioInter);
    document.querySelector('#btnReliazarEnvio').addEventListener('click',RealizarEnvio);
    document.querySelector('#btnMenuPersonaVerMisEnvios').addEventListener('click',ListadeEnvios);
    document.querySelector('#btnMostrar').addEventListener('click',armarlistaEnvios);
    document.querySelector('#btnMenuAdminCrearVehiculos').addEventListener('click',MostrarVehiculos);
    document.querySelector('#btnMostrarAgregarVehiculo').addEventListener('click',MostrarAgregarVehiculos);
    document.querySelector('#btnCrearVehiculo').addEventListener('click',AgregarVehiculo);
    document.querySelector('#btnMenuPersonaVerEstadistica').addEventListener('click',EstadisticaPersona);
    document.querySelector('#btnMenuAdminVerEstadistica').addEventListener('click',MostrarEstadisticaAdmin);
    document.querySelector('#btnMenuAdminAdministrarEmp').addEventListener('click',MostrarVerEmpresas);
    document.querySelector('#btnBuscarEmpresas').addEventListener('click',ListaDeEmpresas);

    
    DivAdminVerEstadisticas

    
    
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

function VolverAlMenu()
{
    Ocultar('divEmpresaVerSolicitudes,divEmpresaVerSolicitudesTomadas,divEmpresaVerEstadisticas,realizarEnvio,ListadoEnvios,DivAdminVehiculos,DivAdminCrearVehiculos,InformacionEstadistica,DivAdminVerEstadisticas,deshabilitarHabilitar');
    Mostrar('divMenu')
    MostrarMenus();
}

function Salir()
{
    UsuarioLogeado ='';
    Ocultar('btnVolver,btnSalir,divMenu,divEmpresaVerSolicitudes,divEmpresaVerSolicitudesTomadas,divEmpresaVerEstadisticas,realizarEnvio,ListadoEnvios,DivAdminVehiculos,DivAdminCrearVehiculos,InformacionEstadistica,DivAdminVerEstadisticas,deshabilitarHabilitar');
    Mostrar('divLogin');
    document.querySelector('#Titulo').innerHTML = 'INICIAR SESIÓN';
}

function CargarTipoVehiculos(IdCombo)
{
    for(let i=0;i<Vehiculos.length;i++)
    {
        let Vehiculo = Vehiculos[i];
        
        
        document.querySelector("#" +IdCombo).innerHTML += '<option value=' + Vehiculo.Id + '>' + Vehiculo.NombreVehiculo+"</option>"; 
       
        
    }
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
            document.querySelector('#TipoVehiculo').innerHTML='';
            CargarTipoVehiculos('TipoVehiculo');
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
            
            if (Empresa.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Empresa.Contraseña == VerContraseña && Empresa.Estado == 'H')
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
                    Mostrar('divMenuAdmin');
                    break;
                case 1:
                
                    Ocultar('divMenuEmpresa,divMenuAdmin');//PERSONA
                    Mostrar('divMenuPersona');
                    break;
                
                case 2:
                    Ocultar('divMenuPersona,divMenuAdmin');//ESMPRESA
                    Mostrar('divMenuEmpresa');
                    break;

            
            }




}

//EMPRESA
function MostrarEmpresaSolicitudesPendientes()
{
    document.querySelector('#Titulo').innerHTML = 'Solicitudes Pendientes';
    document.querySelector('#divEmpresaVerSolicitudes').innerHTML =''
    Ocultar('divMenu');
    Mostrar('divEmpresaVerSolicitudes');

    //Crear Pedido
    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        
        if(Pedido.Estado == 'PENDIENTE' && UsuarioLogeado.TipoVehiculo == Pedido.TipoDeVehiculo)
        {
            let NombreApe = ObtenerNombreMasApellidoDeUsurio(Pedido.UsuarioDePedido);
            document.querySelector('#divEmpresaVerSolicitudes').innerHTML +=  "<div class ='rectangulogris'>Nombre<label class='texto'> " + NombreApe +"</label class='texto'> Distancia<label class='texto'> " + Pedido.Distancia +"</label><img src='imagenes/"+Pedido.foto+"'width=100px>" + " <input type='button' name='Boton' class='boton' id='btnAsignar"+ i +"'"+" value='Asignar'></div>";
           
        }
        
        
    }
    
    //Agregar evento
    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        
        if(Pedido.Estado == 'PENDIENTE' && UsuarioLogeado.TipoVehiculo == Pedido.TipoDeVehiculo)
        {
        
            document.querySelector('#btnAsignar' + i).addEventListener('click',()=> AsignarPedidoAEmpresa(i));
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
    document.querySelector('#divEmpresaVerSolicitudesTomadas').innerHTML =''
    Ocultar('divMenu');
    Mostrar('divEmpresaVerSolicitudesTomadas');

    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        
        if(Pedido.Estado == 'EN TRANSITO' && Pedido.EmpresaEncargada == UsuarioLogeado.Usuario)
        {
            let NombreApe = ObtenerNombreMasApellidoDeUsurio(Pedido.UsuarioDePedido);
            document.querySelector('#divEmpresaVerSolicitudesTomadas').innerHTML +=  "<div class ='rectangulogris'>Nombre<label class='texto'> " + NombreApe +"</label class='texto'> Distancia<label class='texto'> " + Pedido.Distancia +"</label>" +"</label class='texto'> Estado<label class='texto'> " + Pedido.Estado +"</label><img src='imagenes/"+Pedido.foto+"'width=100px>" + "<input type='button' name='Boton' class='boton' id='btnFinalizarPedido"+i+"'"+ " value='Finalizar'></div>";
        }
        
        
    }

    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        
        if(Pedido.Estado == 'EN TRANSITO' && Pedido.EmpresaEncargada == UsuarioLogeado.Usuario)
        {
           
            document.querySelector('#btnFinalizarPedido' + i).addEventListener('click',()=>FinalizarPedido(i));
        }
        
        
    }
}

function AsignarPedidoAEmpresa(i)
{
    console.log('ENTRO CON ' + i)
   
    let PedidoAModificar = Pedidos[i];

    PedidoAModificar.Estado = 'EN TRANSITO';
    PedidoAModificar.EmpresaEncargada = UsuarioLogeado.Usuario;
    MostrarEmpresaSolicitudesPendientes();
}

function FinalizarPedido(i)
{
    console.log('ENTRO CON ' + i)
   
    let PedidoAModificar = Pedidos[i];

    PedidoAModificar.Estado = 'FINALIZADA';
    MostrarEmpresaSolicitudesEnTransito();
}

function ObtenerNombreMasApellidoDeUsurio(Usuario)
{
    
    let NombreApe ='';
    for(let i=0;i<Personas.length;i++)
    {
        let ObjPersona = Personas[i];
        
        if (ObjPersona.Usuario == Usuario)
        {
            NombreApe = ObjPersona.Nombre +' '+ObjPersona.Apellido;
        }
        
    }
    return NombreApe;

}


//ADMINISTRADOR

function MostrarVehiculos()
{
    document.querySelector('#Titulo').innerHTML = 'Vehiculos';
    document.querySelector('#divListaVehiculos').innerHTML =''
    Ocultar('divMenu');
    Mostrar('DivAdminVehiculos');
    for(let i=0;i<Vehiculos.length;i++)
    {
        let Vehiculo = Vehiculos[i];
        
        
        document.querySelector('#divListaVehiculos').innerHTML +=  "<div class ='rectangulogris'>Id : <label class='texto'> " + Vehiculo.Id +" </label class='texto'> Nombre de Vehiculo : <label class='texto'> " + Vehiculo.NombreVehiculo +"</label> </div>";
        
       
        
    }
}

function UltimoIdVehiculo()
{
    let UltIdVehiculo = 0;
    for(let i=0;i<Vehiculos.length;i++)
    {
        let Vehiculo = Vehiculos[i];
 
        UltIdVehiculo = Number(Vehiculo.Id);
        
    }
    UltIdVehiculo +=1 ;
    return UltIdVehiculo;

}


function MostrarAgregarVehiculos()
{
    
    Ocultar('DivAdminVehiculos');
    Mostrar('DivAdminCrearVehiculos');
    document.querySelector('#txtCrearNombreVehiculo').value ='';
    document.querySelector('#lblIdCrearVehiculo').innerHTML ='ID';
    document.querySelector('#MensajeCrearVehiculo').innerHTML ='';
    
    let UltimoIdVehiculoAgregar =  UltimoIdVehiculo();
    document.querySelector('#lblIdCrearVehiculo').innerHTML += ' ' + UltimoIdVehiculoAgregar ;
}

function AgregarVehiculo()
{
    let IdNewVehiculo = UltimoIdVehiculo();
    let NombreNewVehiculo = document.querySelector('#txtCrearNombreVehiculo').value;
    let NewVehiculo = new Vehiculo(IdNewVehiculo,NombreNewVehiculo);
    Vehiculos.push(NewVehiculo);
    document.querySelector('#MensajeCrearVehiculo').innerHTML='Vehiculo Creado.';
}

function MostrarEstadisticaAdmin()
{
    Ocultar('divMenu');
    Mostrar('DivAdminVerEstadisticas');
    document.querySelector('#DivAdminVerEstadisticas').innerHTML='';
    document.querySelector('#Titulo').innerHTML = 'Estadisticas';
    for(let i=0;i<Empresas.length;i++)
    {
        let AuxEmpresa = Empresas[i];
        let EmpresaKilometros = 0;   
        for(let i=0;i<Pedidos.length;i++)
        {
            let AuxPedido = Pedidos[i];
            
            if(AuxPedido.EmpresaEncargada == AuxEmpresa.Usuario && AuxPedido.Estado == 'FINALIZADA')
            {

                EmpresaKilometros += Number(AuxPedido.Distancia);

            }
        
            
        }
        document.querySelector('#DivAdminVerEstadisticas').innerHTML +=  "<div class ='rectangulogris'> Empresa : <label class='texto'> " + AuxEmpresa.Usuario +" </label class='texto'> Kilometros : <label class='texto'> " + EmpresaKilometros +"</label> </div>";
    }
}

//cambiar estado de empresa
function MostrarVerEmpresas()
{
    Ocultar('divMenu');
    Mostrar('deshabilitarHabilitar');
    document.querySelector('#Titulo').innerHTML = 'Gestión de Empresas';

    
    document.querySelector("#listadoEmpresas").innerHTML = "";
}


function ListaDeEmpresas()
{
    document.querySelector("#listadoEmpresas").innerHTML = "";
    let divEmpresas = "";
    let NombreEmpresaBuscar = document.querySelector('#txtBuscarEmpresas').value;
    for(let i = 0;i< Empresas.length;i++)
    {
      let unaEmpresa = Empresas[i];
      if (unaEmpresa.RazonSocial.includes(NombreEmpresaBuscar) || unaEmpresa.NomFantasia.includes(NombreEmpresaBuscar))
        {
            divEmpresas ="<div  class = posicionDiv>";
            let tableHTML = "<table border = '10'>";
            tableHTML += "<tr><tr><th>Rut</th><th>Razon Social</th><th>NombreDeFantasia</th><th>Estado</th></tr>";
            divEmpresas+= tableHTML += "<td>"+ unaEmpresa.Rut +"</td> <td>"+ unaEmpresa.RazonSocial+"</td> <td>"+unaEmpresa.NomFantasia+"</td> <td>"+unaEmpresa.Estado+ "</td></tr>" + "<br>";
            

            if(unaEmpresa.Estado == "H")
            {
                divEmpresas+= "<input id='Emp"+i+"' type='button' value='Deshabilitar'>";	
            }

            else
            {
                divEmpresas+= "<input id='Emp"+i+"' type='button' value='Habilitar'>";
            }
            tableHTML += "</table>"
            document.querySelector("#listadoEmpresas").innerHTML += divEmpresas + "<br>";
            divEmpresas += "</div>";
      
        
      

    
            for (let pos = 0; pos<Empresas.length;pos++)
            {
                let boton = document.querySelector("#Emp"+pos);
                if(boton != null)
                {
                    document.querySelector("#Emp"+pos).addEventListener("click",cambiarEstadoEmpresa);
                }
            }
        }    
    }
}    

function cambiarEstadoEmpresa()
{
    let botton = this;
    let poscicion = parseInt(botton.id.substring(3));
    let unaEmpresa = Empresas[poscicion];

    if(unaEmpresa.Estado == "H")
    {
        unaEmpresa.Estado = "D"
    }

    else
    {
        unaEmpresa.Estado = "H";
    }
    ListaDeEmpresas();
}

//PERSONA*

function RealizarEnvioInter()
{
    document.querySelector('#Titulo').innerHTML = 'Realizar Envio';
    Ocultar('divMenu');
    Mostrar('realizarEnvio')
}

function RealizarEnvio()
 {

     let usuario = UsuarioLogeado.usuario;
     let vehiculo = document.querySelector('#Vehiculos').value;
     let distancia = parseFloat(document.querySelector("#kmPedidos").value);
     let descripcion = document.querySelector("#descripcion").value;
     let foto = document.querySelector("#foto").value;
     let empresa = null;
    

     if (vehiculo != "NINGUNO" && distancia >0 && descripcion != "" && foto != "")
     {
           let pedidoAgregar = new Pedido(usuario,vehiculo,distancia,descripcion,foto,empresa)

           Pedidos.push ( pedidoAgregar);


           document.querySelector('#MensajeEnvio').innerHTML =  "Pedido ingresado correctamete";
           document.querySelector('#Vehiculos').value = "NINGUNO";
           document.querySelector("#kmPedidos").value = "";
           document.querySelector("#descripcion").value = "";
           document.querySelector("#foto").value = "";

     }

     else
     {
         let mensaje = "";
       if(vehiculo == "NINGUNO")
       {
           mensaje = "El vehiculo no puede ser ninguno";
        document.querySelector('#MensajeEnvio').innerHTML =  mensaje;
       }

       if(distancia <= 0)
       {
        mensaje =  mensaje + " " +  "La distancia debe ser mayor a 0";
        document.querySelector('#MensajeEnvio').innerHTML =  mensaje;
       }

       if(descripcion == "")
       {
        mensaje =  mensaje + " " +  "La descripcion no puede ser nula";
        document.querySelector('#MensajeEnvio').innerHTML =  mensaje;
      }

      if( foto == "")
      {
        mensaje =  mensaje + " " +  "La foto no puede ser nula";
        document.querySelector('#MensajeEnvio').innerHTML =  mensaje;
      }

       }
      
       document.querySelector('#Vehiculos').value = "NINGUNO";
       document.querySelector("#kmPedidos").value = "";
       document.querySelector("#descripcion").value = "";
       document.querySelector("#foto").value = "";
     }
    



function ListadeEnvios ()
{
    document.querySelector('#Titulo').innerHTML = 'Lista de los envios';
    Ocultar('divMenu');
    Mostrar('ListadoEnvios')
    
}

function armarlistaEnvios()
{

    let tableHTML = "<table border = '10'>";
    tableHTML += "<tr><tr><th>Foto</th><th>Estado</th><th>Empresa</th></tr>";

  
    
        for(let i=0;i<Pedidos.length;i++)
        {
            let Pedido = Pedidos[i];
            
            if(Pedido.UsuarioDePedido == UsuarioLogeado.Usuario)
            {
               
                tableHTML += "<td><img src='imagenes/"+Pedido.foto+"'width=200px></td><td>"+  Pedido.Estado + "</td> <td>"+ Pedido.empresa + "</td></tr>";
            }
            
            
        }
    tableHTML += "</table>"
    document.querySelector("#listaEnvios").innerHTML = tableHTML;
}

let contadorPendientes = 0;
let contadorEnTrnasito = 0;
let contadorFinalizada = 0;


function EstadisticaPersona()
{
    Ocultar('divMenu');
    Mostrar('InformacionEstadistica')

    document.querySelector('#InformacionEstadistica').innerHTML = '';

    let tableHTML = "<table border = '10'>";
    document.querySelector('#Titulo').innerHTML = 'Visualizar información estadística';
    tableHTML += " <caption>Cantidad de envios por Estado</caption><tr><tr><th>Pendientes</th><th>En transito </th><th>Finalizado</th></tr>";
    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        let mensaje;

        
        if(Pedido.UsuarioDePedido == UsuarioLogeado.Usuario)
        {
            
            if(Pedido.Estado == "PENDIENTE")
            {
              contadorPendientes++;
            }

            else if(Pedido.Estado == "EN TRANSITO")
            {
                contadorEnTrnasito++;
            }

            else if (Pedido.Estado == "FINALIZADA")
            {
                contadorFinalizada++;
            }

        }

     
    }

    tableHTML +="<td>" + contadorPendientes + "</td> <td>"+ contadorEnTrnasito +"</th><th>" + contadorFinalizada+"</td></tr>";
    tableHTML += "</table>"
    document.querySelector("#EstadisticaPersona").innerHTML = tableHTML;

    let tableHTML1 = "<table border = '10'>";
   
    document.querySelector('#Titulo').innerHTML = 'Visualizar información estadística';
    tableHTML1 += " <caption>Porcentaje de envios por Estado</caption><tr><tr><th>Pendientes</th><th>En transito </th><th>Finalizado</th></tr>";
    for(let i=0;i<Pedidos.length;i++)
    {
        let Pedido = Pedidos[i];
        let mensaje

        
        if(Pedido.UsuarioDePedido == UsuarioLogeado.Usuario)
        {
            
            if(Pedido.Estado == "PENDIENTE")
            {
              contadorPendientes++;
            }

            else if(Pedido.Estado == "EN TRANSITO")
            {
                contadorEnTrnasito++;
            }

            else if (Pedido.Estado == "FINALIZADA")
            {
                contadorFinalizada++;
            }

        }

     
    }

    tableHTML1+="<td>" +contadorPendientes*100/(contadorPendientes+contadorEnTrnasito+contadorFinalizada)+"%" + "</td> <td>"+ contadorEnTrnasito*100/(contadorEnTrnasito+contadorPendientes+contadorFinalizada )+"%"+"</th><th>" + contadorFinalizada*100/(contadorEnTrnasito+contadorPendientes+contadorFinalizada )+"%"+"</td></tr>";
    tableHTML1 += "</table>"
    document.querySelector("#EstadisticaPorcentaje").innerHTML = tableHTML1;
    contadorPendientes =0;
    contadorEnTrnasito=0;
    contadorFinalizada=0;

}



     


 