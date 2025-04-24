import { inject, Inject, Injectable } from "@angular/core";
import { Subscription, tap } from "rxjs";
import { StateIndex } from "../domain/state";
import { GetUserByEmailService } from "../infrastructure/services/get-user-email.service";

@Injectable({
    providedIn: 'root'
})
export class GetUserByEmailUseCase {
    private readonly _service = inject(GetUserByEmailService);
    private _state = inject(StateIndex);
    private subscriptions: Subscription;

    //#region Methods
    initSubscriptions(): void {
        this.subscriptions = new Subscription();
    }

    destroySubscriptions(): void {
        this.subscriptions.unsubscribe();
    }
    //#endregion

    execute(email: string): void {
        this.subscriptions.add(
            this._service.execute(email).subscribe()
        )
    }
}