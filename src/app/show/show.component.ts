import { Component } from "@angular/core";
import { FormBuilder, Validators,FormGroup,FormControl,FormArray,ReactiveFormsModule,FormsModule} from "@angular/forms";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})

export class ShowComponent {

  fg: FormGroup;
  fa: FormArray;
  selected = 0;
  public count = 0;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      inputs: this.fb.array([])
    });
  }

  addControlsInFormArray(selected: number) {
    if (this.fa) {
      while (this.fa.length !== 0) {
        this.fa.removeAt(0);
      }
    }
    for (var i = 0; i < selected; i++) {
      this.fa = this.fg.get("inputs") as FormArray;
      this.fa.push(this.createItem());
    }
  }

  createItem(): FormGroup {
    return this.fb.group({
      question: new FormControl("")
    });
  }
  getValue() {
    if(this.count !== 0){
       return true;
    }
    else {
      return false;
    }
  }

  removeQuotes(value){
    return value.replace(/\"/g, "");
  }
}

   