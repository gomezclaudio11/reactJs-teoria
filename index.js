/**
 * CLASE 1
 REACT
 1° PREMISA: Optimizar los movimientos
 2° PREMISA: flujo de datos unidireccional / de arriba a abajo

 VIRTUAL DOM: Es un patron de comportamiento y REACT lo implementa
            con una tecnologia llamada "fiber"
            Una representacion virtual de UI que se mantiene en memoria
            y en sincronia reconciliado con el DON real

        En 1° lugar, React ejecuta un algoritmo de "diffing"
        que identifica lo que ha cambiado
        2° lugar RECONCILIACION donde se actualiza el DOM con los
        resultados de DIFF

NODE
    Es un entorno de ejecucion de javascript
    Que le permite al codifo en js ser ejecutado en nuestra pc
NPM: node packager manager: Para instalar modulos adicionales
    Funciona como un repositorio para la publicacion de proyectos node.js
    de codigo abierto
    Como una herramienta de linea de comandos, ayuda a instalar y desintalar paquetes

CLI
    La interface de linea de comandos, es un metodo que permite
    a los usuarios dar instrucciones a algun programa informatico
    por medio de una linea de texto simple

VAMOS AL CODIGO
1 instalar react npm install -g create-react-app
2 creacion de la aplicacion create-react-app my-app
3 para ejecutar la aplicacion npm start 
(dentro del directorio de la apllicacion creada)

 */

/**
 * CLASE 3
WEBPACK
    Es un module bundler o empaquetador de modulos
    viene incluido cuando ponemos create-react-app
TRANSPILING
    Es el proceso de convertir codigo escrito en un lenguaje
    a su representacion en otro lenguaje
JSX 
    Es una extension de sintaxis de javascript que parece a HTML
    es una extension que permite hacer llamadas a funciones y 
    a construccion de objetos. No es cadena de caracteres ni html
    Es recomendable usarlo en react
    - Los elementos deben ser balanceados. Apertura y cierre
    - si el elemento no tiene hijos, deben ser auto-cerrado
      <img serc= "" />
    - en lugar de class="", se usa className=""
    - CamelCase en onClick / onChange etc
 */


/**
 CLASE 4 COMPONENTES
  Las aplicaciones de react se construyen mediantes componentes
  Podemos crear aplicaciones completas de manera modular
  DISEÑO MODULAR: Los componentes permiten separar la interfaz
    de usuario en piezas independientes y reutilizables
    Ventajas: facilidad de mantenimiento depuracion escalabilidad
    se puede hacer pruebas unitarias
Se pueden dividir en dos
    Componentes basados en clases
    componentes basados en funciones
    Los dos pueden recibir propiedades (props)
    Tienen la capacidad de hacer render de un unico elemento

PROPIEDADES
Es la forma que tiene react para pasar parametros de un 
componente superior a sus children
Es la manera de implementar un flujo de datos unidireccional
Si alguna prop es una funcion, el child component puede
llamarla para provocar efectos secundarios en el parent
    - Componentes basados en clases: las propiedades enviadas
    al componente las recibiremos a traves de this.props
    para acceder a un objeto en el cual tendremos todas
    las propiedades disponibles
    - componentes basados en funciones: Se reciben como parametros
    de la funcion

PATRONES
COMPONENTES DE PRESENTACION: Se limitan a mostrar datos
    Orientados al aspecto visual
    Reciben callbacks x medio de props
    Son componentes funcionales 
    No tienen estado
COMPONENTES CONTENEDORES: 
    Encapsula a otros componentes y proporcionas las propiedades
    que necesitan
    Orientados al funcionamiento
    Contienen componentes de presentacion
    Se comunican con la fuente de datos
    Tienen estado para representar el cambio de datos
    LLamadas a las API's

    CHILDREN
    Permite pryectar o translucir uno a mas componene denro otro
    
 */

