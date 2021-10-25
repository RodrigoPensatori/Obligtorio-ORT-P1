window.addEventListener('load',inicio);

let Usuarios = new Array();




function inicio()
{
    document.querySelector('#btnLogin').addEventListener('click',Login);
    document.querySelector('#btnRegistrar').addEventListener('click',MostrarRegistrar);
    document.querySelector('#TipoUsuario').addEventListener('click',SeleccionarTipoUsr);
}

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

/* REGISTRARSE */

function MostrarRegistrar()
{
   
    Ocultar('Login,btnCrearUsr');
    Mostrar('Registro');
    document.querySelector('#Titulo').innerHTML = 'REGISTRO'
   
}


function SeleccionarTipoUsr()
{
    let TipoUsuario = document.querySelector('#TipoUsuario').value;

    switch(TipoUsuario)
    {
        case 'EMPRESA':
            Ocultar('Persona');
            Mostrar('Empresa,btnCrearUsr');
            break;

        case 'PERSONA':
            Ocultar('Empresa');
            Mostrar('Persona,btnCrearUsr');
            break;
        
        default:
            Ocultar('Empresa,Persona,btnCrearUsr');   
            break; 

    }
    

}

function agregarUsuario()
{
    
    let pude = false;
    
    if(!VerificarRegistro(Usuario,Contraseña))
    {
        
    }
    return pude;
}

function VerificarRegistro(Usuario,Contraseña)
{
    
    let encontrado = false;
    
    let objUsuario = new Usuario('admin','123');
    Usuarios.push(objUsuario);
    for(let i=0;i<Usuarios.length;i++)
    {
        let ListaUsuario = Usuarios[i];
        let AuxUsuario = ListaUsuario.Usuario;
        let AuxContraseña = ListaUsuario.Contraseña;
        if (AuxUsuario == Usuario && Contraseña == AuxContraseña)
        {
            encontrado =  true;
        }
    }

}



/*   FIN REGISTRO   */



/* INICIAR SESION  */

let CantIntentos = 0;

let objUsuario = new Usuario('admin','123');
Usuarios.push(objUsuario);
    
function Login()
{
    let VerUsuario = document.querySelector('#txtUsuario').value;
    let VerContraseña = document.querySelector('#txtPassword').value;
    
    CantIntentos += 1;

    if(CantIntentos < 5)
    {
        console.log('Entre')
        isOK = VerificarLogin(VerUsuario,VerContraseña);
        if(isOK)
        {
            
            CantIntentos = 0
            document.querySelector('#Mensaje').innerHTML = 'Correctoo' 
        }
        else
        {   
            console.log('3Entre')
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
    
    
    
    for(let i=0;i<Usuarios.length;i++)
    {
        let Usuario = Usuarios[i];
         
        if (Usuario.Usuario.toUpperCase() == VerUsuario.toUpperCase() && Usuario.Contraseña.toUpperCase() == VerContraseña.toUpperCase())
        {
            
            admitido =  true;
            
        }
        else
        {
            
            admitido =  false;
        }
    }
    return admitido;
}

/* FIN INICIAR SESION  */