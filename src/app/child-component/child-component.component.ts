import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [ReactiveFormsModule, DxTextBoxModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() form!: FormGroup<{
    firstname: FormControl<string>;
    lastname: FormControl<string>;
  }>;

  constructor() {}
}
