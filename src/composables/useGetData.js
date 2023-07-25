import {ref} from "vue";
import axios from "axios";
import {toast} from "vue3-toastify";

export const useGetData = () => {
    const ready = ref(false);
    const error = ref(false);
    const data = ref(null);
    const getData = async (url) => {
        ready.value = false;
        error.value = false;
        try {
            const response = await axios.get(url)
            data.value =response.data;
        } catch (e) {
            error.value = true;
            toast.error("Hubo un error al obtener los datos");
        } finally {
            ready.value = true;
        }
    }

    return {
        getData,
        data,
        ready,
        error
    }
}