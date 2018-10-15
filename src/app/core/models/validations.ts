import { FormControl, AbstractControl } from '@angular/forms';

export class Validate {
    static isEmpty(val) {

        return function (c: AbstractControl) {
            if (c && c.parent) {
                const control = c.parent.get(val);
                if (!control.value || control.value.trim() === '') {
                    const newObj = Object.create(null);
                    newObj[val] = true;
                    return newObj;
                } else {
                    return;
                }
            }
        };
    }

    static emailCriteria(c: AbstractControl) {

        if (!c.parent || !c) { return; }
        const email = c.parent.get('email') ? c.parent.get('email').value : '';
        if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email)) {
            return;
        } else {
            return { IncorrectEmail: true };
        }
    }
}
