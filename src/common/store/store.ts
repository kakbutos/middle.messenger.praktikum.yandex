import { EventBus } from '@/common/eventBus/eventBus';
import { set } from '@/common/helpers/object';
import Block from '@/common/block/block';
import { User } from '@/types/auth/auth';

export interface State {
	user?: User;
}
/* eslint-disable */
export enum CustomStorageEvent {
	UpdateState = 'update',
}
/* eslint-enable */
class Store extends EventBus {
    private state: State = {};

    getState() {
        return this.state;
    }

    set(path: string, value: unknown) {
        set(this.state, path, value);

        this.emit(CustomStorageEvent.UpdateState, this.state);
    }
}

const store = new Store();

export function withStore(mapStateToProps: (state: State) => any) {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(props: any) {
                super({ ...props, ...mapStateToProps(store.getState()) });

                store.on(CustomStorageEvent.UpdateState, () => {
                    const propsFromState = mapStateToProps(store.getState());
                    this.setProps(propsFromState);
                });
            }
        };
    };
}

export default store;
