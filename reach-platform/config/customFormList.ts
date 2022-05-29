/**
 * 自定义表单配置
 */
import {
    COMPONENTS_FORM,
    COMPONENTS_COLUMN,
    COMPONENTS_ADD_FORM,
    FORM_VERSION_FORM,
    COMPONENTS_VERSION_COLUMN
} from './componentForm';
import {CARDS_FORM, SUBCARD_COLUMN, CARDS_ADD_FORM, CARDS_VERSION_FORM, SUBCARD_VERSION_COLUMN} from './subCard';
import {COMPONENT_API, CARD_API} from '../api/component';


export const CUSTOM_FORM: any = {
    component: {
        url: '/custom-form',
        queryForm: COMPONENTS_FORM,
        api: COMPONENT_API,
        columns: COMPONENTS_COLUMN,
        addForm: COMPONENTS_ADD_FORM,
        vueFormFile: 'ComponentAdd'
    },
    subCard: {
        url: '/subcard-list',
        queryForm: CARDS_FORM,
        api: CARD_API,
        columns: SUBCARD_COLUMN,
        addForm: CARDS_ADD_FORM
    },
    formVersion: {
        url: '/form-version',
        queryForm: FORM_VERSION_FORM,
        api: COMPONENT_API,
        columns: COMPONENTS_VERSION_COLUMN,
        addForm: COMPONENTS_ADD_FORM,
        vueFormFile: 'ComponentAdd'
    },
    subCardVersion: {
        url: '/subcard-version',
        queryForm: CARDS_VERSION_FORM,
        api: CARD_API,
        columns: SUBCARD_VERSION_COLUMN,
        addForm: CARDS_ADD_FORM
    }
};