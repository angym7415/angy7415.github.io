$(document).ready(function()
 {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var config = {
    apiKey: "AIzaSyCPvFqv2k1Czd6Me7m7Ekw8zNM0O2Re_EQ",
    authDomain: "angelica-56c9f.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://angelica-56c9f-default-rtdb.firebaseio.com",
    storageBucket: "angelica-56c9f.appspot.com"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    $("#botonGuardar").click(function()
    {
        
        var Clave = document.getElementById("clave").value;
        var Nombre = document.getElementById("nombre").value;
        var Telefono = document.getElementById("telefono").value;
        var Personas = document.getElementById("personas").value;
        var fecha = document.getElementById("fecha").value;

        // Indicamos que la referencia base de nuestra base de datos es productos (algo así como el padre)
        // del que colgarán el resto de nodos hijos.
        /*
        var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
        var fredRef = usersRef.child('fred');
        var fredFirstNameRef = fredRef.child('name/first');
        */
        var referencia=database.ref("productos");


        // De la siguiente forma el método sobreescribe los datos
    /*
        referencia.set(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Ahora estamos poniendo el articulo como clave en la colección
        // De esta manera podremos añadir nuevos articulos o actualizar uno ya existente.

    /*
        referencia.child(articulo).set(
        {
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Si queremos permitir que hayas artículos con nombres duplicados entonces tendremos
        // que decirle a Firebase que utilice otra clave en lugar del nombre del articulo.
        // Usaremos el método push en lugar de set
        referencia.push(
        {
            clave: Clave,
            nombre: Nombre,
            telefono: Telefono,
            personas: Personas,
            fecha: fecha
        },function()
        {
            alert('El alta se ha realizado correctamente');
        });
    });

});
