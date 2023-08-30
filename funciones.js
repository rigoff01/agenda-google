const HOJA = SpreadsheetApp.openById('1OA4EzPA9nkylD9_LO-R3fzejYPpQDBMb2HErCGEGmtI').getActiveSheet();
const CARPETA = DriveApp.getFolderById('1x56BB2EzIOagGTpBRi-yepPVs7Iy4ZIc');
const CABECERA_URL_IMAGEN_DRIVE = 'https://drive.google.com/uc?export=view&id=';


function doGet(datos)
{
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GoogleApps Script');

}

function doPost(datos)
{
   return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GoogleApps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerDatos()
{
     return HOJA.getDataRange().getValues();
 
}

function insertarContacto(contacto, imagen)
{
    if(imagen)
    {
       let blob  = Utilities.newBlob(imagen.datos, imagen.tipo, imagen.nombre);
       let archivo = CARPETA.createFile(blob);
       contacto.imagen = CABECERA_URL_IMAGEN_DRIVE+archivo.getId();
    }
    if(imagen) contacto.imagen = guardarImagen(imagen);
    HOJA.appendRow([contacto.nombre, contacto.canton, contacto.correo, contacto.telf, contacto.imagen]);
}

function modificarContacto(contacto, imagen)
{
    if(imagen) contacto.imagen = guardarImagen(imagen);
    let celdas = HOJA.getRange('A'+contacto.fila+':E'+contacto.fila);
    celdas.setValues([[contacto.nombre, contacto.canton, contacto.correo, contacto.telf, contacto.imagen]]);
}

function guardarImagen(imagen)
{
    let blob  = Utilities.newBlob(imagen.datos, imagen.tipo, imagen.nombre);
    let archivo = CARPETA.createFile(blob);
    return CABECERA_URL_IMAGEN_DRIVE+archivo.getId();
}


function borrarContacto(numFila)
{
    HOJA.deleteRow([numFila]);
}