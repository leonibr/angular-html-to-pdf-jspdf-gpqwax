import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  @ViewChild('content') content: ElementRef;

  makePdf() {
    let pdf = new jsPDF({
      format: 'a5',
      unit: 'cm',
      orientation: 'p',
    });
    pdf.html(this.content.nativeElement, {
      callback: function (doc) {
        doc.save();
      },
      x: 10,
      y: 10,
    });
    // pdf.addPage();
    // pdf.addHTML(this.content.nativeElement, function () {
    //   pdf.save('obrz.pdf');
    // });
  }
}
