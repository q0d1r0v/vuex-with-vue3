import {createStore} from "vuex"
import vstore from "./modules/store"

const store = createStore({
    modules: {
        vstore
    }
})

export default store