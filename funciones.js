function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GoogleApps Script');

}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1OA4EzPA9nkylD9_LO-R3fzejYPpQDBMb2HErCGEGmtI').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}