/**
CLASE 5 
COMPONENTES 2
Las props pueden ser: valores comunes (num, bool, array)
                        funciones
                        componentes
                        children
            
STATE CLASS BASED
Componentes basados en clases

STATE FUNCTION BASED
Componentes basados en funciones
1° problema es que las funciones viven unicamente en el 
tiempo que son ejecutadas
odas las constantes o variables que declare para intentar
mantener el estado moriran y seran reiniciadas en cada render

STATE HOOK (IMPORTANTE)
    ESTRUCTURA BASICA: useState ([ valor inicial ])
    se declara con spread syntax para simplificar
    se cambia con setName
    No declarar setName entre la declaracion del hook y el render
    Se ejecutan en orden y nuca en simultaneo

CICLOS DE VIDAS
Serie de estados por los cuales pasa todo componente a lo largo de su existencia
Es necesario saberlo xq hay acciones que debemos realizarlas en el momento
correcto
    -No bloquear el rendering con tareas pesadas y sincronicas
    -Ejecutar tareas asincronicas con efectos secundarios luego 
    del montaje (mount)
3 clasificaciones:
Montaje: Se produce la 1° vez que un componente va a generarse
        incluyendose en el DOM
Actualizacion: Se produce cuando el componenete ya generado
        se esta actualizando
Desmontaje: Se produce cuando el componente se elimina del DOM

METODOS DE CICLOS DE VIDA (CLASS BASED)
    componentDidMount() => Solo se ejecuta del lado del cliente
            se produce despues del 1° renderizado
            Si se tiene que realizar llamadas Ajax, setIntervals 
            este es el sitio adecuado
    shouldComponentUpdate(nextProps, nextState) => Es un metodo
            de actualizacion
            Debe devolver un valor boooleano
            Se invocara cuando se producen los cambios de propiedades
            o cambios de estado
            Es una oportunidad para decirle a react si queremos que
            actualice la vista
    componentDidUpdate (prevProps, prevState) => Metodo de
            actualizacion que se ejecuta despues de haberse 
            producido la actualizacion del componente
            Como parametros recibes el valor anterior de las 
            propiedades y el estado
    componentWillUnmount() => Metodo de desmontado
            Se ejecuta cuando el componente se va a retirar del DOM

METODOS DE CICLO DE VIDA (FUNCTION BASED)
HOOK DE EFECTO
useEffect
Sirve pra controlar el ciclo de vida 
y para mutaciones(props, estado)
toda accion effect-hook se ejecuta al montar
Ningun efecto bloquea el render
todas las acciones y limpieza se realizan en orden 
*/

/**
 CLASE 6 PROMISES ASINCRONIA Y MAP

PROMISE
    Es un objeto que permite representar y seguir el ciclo de vida
    de una tarea/ funcion
    Estados posibles: PENDING => FULLFILLED / REJECTED 
  
 
 */

//EJEMPLO
// Funcion que retorna una promesa con un array de objetos
function getProductData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            const products = [
                {
                    id:1,
                    name: "producto 1",
                    description: "descripcion del producto 1",
                    stock: 10
                },
                {
                    id: 2,
                    name: "producto 2",
                    description: "descripcion del producto 2",
                    stock: 12
                }
            ];
            resolve(products);
        }, 3000); // resuelve la promesa despues de 3 seg
    });
}

// llama a la funcion y maneja el resultado
getProductData()
    .then (products => {
        //imprime los productos en la consola
        products.forEach(product => {
            console.log(product);
        });
    })
    .catch(error => {
        console.error("error", error);
    });

/**
 MAP
 El metodo map() nos permite generar un nuevo array
 tomando como base otro array y utilizando una funcion
 transformadora
 */
const users = [
    {nombre: "claudio"},
    {nombre: "gomez"}
]
console.log(users);
console.log(users.map (user => user.nombre));
console.log(users.map (user => user.nombre).join(","));
/**
 En react con el metodo map podremos hacer render de una
 coleccion de objetos
 Idealmente debemos incluir en cada elemento la propiedad key
 que marque la identidad del elemento
 */

 /**
 CLASE  7
 CONSUMIENDO API´S
  PARADIGMA DE INTERCAMBIO DE INFORMACION
  MODELO CLIENTE-SERVIDOR
  CLIENTE(consumidor)
  SERVIDOR(provedor)
  Este modelo establece que los distintos consumidores se
  identifican entre ellos y acuedarn una manera de transferir
  la informacion

  Quien inicia la operacion?
  El CLIENTE la inicia cuando solicita info, el servidor envia
  la respuesta, fin de la comunicacion
  
  Si invertimos la logica, se llama PUSH
  El SERVIDOR la inicia, el elige el momento del inicio de la 
  transferencia y la envia a un servicio
  El servidor se la provee al cliente
  Surge para generar engagement y lograr que los usuarios
  interactuen

  REQUESTS VIA HTTPS
  Para ayudar a realizar una solicitud a un servidor
  Nos permite establecer un protocolo de transferencia
  definido por:
  Direccion/URL
  verbo(GET, POST, PUT, DELETE)
  parametros: via query o url)
  header
  body (contenido en un post)

QUERY PARAMS
Nos permite incluir en la direccion informacion que se usa
para especificarle al receptor parametros para efectuar una
busqueda
se separa la URL de los parametros utilizando ?
cada parmetro tendra key=value & key2=value2
cada parametro se separa con &

RESTFUL
Cuando se crea y provee un servicio basado y pensado en 
terminos de recursos y se respetan las convenciones
de verbo/metodo y codigo de respuesta. Estamos frente a 
un diseño arquitectural de tipo REST
Si ademas transferimos javascript o xml es conocido como
AJAX

REQUESTS EN EL BROWSER
FETCH
Podemos hacer un request utilizando Fetch API
Nos provee una promesa, que se resuelve al terminar el request
Esta respuesta es una promise que nos permite acceder a la 
respuesta

CORS
Es un bloqueo de seguridad efectuado por el navegador
Se soluciona configurando al otro servidor para que admita
cors respondiendo el siguiente header ante un OPTIONS preflight
  */