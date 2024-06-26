import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alerts() {
    window.app.alert = (d) => {
        const {message, type, duration} = d;
        toast(message, {type: type, pauseOnHover: false, autoClose: duration || 2000})
    }

    return (
        <ToastContainer
            position="bottom-left"
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            closeButton={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
            transition={Bounce}></ToastContainer>
    )
}