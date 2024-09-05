import {Component, input, output} from '@angular/core';

@Component({
    selector: 'app-input-output',
    standalone: true,
    imports: [],
    templateUrl: './input-output.component.html',
    styleUrl: './input-output.component.css'
})
export class InputOutputComponent {
    public text = input.required<string>();

    public textSelected = output<void>();

    protected _emitClick(): void {
        this.textSelected.emit();
    }

}
