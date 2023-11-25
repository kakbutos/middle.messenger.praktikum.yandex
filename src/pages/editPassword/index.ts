import { tmpl } from './editPassword.tmpl';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import { passwordReg } from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';
import { Images } from '@/components/ui/images';
import { State, withStore } from '@/common/store/store';
import ProfileController from '@/controllers/user/profileController';
import { ChangePasswordData } from '@/types/profile/profile';

export class EditPassword extends Block {
    init() {
        const changePassword = async (e: MouseEvent) => {
            const data = getFormData<ChangePasswordData>(e);

            if (data) {
                await ProfileController.changePassword(data);
            }
        };

        this.children.imageComponent = new Images({ path: this.props.avatar, alt: 'avatar', classNames: 'profile__img' });
        this.children.linkToHome = new HomeSidebar({});
        this.children.oldPassword = new InputWrapper({
            input: {
                type: 'password', classNames: 'input_clear', placeholder: '••••••••', name: 'oldPassword', checkValidFunc: passwordReg,
            },
            classNames: 'input__wrapper_clear',
        });
        this.children.newPassword = new InputWrapper({
            input: {
                type: 'password', classNames: 'input_clear', placeholder: '••••••••', name: 'newPassword', checkValidFunc: passwordReg,
            },
            classNames: 'input__wrapper_clear',
        });
        // this.children.repeatPassword = new InputWrapper({
        //     input: {
        //         type: 'password', classNames: 'input_clear', placeholder: '••••••••',
        //         name: 'repeatPassword', checkValidFunc: passwordReg,
        //     },
        //     classNames: 'input__wrapper_clear',
        // });
        this.children.button = new Button({
            type: 'submit', text: 'Сохранить', classNames: 'button button_blue button-text_white', events: { click: changePassword },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { ...state.user };
};

export const editPassword = withStore(mapStateToProps)(EditPassword);
