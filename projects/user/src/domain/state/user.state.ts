import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "shared";
import { IUser } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserState {
    private readonly _factory = inject(StateFactory);
    private readonly $user = new BehaviorSubject<IUser>(null);
    private readonly $users = new BehaviorSubject<IUser[]>([]);
    private readonly $currentUser = new BehaviorSubject<IUser>(null);

    store() {
        return {
            users: this._factory.state(this.$users),
            user: this._factory.state(this.$user),
            currentUser: this._factory.state(this.$currentUser)
        }
    }

}