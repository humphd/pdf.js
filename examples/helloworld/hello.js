/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

//
// See README for overview
//

addEventListener('DOMContentLoaded', function() {
  getPdf('helloworld.pdf', function getPdfHelloWorld(data) {
    // Instantiate PDFDoc with PDF data
    var pdf = new PDFDoc(data);
    var page = pdf.getPage(1);
    var scale = 1.5;

    // Prepare canvas using PDF page dimensions
    var canvas = document.getElementById('pdf-canvas');
    var context = canvas.getContext('2d');

    // Render PDF page into canvas context
    page.startRendering(context, webGLStart());
  });
}, false);
