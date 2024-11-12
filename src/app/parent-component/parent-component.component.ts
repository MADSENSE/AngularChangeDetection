import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component.component';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildComponent, ReactiveFormsModule],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  readonly form = this.formBuilder.group({
    firstname: this.formBuilder.control<string>(''),
    lastname: this.formBuilder.control<string>(''),
  });

  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  async clickMe(): Promise<void> {
    console.log('Promise Creation');
    await this.serviceFunc();

    console.log('Promise Resolved');
    this.rebuildForm();
  }

  serviceFunc(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  private rebuildForm(): void {
    this.form.reset({
      firstname: 'Test firstname',
      lastname: 'Test lastname',
    });
  }
}
