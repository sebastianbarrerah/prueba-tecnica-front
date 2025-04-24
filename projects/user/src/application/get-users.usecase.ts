import { inject, Injectable } from "@angular/core";
import { GetUserService } from "../infrastructure/services/get-user.service";
import { StateIndex } from "../domain/state";
import { Observable, Subscription, tap } from "rxjs";
import { IUser } from "../domain/model/user.model";

@Injectable({
    providedIn: 'root'
})
export class GetUsersUseCase {
    private readonly _service = inject(GetUserService);
    private _state = inject(StateIndex);
    private subscriptions: Subscription;

    //#region Methods

    usersData$(): Observable<IUser[]> { 
        return this._state.userStateGetter.users.$();
      }

    initSubscriptions(): void {
        this.subscriptions = new Subscription();
    }

    destroySubscriptions(): void {
        this.subscriptions.unsubscribe();
    }
    //#endregion

    execute(): void {
        this.subscriptions.add(
            this._service.execute().pipe(
                tap((users) => {
                    this._state.userStateGetter.users.set([...users]);
                }),
            ).subscribe()
        )
    }
}