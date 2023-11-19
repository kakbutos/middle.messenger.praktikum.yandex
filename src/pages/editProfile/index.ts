import { tmpl } from './editProfile.tmpl';
import { HomeSidebar } from '@/widgets/ui/homeSidebar';
import Block from '@/common/block/block';
import { Button } from '@/components/ui/button';
import { getFormData } from '@/common/form/getFormData';
import {
    emailReg, loginReg, nameReg, phoneReg,
} from '@/common/form/regexp';
import { InputWrapper } from '@/widgets/ui/inputControls';
import { State, withStore } from '@/common/store/store';
import { InputProps } from '@/components/ui/input';
import ProfileController from '@/controllers/user/profileController';
import { ChangeProfileData } from '@/types/profile/profile';
import { Images } from '@/components/ui/images';

export class EditProfile extends Block {
    declare public children: {
		avatarImg: Images;
		linkToHome: HomeSidebar;
		buttonFile: Button;
		buttonSaveInputs: Button;
	} & any;

    init() {
        const loadFile = async (e: MouseEvent) => {
            const data = getFormData<Record<string, File>>(e);

            if (data && data.avatar) {
                const formData = new FormData();
                formData.append('avatar', data.avatar as File);

                await ProfileController.changeAvatar(formData);

                this.children.avatarImg.setProps({ path: this.props.avatar });
            }
        };

        const changeProfileData = async (e: MouseEvent) => {
            const data = getFormData<ChangeProfileData>(e);

            if (data) {
                await ProfileController.changeProfile(data);
            }
        };

        const inputProps: { [key: string]: InputProps }[] = [
            {
                avatarComponent: {
                    type: 'file',
                    value: this.props.value,
                    name: 'avatar',
                },
            },
            {
                emailComponent: {
                    type: 'email',
                    placeholder: 'pochta@yandex.ru',
                    value: this.props.email,
                    name: 'email',
                    checkValidFunc: emailReg,
                },
            },
            {
                loginComponent: {
                    type: 'text',
                    placeholder: 'ivanIvanov',
                    value: this.props.login,
                    name: 'login',
                    checkValidFunc: loginReg,
                },
            },
            {
                firstNameComponent: {
                    type: 'text',
                    placeholder: 'Иван',
                    value: this.props.first_name,
                    name: 'first_name',
                    checkValidFunc: nameReg,
                },
            },
            {
                secondNameComponent: {
                    type: 'text',
                    placeholder: 'Иванов',
                    value: this.props.second_name,
                    name: 'second_name',
                    checkValidFunc: nameReg,
                },
            },
            {
                displayNameComponent: {
                    type: 'text',
                    placeholder: 'Иван',
                    value: this.props.display_name,
                    name: 'display_name',
                    checkValidFunc: nameReg,
                },
            },
            {
                phoneComponent: {
                    type: 'tel',
                    placeholder: '+7 (909) 967 30 30',
                    value: this.props.phone,
                    name: 'phone',
                    checkValidFunc: phoneReg,
                },
            },
        ];

        this.children.linkToHome = new HomeSidebar({});

        inputProps.forEach((inputObj) => {
            const name = Object.keys(inputObj)[0];
            const props = inputObj[name];

            this.children[name] = new InputWrapper({
                input: {
                    classNames: 'input_clear',
                    ...props,
                },
                classNames: 'input__wrapper_clear',
            });
        });

        this.children.avatarImg = new Images({
            classNames: 'profile-edit__img',
            path: this.props.avatar,
            alt: 'avatar',
        });

        this.children.buttonFile = new Button({
            type: 'submit',
            text: 'Загрузить фото',
            classNames: 'button button_blue button-text_white',
            events: { click: loadFile },
        });

        this.children.buttonSaveInputs = new Button({
            type: 'submit',
            text: 'Сохранить',
            classNames: 'button button_blue button-text_white',
            events: { click: changeProfileData },
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: State) => {
    return { ...state.user };
};

export const editProfile = withStore(mapStateToProps)(EditProfile);
