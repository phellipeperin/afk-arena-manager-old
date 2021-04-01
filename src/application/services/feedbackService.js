import { toast } from 'react-toastify';

export default {
    showMessage(message, type, options) {
        toast(message, { ...options, type });
    },
    showSuccessMessage(message, options) {
        this.showMessage(message, 'success', options);
    },
    showInfoMessage(message, options) {
        this.showMessage(message, 'info', options);
    },
    showWarningMessage(message, options) {
        this.showMessage(message, 'warning', options);
    },
    showErrorMessage(message, options) {
        this.showMessage(message, 'error', options);
    },
};
