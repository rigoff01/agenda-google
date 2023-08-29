const HOJA = SpreadsheetApp.openById('1OA4EzPA9nkylD9_LO-R3fzejYPpQDBMb2HErCGEGmtI').getActiveSheet();

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

function insertarContacto(nombre, canton, correo, telf)
{
    HOJA.appendRow([nombre, canton, correo, telf]);
}

function borrarContacto(numFila)
{
    HOJA.deleteRow([numFila]);
}

function modificarContacto(numFila, datos)
{
    let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
    celdas.setValues([[datos.nombre,datos.canton, datos.correo, datos.telf]]);
}