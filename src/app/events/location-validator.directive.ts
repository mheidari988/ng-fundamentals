import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true
    }
  ]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }
  validate(formGroup: FormGroup): ValidationErrors | null {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // Address & City & Country should available.
    // OR
    // Online Url should be avalable
    if ((addressControl && addressControl.value &&
      cityControl && cityControl.value &&
      countryControl && countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    }

    return { validateLocation: false };
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
