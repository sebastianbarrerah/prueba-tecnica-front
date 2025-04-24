import { inject, Injectable } from "@angular/core";
import { StateIndex } from "../domain/state";
import { Subscription, tap } from "rxjs";
import { IUser } from "../domain/model/user.model";
import { CreateUserService } from "../infrastructure/services/create-user.service";

@Injectable({
    providedIn: 'root'
})

export class CreateUserUseCase {
    private readonly _service = inject(CreateUserService);
    private readonly _state = inject(StateIndex);
    private subscriptions: Subscription;

    //#region Methods
    initSubscriptions(): void {
        this.subscriptions = new Subscription();
    }

    destroySubscriptions(): void {
        this.subscriptions.unsubscribe();
    }
    //#endregion

    execute(user: IUser): void {
        this.subscriptions.add(
            this._service.execute(user).pipe(
                tap((userNew) => {
                    const users = this._state.userStateGetter.currentUser.snapshot();
                    this._state.userStateGetter.currentUser.set(userNew)
                }),
            ).subscribe()
        )
    }


}