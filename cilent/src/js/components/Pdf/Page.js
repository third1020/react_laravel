import React, { Component } from 'react';

import Script from 'react-load-script';
import jsPDF from 'jspdf';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };

        this.CreatePdf = this.CreatePdf.bind(this);
    }

    CreatePdf() {
        var doc = new jsPDF();

        doc.text('Hello world!', 10, 10);
        doc.save('a4.pdf');
    }

    render() {
        return (
            <div>
                <Script
                    url="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"
                    integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/"
                    crossorigin="anonymous"
                />
                <Script url="https://unpkg.com/jspdf@latest/dist/jspdf.min.js" />

                <button onClick={() => this.CreatePdf()}>download</button>
            </div>
        );
    }
}

export default Page;
