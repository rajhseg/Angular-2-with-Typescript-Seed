import { Component,ViewEncapsulation } from '@angular/core'

@Component({
    template:`
    <br/>
    <div>
      <h1>This is a About page</h1>
     </div>
    <br/>        
    `,
    encapsulation:ViewEncapsulation.None,
     styles:[`
    
        .border{
            border:2px solid blue;
        }

        .strong{
            font-weight:bold;
        }

        .light{

        }

    `]
})
export class AboutComponent {

}