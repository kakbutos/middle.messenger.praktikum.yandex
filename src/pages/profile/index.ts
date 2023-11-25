import { tmpl } from './profile.tmpl';
import { Link } from '@/components/ui/link';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import AuthController from '@/controllers/auth/authController';
import { State, withStore } from '@/common/store/store';
import { Images } from '@/components/ui/images';

export class Profile extends Block {
    init() {
        const logout = async () => {
            await AuthController.logout();
        };

        this.children.imageComponent = new Images({ path: this.props.avatar, alt: 'avatar', classNames: 'profile__img' });
        this.children.changeProfile = new Link({ text: 'Изменить данные', to: '/settings', classNames: 'link link_blue' });
        this.children.changePassword = new Link({ text: 'Изменить пароль', to: '/changePassword', classNames: 'link link_blue' });
        this.children.logout = new Link({ text: 'Выйти', classNames: 'link link_red', events: { click: logout } });
        this.children.linkToHome = new HomeSidebar({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { ...state.user };
};

export const profile = withStore(mapStateToProps)(Profile);
