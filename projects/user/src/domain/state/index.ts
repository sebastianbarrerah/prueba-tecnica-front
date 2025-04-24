import { inject, Injectable } from "@angular/core";
import { UserState } from "./user.state";

@Injectable({
    providedIn: 'root'
})

export class StateIndex {
    private readonly _userState = inject(UserState);

    get userStateGetter() {
        return this._userState.store();
    }
}