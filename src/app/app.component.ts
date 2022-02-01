import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {

      "key": "f1",
      "type": "input",
      "defaultValue" : "0",
      "templateOptions": {
        "label": "F1 (order 1)",
      },
    },
    {
      "key": "f2",
      "type": "textarea",
      "hideExpression": "!model.f1",
      "templateOptions": {
        "label": "F2 (order 2)",
      },
    },
    {
      "key": "f3",
      "type": "input",
      "templateOptions": {
        "label": "F3 (order 3)"
      }
    }
  ];

  onSubmit(model) {
    console.log(model);
  }
}
