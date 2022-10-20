import React from 'react';

//	Redux Imports
//	Tools / Reference Imports

//	Components Imports
import Input from 'components/essentials/inputs/input.component';



class HomePage extends React.Component {
    state = {};

    render_base64SVG = () => {
        /*
        <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path style="fill:#2196F3;" d="M320,85.333h64c5.891,0,10.667-4.776,10.667-10.667v-64C394.667,4.776,389.891,0,384,0h-64 c-64.772,0.071-117.263,52.561-117.333,117.333V192H128c-5.891,0-10.667,4.776-10.667,10.667v64c0,5.891,4.776,10.667,10.667,10.667 h74.667v224c0,5.891,4.776,10.667,10.667,10.667h64c5.891,0,10.667-4.776,10.667-10.667v-224h74.667 c4.589-0.003,8.662-2.942,10.112-7.296l21.333-64c1.862-5.589-1.16-11.629-6.749-13.491c-1.084-0.361-2.22-0.546-3.363-0.547h-96 v-74.667C288,99.66,302.327,85.333,320,85.333z"/>
        </svg>
        */

        let base64_SVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzIxOTZGMzsiIGQ9Ik0zMjAsODUuMzMzaDY0YzUuODkxLDAsMTAuNjY3LTQuNzc2LDEwLjY2Ny0xMC42Njd2LTY0QzM5NC42NjcsNC43NzYsMzg5Ljg5MSwwLDM4NCwwaC02NA0KCWMtNjQuNzcyLDAuMDcxLTExNy4yNjMsNTIuNTYxLTExNy4zMzMsMTE3LjMzM1YxOTJIMTI4Yy01Ljg5MSwwLTEwLjY2Nyw0Ljc3Ni0xMC42NjcsMTAuNjY3djY0YzAsNS44OTEsNC43NzYsMTAuNjY3LDEwLjY2NywxMC42NjcNCgloNzQuNjY3djIyNGMwLDUuODkxLDQuNzc2LDEwLjY2NywxMC42NjcsMTAuNjY3aDY0YzUuODkxLDAsMTAuNjY3LTQuNzc2LDEwLjY2Ny0xMC42Njd2LTIyNGg3NC42NjcNCgljNC41ODktMC4wMDMsOC42NjItMi45NDIsMTAuMTEyLTcuMjk2bDIxLjMzMy02NGMxLjg2Mi01LjU4OS0xLjE2LTExLjYyOS02Ljc0OS0xMy40OTFjLTEuMDg0LTAuMzYxLTIuMjItMC41NDYtMy4zNjMtMC41NDdoLTk2DQoJdi03NC42NjdDMjg4LDk5LjY2LDMwMi4zMjcsODUuMzMzLDMyMCw4NS4zMzN6Ii8+DQo8L3N2Zz4NCg=="

        return ( <img alt={ '' } className={ 'svg-base64' } src={ base64_SVG } /> );
    };

    render_HomePage = () => {
        let list = [ 'frango', 'carne', 'peixe' ];

        // --- Testing Function : [ Base64 <=> SVG ];
        var testing = '0';
        console.log( testing );

        return (
            <div className={ 'page-home' }>

                { this.render_base64SVG() }

                <Input
                    type={ 'checkbox' }
                    label={ 'label test' }
                    placeholder={ 'testing' }
                    options={ list }
                />
            </div>
        );
    };

    render () {
        return this.render_HomePage();
    };
};


export default ( HomePage );
